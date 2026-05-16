import Link from "next/link"

const officialSite = "https://www.thearizonaproject.com"

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-4 py-12 md:px-6">
      <section className="w-full rounded-3xl border border-border/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:bg-black/60 md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Projects
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Project updates and future builds
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Use this section for project highlights, updates, and the pages that
          grow out of the main Arizona Project site.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Learn more
          </Link>
          <a
            href={officialSite}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Official site
          </a>
        </div>
      </section>
    </main>
  )
}