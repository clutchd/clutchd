import { Copyright } from "@clutchd/copyright";
import { Footer, Header, Main } from "@clutchd/layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header className="flex-wrap gap-4 p-5">
        <Link className="flex items-center gap-3" href="/">
          <Image
            width="44"
            height="44"
            priority
            src="/clutchd-icon.png"
            alt="Clutchd LLC Logo"
          />
          <div className="hidden sm:block">
            <div className="font-display text-lg font-semibold">
              Clutchd LLC
            </div>
            <div className="text-sm text-[var(--ink-500)]">
              Software + design by William Crutchfield
            </div>
          </div>
        </Link>
        <div className="hidden items-center gap-4 text-sm text-[var(--ink-500)] sm:flex">
          <Link
            className="font-medium text-[var(--ink-700)] hover:text-[var(--accent-700)]"
            href="https://github.com/CrutchTheClutch"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="font-medium text-[var(--ink-700)] hover:text-[var(--accent-700)]"
            href="https://x.com/crutchtheclutch"
            target="_blank"
            rel="noreferrer"
          >
            X
          </Link>
          <div className="h-6 w-px bg-[var(--accent-900)]/15" />
          <Link
            className="rounded-full border border-[var(--accent-900)]/40 px-4 py-2 text-sm font-semibold text-[var(--ink-700)] transition hover:border-[var(--accent-900)] hover:text-[var(--ink-900)]"
            href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo"
          >
            Client portal
          </Link>
          <Link
            className="rounded-full bg-[var(--accent-500)] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(90,70,170,0.55)] transition hover:bg-[var(--accent-700)]"
            href="mailto:william@clutchd.com"
          >
            Hire me
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:hidden">
          <Link
            className="rounded-full border border-[var(--accent-900)]/35 px-3 py-2 text-xs font-semibold text-[var(--ink-700)] transition hover:border-[var(--accent-900)]"
            href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo"
          >
            Client portal
          </Link>
          <Link
            className="rounded-full bg-[var(--accent-500)] px-3 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(90,70,170,0.55)] transition hover:bg-[var(--accent-700)]"
            href="mailto:william@clutchd.com"
          >
            Hire me
          </Link>
        </div>
      </Header>
      <Main className="flex-1 px-5 pb-24 pt-12">
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="pointer-events-none absolute -left-24 top-6 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(122,90,248,0.22)_0%,_rgba(122,90,248,0)_70%)] blur-3xl md:block" />
          <div className="pointer-events-none absolute right-0 top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(91,67,199,0.28)_0%,_rgba(91,67,199,0)_70%)] blur-3xl float-slow" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(18,15,26,0.1)_0%,_rgba(18,15,26,0)_75%)] blur-3xl float-fast" />

          <section className="relative">
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
              A one-person software studio building bold digital
              experiences.
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-center">
              <Image
                src="/headshot.jpg"
                alt="William Crutchfield"
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-cover ring-1 ring-[var(--accent-900)]/10 sm:h-18 sm:w-18"
              />
              <p className="text-lg text-[var(--ink-700)]">
                Hey, I'm William! I build high-end websites, software projects,
                and engineering-forward products for teams that care about
                craft, speed, and clarity.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                className="rounded-full bg-[var(--accent-500)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(90,70,170,0.6)] transition hover:bg-[var(--accent-700)]"
                href="mailto:william@clutchd.com"
              >
                Start a project
              </Link>
              <Link
                className="rounded-full border border-[var(--accent-900)]/35 px-6 py-3 text-sm font-semibold text-[var(--ink-700)] transition hover:border-[var(--accent-900)] hover:text-[var(--ink-900)]"
                href="#work"
              >
                View selected work
              </Link>
              <div className="flex items-center gap-2 text-sm text-[var(--ink-500)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>Available now</span>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-8 border-y border-[var(--accent-900)]/10 py-16 lg:grid-cols-3">
            <div>
              <p className="section-title">Capabilities</p>
              <h2 className="mt-4 text-2xl font-semibold">
                Design + engineering across web and software.
              </h2>
            </div>
            <div className="text-[var(--ink-700)]">
              <p className="text-base">
                Websites, product marketing, and content experiences that feel
                intentional and premium.
              </p>
              <p className="mt-4 text-base">
                Custom software, internal tools, and polished product builds
                with a focus on performance and reliability.
              </p>
            </div>
            <div className="text-[var(--ink-700)]">
              <p className="text-base">
                Engineering design, UX direction, and ongoing support for teams
                that need a senior partner.
              </p>
              <p className="mt-4 text-base text-[var(--ink-500)]">
                Work directly with me end-to-end, from strategy to launch.
              </p>
            </div>
          </section>

          <section id="work" className="mt-20">
            <p className="section-title">Selected Work</p>
            <h2 className="mt-4 text-3xl font-semibold">
              Websites and software projects.
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Client websites</h3>
                <div className="mt-6 grid gap-6 text-base text-[var(--ink-700)]">
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--accent-900)]/10 pb-4">
                    <div>
                      <p className="text-sm text-[var(--ink-500)]">
                        HVAC & mechanical contractor
                      </p>
                      <p className="mt-2 font-semibold">
                        City Mechanical Inc.
                      </p>
                    </div>
                    <Link
                      className="text-sm font-semibold text-[var(--accent-900)] underline underline-offset-4"
                      href="https://www.citymechanical.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit site
                    </Link>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--accent-900)]/10 pb-4">
                    <div>
                      <p className="text-sm text-[var(--ink-500)]">
                        Custom woodworking & cabinetry
                      </p>
                      <p className="mt-2 font-semibold">
                        Masters Woodworking
                      </p>
                    </div>
                    <Link
                      className="text-sm font-semibold text-[var(--accent-900)] underline underline-offset-4"
                      href="https://www.masterswoodworkinginc.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit site
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Software projects</h3>
                <div className="mt-6 grid gap-6 text-base text-[var(--ink-700)]">
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--accent-900)]/10 pb-4">
                    <div>
                      <p className="text-sm text-[var(--ink-500)]">
                        Custom CAN bus driver solution
                      </p>
                      <p className="mt-2 font-semibold">iCANDrivers</p>
                    </div>
                    <Link
                      className="text-sm font-semibold text-[var(--accent-900)] underline underline-offset-4"
                      href="https://www.icandrivers.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project
                    </Link>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--accent-900)]/10 pb-4">
                    <div>
                      <p className="text-sm text-[var(--ink-500)]">
                        Streamlined web forms
                      </p>
                      <p className="mt-2 font-semibold">Formbro</p>
                    </div>
                    <Link
                      className="text-sm font-semibold text-[var(--accent-900)] underline underline-offset-4"
                      href="https://www.formbro.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="section-title">Process</p>
              <h2 className="mt-4 text-3xl font-semibold">
                Senior-level craft with boutique agility.
              </h2>
              <p className="mt-4 max-w-xl text-[var(--ink-700)]">
                I partner closely with founders and teams who want the polish of
                a design agency with the focus and accountability of a solo
                builder.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-[var(--ink-500)] sm:grid-cols-2">
                <span>Discovery & strategy</span>
                <span>Engineering design</span>
                <span>Software development</span>
                <span>Launch & support</span>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--accent-900)]/10 bg-white/70 p-8">
              <p className="section-title">Ready</p>
              <h2 className="mt-4 text-3xl font-semibold">
                Let’s build your next product.
              </h2>
              <p className="mt-4 text-[var(--ink-700)]">
                If you need a partner for high-end websites or software
                projects, I am available for new engagements.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  className="rounded-full bg-[var(--accent-500)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(90,70,170,0.6)] transition hover:bg-[var(--accent-700)]"
                  href="mailto:william@clutchd.com"
                >
                  Email me
                </Link>
                <Link
                  className="rounded-full border border-[var(--accent-500)] px-6 py-3 text-sm font-semibold text-[var(--accent-900)] transition hover:border-[var(--accent-900)]"
                  href="mailto:william@clutchd.com?subject=New%20project%20for%20Clutchd"
                >
                  Share a brief
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Main>
      <Footer className="p-5">
        <span className="text-sm text-[var(--ink-500)]">
          <Copyright>Clutchd LLC</Copyright>
        </span>
        <Link
          className="text-sm font-semibold underline underline-offset-4"
          href="mailto:william@clutchd.com"
        >
          william@clutchd.com
        </Link>
      </Footer>
    </>
  );
}
