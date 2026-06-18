// Edit these to update the site.
const LINKS = {
  email: "mailto:ignaspanava@gmail.com",
  twitter: "https://twitter.com/Ignitis1", // TODO: add your handle
  linkedin: "https://www.linkedin.com/in/ignaspanavas", // TODO: add your profile
};

const PAINTINGS: { src: string; alt: string }[] = [
  { src: "/resources/painting-owl.jpg", alt: "Acrylic painting of an owl" },
  { src: "/resources/painting-frog.jpg", alt: "Acrylic painting of a tree frog" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 leading-relaxed">
      <header className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Ignas Panavas</h1>
        <nav className="flex gap-4 text-sm text-neutral-500">
          <a href={LINKS.email} className="hover:text-neutral-900">
            Email
          </a>
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900"
          >
            Twitter
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <hr className="my-8 border-neutral-200" />

      <section className="space-y-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-400">
          About
        </h2>
        <p className="text-neutral-700">
          I&apos;m currently working on market making systems for prediction
          markets. If you have an interest in the field please feel free to
          reach out. I&apos;m always interested in new ideas and perspectives.
        </p>
      </section>

      <hr className="my-8 border-neutral-200" />

      <section className="space-y-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-400">
          Some of my art
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PAINTINGS.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="w-full rounded-md border border-neutral-200"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
