import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="page-shell min-h-full">
      <header className="sticky top-0 z-30 border-b border-foreground bg-background/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a href="#top" className="eyebrow">
            {site.languages}
          </a>
          <nav className="flex items-center gap-5 text-muted">
            <a href="#work" className="nav-link hover:text-foreground">
              Projects
            </a>
            <a href="#approach" className="nav-link hover:text-foreground">
              Approach
            </a>
            <a href="#about" className="nav-link hover:text-foreground">
              About
            </a>
            <a href="#contact" className="nav-link hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* 6-column system: spans only use 1/6–6/6 */}
        <section className="border-x border-foreground bg-background/55 backdrop-blur-[2px]">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            <div className="col-span-1 flex flex-col justify-between border-b border-foreground p-6 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-4">
                <p className="eyebrow text-muted">{site.focusLine}</p>
              </div>

              <div className="relative mt-6 -mx-6 px-6 pb-4 pt-6 sm:-mx-10 sm:mt-8 sm:px-10 sm:pb-5 sm:pt-8">
                <div className="relative inline-block w-full max-w-2xl">
                  <span className="orbit orbit--raised" aria-hidden>
                    <span className="orbit__star star" />
                  </span>
                  <h1 className="relative z-10 text-5xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.04] lg:text-[4.1rem]">
                    <span className="rainbow-text">{site.name}</span>
                  </h1>
                </div>
              </div>

              <div className="-mx-6 space-y-5 border-t border-foreground px-6 pt-6 sm:-mx-10 sm:px-10">
                <p className="max-w-lg text-base leading-7 text-muted sm:text-lg">
                  {site.tagline}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#work" className="btn-solid inline-flex h-11 items-center px-5">
                    View projects
                  </a>
                  <a href="#approach" className="btn-ghost inline-flex h-11 items-center px-5">
                    Research & safety
                  </a>
                </div>
              </div>
            </div>

            <div className="relative col-span-1 min-h-[420px] overflow-hidden border-b border-foreground bg-background lg:col-span-2 lg:min-h-[560px] lg:border-b-0">
              <div className="absolute inset-0 bg-background" />
              <div className="pointer-events-none absolute inset-6 overflow-hidden">
                <div className="rainbow-fill absolute inset-0 opacity-45" />
                <div className="absolute inset-0 wire-soft" />
              </div>
              <div className="absolute inset-2 flex items-end justify-center pt-6 sm:inset-3 sm:pt-8">
                <Image
                  src={site.photo}
                  alt={`${site.name} portrait`}
                  width={900}
                  height={1200}
                  priority
                  className="h-auto max-h-full w-full object-cover object-[center_18%] scale-[1.17]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-foreground">
            <div className="rainbow-strip h-2 w-full" aria-hidden />
          </div>

          <div className="grid grid-cols-2 border-t border-foreground sm:grid-cols-6">
            {[
              { k: "4+", v: "years in SexTech" },
              { k: "5+", v: "years in UI/UX design" },
              { k: "100k+", v: "users reached" },
            ].map((stat) => (
              <div
                key={stat.v}
                className="col-span-2 border-r border-foreground p-4 last:border-r-0 sm:p-5"
              >
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">{stat.k}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {stat.v}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="border-x border-t border-b border-foreground bg-background/60 backdrop-blur-[2px]"
        >
          <div className="grid grid-cols-1 border-b border-foreground md:grid-cols-6">
            <div className="col-span-6 flex items-center gap-3 px-6 py-5">
              <span className="star" aria-hidden />
              <h2 className="eyebrow text-foreground">Approach</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="col-span-3 min-w-0 border-b border-foreground p-6 sm:p-8 md:border-b-0 md:border-r">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Sex deserves{" "}
                <span className="rainbow-text">better</span> design
              </h3>
              <div className="mt-4 space-y-4 leading-7 text-muted">
                {site.approach.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="col-span-3 min-w-0 divide-y divide-foreground">
              {site.principles.map((item, i) => (
                <article key={item.title} className="p-5 sm:p-6">
                  <p className="num text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-2 font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="border-x border-b border-foreground bg-background/60 backdrop-blur-[2px]"
        >
          <div className="grid grid-cols-1 border-b border-foreground sm:grid-cols-6">
            <div className="col-span-1 flex items-center gap-3 px-6 py-5 sm:col-span-3">
              <span className="star" aria-hidden />
              <h2 className="eyebrow text-foreground">Projects</h2>
            </div>
          </div>

          <div>
            {site.projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 border-b border-foreground last:border-b-0 md:grid-cols-6"
              >
                <div className="col-span-1 flex items-start border-b border-foreground p-5 md:border-b-0 md:border-r">
                  <span className="num text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-1 border-b border-foreground p-5 md:col-span-3 md:border-b-0 md:border-r">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.focus.map((tag) => (
                      <span
                        key={tag}
                        className="chip px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title w-fit text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                    {project.role} · {project.years}
                  </p>
                </div>
                <div className="relative col-span-1 min-h-36 overflow-hidden p-5 md:col-span-2">
                  <div
                    className="absolute inset-0 opacity-75"
                    style={{
                      background:
                        index % 3 === 0
                          ? "linear-gradient(135deg, rgba(232,121,169,0.4), rgba(240,201,77,0.28))"
                          : index % 3 === 1
                            ? "linear-gradient(135deg, rgba(110,181,224,0.4), rgba(178,157,217,0.3))"
                            : "linear-gradient(135deg, rgba(143,188,143,0.4), rgba(240,160,122,0.28))",
                    }}
                  />
                  {project.cover ? (
                    <div className="absolute inset-4 overflow-hidden border border-foreground/20">
                      <Image
                        src={project.cover}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-4 wire-soft" />
                  )}
                  <div className="absolute bottom-5 left-5 z-10">
                    <span className="btn-ghost inline-flex h-9 items-center bg-background/75 px-3">
                      Open →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="border-x border-b border-foreground bg-background/60 backdrop-blur-[2px]"
        >
          <div className="grid grid-cols-1 border-b border-foreground md:grid-cols-6">
            <div className="col-span-6 flex items-center gap-3 px-6 py-5">
              <span className="star" aria-hidden />
              <h2 className="eyebrow text-foreground">About</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="col-span-1 border-b border-foreground p-6 sm:p-8 md:col-span-4 md:border-b-0 md:border-r">
              <div className="space-y-4 text-base leading-7 text-muted">
                {site.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="col-span-1 p-6 sm:p-8 md:col-span-2">
              <p className="eyebrow mb-4">Skills & tools</p>
              <ul className="flex flex-wrap gap-2">
                {site.skills.map((skill) => (
                  <li
                    key={skill}
                    className="chip px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-foreground md:grid-cols-6">
            <div className="col-span-1 border-b border-foreground p-6 md:col-span-3 md:border-b-0 md:border-r">
              <h3 className="eyebrow mb-5">Experience</h3>
              <ul>
                {site.experience.map((item, i) => (
                  <li
                    key={`${item.place}-${item.role}-${item.years}`}
                    className="flex gap-4 border-t border-line py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="num w-8 shrink-0 text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold">{item.place}</p>
                      <p className="text-sm text-muted">
                        {item.role} · {item.years}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 p-6 md:col-span-3">
              <h3 className="eyebrow mb-5">Education</h3>
              <ul>
                {site.education.map((item, i) => (
                  <li
                    key={`${item.school}-${item.detail}`}
                    className="flex gap-4 border-t border-line py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="num w-8 shrink-0 text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold">{item.school}</p>
                      <p className="text-sm text-muted">
                        {item.detail} · {item.years}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mb-16 border border-t-0 border-foreground bg-background/60 backdrop-blur-[2px]"
        >
          <div className="grid grid-cols-1 border-b border-foreground md:grid-cols-6">
            <div className="col-span-3 flex items-center gap-3 px-6 py-5">
              <span className="star" aria-hidden />
              <h2 className="eyebrow text-foreground">Contact</h2>
            </div>
            <p className="col-span-3 hidden items-center justify-end px-6 py-5 text-sm text-muted md:flex">
              Based in Germany, open to remote
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="col-span-1 p-6 sm:p-10 md:col-span-4 md:border-r md:border-foreground">
              <div className="relative inline-block max-w-xl py-4 sm:py-5">
                <span className="orbit orbit--contact" aria-hidden>
                  <span className="orbit__star star" />
                </span>
                <h2 className="relative z-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let&apos;s make something{" "}
                  <span className="rainbow-text">colorful</span>
                </h2>
              </div>
              <p className="mt-5 max-w-xl text-muted">
                Open to product design, research, and other roles in the sexual wellness
                sphere, and teams that care about safety and trust more than
                conversion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="btn-solid inline-flex h-11 items-center px-5"
                >
                  {site.email}
                </a>
                {site.socials
                  .filter((s) => s.label !== "Email")
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex h-11 items-center px-5"
                    >
                      {social.label}
                    </a>
                  ))}
              </div>
            </div>
            <div className="relative col-span-1 flex min-h-40 items-center justify-center p-8 md:col-span-2">
              <div className="absolute inset-0 rainbow-fill opacity-35" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground bg-background/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-xs uppercase tracking-[0.14em] text-muted sm:px-6">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="rainbow-text font-semibold normal-case tracking-normal">
            UI/UX design & research
          </span>
        </div>
      </footer>
    </div>
  );
}
