"use client";

import posthog from "posthog-js";
import { PostHogProvider as PostHog } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({
  ph_key,
  children,
}: {
  ph_key: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    posthog.init(ph_key, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
    });
  }, [ph_key]);

  return <PostHog client={posthog}>{children}</PostHog>;
}
