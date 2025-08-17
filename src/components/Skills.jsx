// src/components/Skills.jsx

// Resolver a prova di Parcel (niente import "diretti" dei png)
const ICONS = {
  Html:       new URL("../assets/html.png", import.meta.url).href,
  Css:        new URL("../assets/css.png", import.meta.url).href,
  Javascript: new URL("../assets/javascript.png", import.meta.url).href,
  React:      new URL("../assets/react.png", import.meta.url).href,
  Bootstrap:  new URL("../assets/bootstrap.png", import.meta.url).href,
  Tailwind:   new URL("../assets/tailwind.png", import.meta.url).href,
  GitHub:     new URL("../assets/github.png", import.meta.url).href,
  Figma:      new URL("../assets/figma.png", import.meta.url).href,
};

const CARDS = [
  { label: "HTML",       src: ICONS.Html,       shadow: "shadow-[#E64F25]" },
  { label: "CSS",        src: ICONS.Css,        shadow: "shadow-[#2B75B9]" },
  { label: "JavaScript", src: ICONS.Javascript, shadow: "shadow-[#F1DC4E]" },
  { label: "React",      src: ICONS.React,      shadow: "shadow-[#61DBFB]" },
  { label: "Bootstrap",  src: ICONS.Bootstrap,  shadow: "shadow-[#5B4282]" },
  { label: "Tailwind CSS", src: ICONS.Tailwind, shadow: "shadow-[#44A8B3]" },
  { label: "GitHub",     src: ICONS.GitHub,     shadow: "shadow-white/60" },
  { label: "Figma",      src: ICONS.Figma,      shadow: "shadow-[#41D084]" },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-[1000px] flex-col justify-center p-8 sm:p-16 sm:text-center">
        <header>
          <h2 className="inline border-b-4 border-cyan-400 text-4xl font-bold">Skills</h2>
          <p className="py-4">Technologies I know</p>
        </header>

        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          {CARDS.map(({ label, src, shadow }) => (
            <div
              key={label}
              className={`rounded-lg shadow-md ${shadow} duration-500 hover:scale-110`}
            >
              <img
                className="mx-auto w-20"
                src={src}
                alt={`${label} icon`}
                loading="lazy"
                width={80}
                height={80}
              />
              <p className="my-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
