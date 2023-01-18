import type { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Awaitable } from "next-auth";
import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";

function PrismaAdapter(client: PrismaClient): Adapter {
  return {
    createUser: (data: Omit<AdapterUser, "id">) =>
      client.user.create({
        data: {
          name: data?.name,
          email: data?.email,
        },
      }) as Awaitable<AdapterUser>,
    getUser: (id: string) =>
      client.user.findUnique({
        where: { id },
      }) as Awaitable<AdapterUser | null>,
    getUserByEmail: (email: string) =>
      client.user.findUnique({
        where: { email },
      }) as Awaitable<AdapterUser | null>,
    async getUserByAccount(
      provider_providerAccountId: Pick<
        AdapterAccount,
        "provider" | "providerAccountId"
      >
    ) {
      const account = await client.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return (
        (account?.user as Awaitable<AdapterUser>) ?? (null as Awaitable<null>)
      );
    },
    updateUser: ({ id, ...data }) =>
      client.user.update({ where: { id }, data }) as Awaitable<AdapterUser>,
    deleteUser: (id: string) =>
      client.user.delete({ where: { id } }) as
        | Promise<void>
        | Awaitable<AdapterUser | null | undefined>,
    linkAccount: (data: AdapterAccount) =>
      client.account.create({
        data: {
          access_token: data?.access_token,
          expires_at: data?.expires_at,
          id_token: data?.id_token,
          provider: data?.provider,
          providerAccountId: data?.providerAccountId,
          refresh_token: data?.refresh_token,
          scope: data?.scope,
          session_state: data?.session_state,
          token_type: data?.token_type,
          type: data?.type,
          userId: data?.userId,
        },
      }) as Promise<void> | Awaitable<AdapterAccount | null | undefined>,
    unlinkAccount: (
      provider_providerAccountId: Pick<
        AdapterAccount,
        "provider" | "providerAccountId"
      >
    ) =>
      client.account.delete({
        where: { provider_providerAccountId },
      }) as Promise<void> | Awaitable<AdapterAccount | undefined>,
    async getSessionAndUser(sessionToken: string) {
      const userAndSession = await client.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session } as Awaitable<{
        session: AdapterSession;
        user: AdapterUser;
      }>;
    },
    createSession: (data: {
      sessionToken: string;
      userId: string;
      expires: Date;
    }) =>
      client.session.create({
        data: {
          sessionToken: data?.sessionToken,
          userId: data?.userId,
          expires: data?.expires,
        },
      }) as Awaitable<AdapterSession>,
    updateSession: (
      data: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
    ) =>
      client.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      }) as Awaitable<AdapterSession | null | undefined>,
    deleteSession: (sessionToken: string) =>
      client.session.delete({ where: { sessionToken } }) as
        | Promise<void>
        | Awaitable<AdapterSession | null | undefined>,
    async createVerificationToken(data: VerificationToken) {
      const verificationToken = await client.verificationToken.create({ data });
      // @ts-ignore MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken as Awaitable<
        VerificationToken | null | undefined
      >;
    },
    async useVerificationToken(identifier_token: {
      identifier: string;
      token: string;
    }) {
      try {
        const verificationToken = await client.verificationToken.delete({
          where: { identifier_token },
        });
        // @ts-ignore MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken as Awaitable<VerificationToken | null>;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as PrismaClientKnownRequestError).code === "P2025")
          return null;
        throw error;
      }
    },
  };
}

export { PrismaAdapter };
