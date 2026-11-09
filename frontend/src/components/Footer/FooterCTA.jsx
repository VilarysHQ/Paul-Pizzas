
import pizzaImage from "../../assets/Menu/pizzas/americana.png";

export default function FooterCTA() {
  return (
    <div
      className="
        relative isolate overflow-hidden
        border-b border-white/10
        bg-[linear-gradient(110deg,#850000_0%,#990000_50%,#530000_100%)]
      "
    >
      {/* Iluminación ambiental */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_75%_45%,rgba(255,116,39,0.18),transparent_55%)]
        "
      />

      <div
        className="
          relative mx-auto grid w-full
          max-w-[1440px] grid-cols-1
          items-center gap-6
          px-6 py-12
          sm:px-10
          lg:min-h-[320px]
          lg:grid-cols-[1fr_0.85fr]
          lg:px-16 lg:py-10
        "
      >
        {/* Texto */}
        <div className="relative z-10 text-center lg:text-left">
          <div
            className="
              mb-4 flex items-center
              justify-center gap-3
              lg:justify-start
            "
          >
            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.3em]
                text-[#FFD1B6]
              "
            >
              El sabor de Chosica
            </span>

            <span className="h-px w-12 bg-[#FFD1B6]/45" />
          </div>

          <h2
            className="
              text-[clamp(34px,4.1vw,60px)]
              font-black leading-[1.02]
              tracking-[-0.045em]
              text-white
            "
          >
            ¿Se te antoja
            <br />
            una{" "}
            <span className="text-[#FFD43B]">
              pizza?
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-[420px]
              text-sm leading-relaxed
              text-white/75
              sm:text-base
              lg:mx-0
            "
          >
            Descubre nuestras especialidades
            y encuentra tu favorita.
          </p>

          <a
            href="#menu"
            className="
              mt-7 inline-flex items-center
              justify-center gap-2.5
              rounded-full bg-[#FFF3E8]
              px-6 py-3.5
              text-sm font-extrabold
              text-[#930000]
              shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-white
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              motion-reduce:transform-none
            "
          >
            Explorar nuestro menú

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Fotografía decorativa */}
        <div
          className="
            relative mx-auto flex
            h-[240px] w-full max-w-[430px]
            items-center justify-center
            sm:h-[300px]
            lg:h-[320px]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute h-[80%] w-[80%]
              rounded-full bg-[#FF7A25]/20
              blur-[65px]
            "
          />

          <div
            className="
              relative aspect-square
              w-[235px] overflow-hidden
              rounded-full
              border-[6px] border-white/10
              shadow-[0_22px_50px_rgba(0,0,0,0.3)]
              sm:w-[290px]
              lg:w-[320px]
            "
          >
            <img
              src={pizzaImage}
              alt="Pizza de pepperoni"
              loading="lazy"
              className="
                h-full w-full object-cover
                transition-transform duration-500
                hover:scale-[1.04]
                motion-reduce:transform-none
              "
            />
          </div>

          {/* Elemento decorativo */}
          <span
            aria-hidden="true"
            className="
              absolute right-[8%] top-[10%]
              text-4xl text-[#FFD43B]/80
              sm:text-5xl
            "
          >
            ✦
          </span>
        </div>
      </div>
    </div>
  );
}
