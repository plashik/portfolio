import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject, site } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} · ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = site.projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? site.projects[index - 1] : null;
  const next =
    index >= 0 && index < site.projects.length - 1
      ? site.projects[index + 1]
      : null;

  return (
    <div className="page-shell min-h-full">
      <div className="bg-portrait opacity-40" aria-hidden>
        <Image src={site.photo} alt="" fill sizes="100vw" />
      </div>

      <header className="sticky top-0 z-20 border-b border-foreground bg-background/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/#work" className="nav-link text-muted hover:text-foreground">
            ← Projects
          </Link>
          <Link href="/" className="eyebrow">
            {site.languages}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <div className="border border-foreground bg-background/70 backdrop-blur-[2px]">
          <div className="flex items-center justify-between border-b border-foreground px-5 py-4">
            <span className="eyebrow">Project</span>
            <span className="num text-sm">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(site.projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative border-b border-foreground px-5 py-8 sm:px-8">
            <div className="relative mb-4 flex flex-wrap gap-2">
              {project.focus.map((tag) => (
                <span
                  key={tag}
                  className="chip px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="rainbow-text">{project.title}</span>
            </h1>
          </div>

          <div className="grid border-b border-foreground sm:grid-cols-3">
            <div className="border-b border-foreground p-5 sm:border-b-0 sm:border-r">
              <p className="eyebrow text-muted">Role</p>
              <p className="mt-2 font-medium">{project.role}</p>
            </div>
            <div className="border-b border-foreground p-5 sm:border-b-0 sm:border-r">
              <p className="eyebrow text-muted">Years</p>
              <p className="mt-2 font-medium">{project.years}</p>
            </div>
            <div className="p-5">
              <p className="eyebrow text-muted">Tools and skills</p>
              <p className="mt-2 font-medium">{project.tools.join(" · ")}</p>
            </div>
          </div>

          <div className="border-b border-foreground p-5 sm:p-8">
            <p className="eyebrow mb-3">Outcome</p>
            <p className="leading-7 text-muted">{project.outcome}</p>
          </div>

          {project.images && project.images.length > 0 ? (
            <div className="border-b border-foreground">
              <div className="border-b border-foreground px-5 py-4 sm:px-8">
                <span className="eyebrow">Gallery</span>
              </div>
              <div className="grid sm:grid-cols-1">
                {project.images.map((image, i) => {
                  const src = image.src;
                  const frame = (
                    <Image
                      src={src}
                      alt={`${project.title} gallery ${i + 1}`}
                      width={2400}
                      height={1600}
                      className="h-auto w-full transition duration-200 group-hover/gallery:opacity-90"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  );
                  return (
                    <div
                      key={src}
                      className="border-b border-foreground last:border-b-0 bg-background"
                    >
                      {image.href ? (
                        <a
                          href={image.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/gallery block"
                          aria-label={`Open Behance project for gallery image ${i + 1}`}
                        >
                          {frame}
                        </a>
                      ) : (
                        frame
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="relative min-h-44 border-b border-foreground">
              <div className="absolute inset-0 rainbow-fill opacity-35" />
              <div className="absolute inset-6 wire-soft" />
              <div className="absolute bottom-4 left-4">
                <span className="eyebrow bg-background/80 px-2 py-1">
                  Gallery placeholder
                </span>
              </div>
            </div>
          )}

          <div className="space-y-5 border-b border-foreground p-5 text-base leading-8 text-muted sm:p-8">
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.trailingMedia && project.trailingMedia.length > 0 ? (
            <div className="border-b border-foreground">
              {project.trailingMedia.map((item) => (
                <div key={item.src} className="border-b border-foreground last:border-b-0">
                  {item.caption ? (
                    <p className="border-b border-foreground px-5 py-4 text-sm text-muted sm:px-8">
                      {item.caption}
                    </p>
                  ) : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={item.src}
                        alt={item.caption ?? `${project.title} media`}
                        width={2400}
                        height={1600}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.caption ?? `${project.title} media`}
                      width={2400}
                      height={1600}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}


          {(project.links && project.links.length > 0) || project.externalUrl ? (
            <div className="flex flex-wrap gap-3 border-b border-foreground p-5">
              {(
                project.links && project.links.length > 0
                  ? project.links
                  : [
                      {
                        url: project.externalUrl!,
                        label: project.externalLabel ?? "External link",
                        variant: "solid" as const,
                      },
                    ]
              ).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    link.variant === "ghost" ? "btn-ghost" : "btn-solid"
                  } inline-flex h-11 items-center px-5`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}

          <nav className="flex flex-col gap-4 p-5 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="nav-link text-muted hover:text-foreground"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="nav-link text-muted hover:text-foreground sm:text-right"
              >
                {next.title} →
              </Link>
            ) : null}
          </nav>
        </div>
      </main>
    </div>
  );
}
