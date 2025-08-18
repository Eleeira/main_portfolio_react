// src/components/Work.jsx

const IMG = {
  scloud: new URL("../assets/scloud.png", import.meta.url).href,
  game:   new URL("../assets/game.png",   import.meta.url).href,
  port:   new URL("../assets/port.png",   import.meta.url).href,
};

const ITEMS = [
  { id: 1, src: IMG.scloud, title: "Canva Sites #1", alt: "Screenshot project Canva Sites 1", href: "#" },
  { id: 2, src: IMG.game,   title: "Canva Sites #2", alt: "Screenshot project Canva Sites 2", href: "#" },
  { id: 3, src: IMG.port,   title: "Canva Sites #3", alt: "Screenshot project Canva Sites 3", href: "#" },
];

export default function Work() {
  return (
    <section id="work" className="w-full bg-gradient-to-t from-gray-800 to-black text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <header className="pb-8 text-center">
          <h2 className="inline border-b-4 border-cyan-400 text-4xl font-bold">Work</h2>
          <p className="py-6 text-gray-300">Some of my recent work</p>
          <p className="py-2 text-sm/6 text-gray-400">2022</p>
        </header>

        {/* Grid semplice e responsive */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ id, src, title, alt, href }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-lg bg-zinc-800 shadow-lg shadow-[#040c16]"
            >
              <a href={href} aria-label={title} className="block focus:outline-none">
                {/* Wrapper 16:9 senza plugin: usa il padding hack */}
                <div className="relative w-full before:block before:pb-[56.25%]">
                  {/* Immagine assoluta che copre la card */}
                  <img
                    src={src}
                    alt={alt || title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    width={1200}
                    height={675}
                    sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
                  />
                  {/* Overlay titolo on hover */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                    <span className="rounded-md px-3 py-1 text-center text-xl font-semibold tracking-wide text-white">
                      {title}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}