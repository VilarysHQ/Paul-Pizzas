
import localBackground from "../../assets/Local/localBackground.png";
import LocalInfo from "./LocalInfo";

export default function LocalSection() {
  return (
    <section
      id="local"
      aria-labelledby="local-title"
      className="
        relative scroll-mt-20
        overflow-hidden bg-[#170D0A]
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Fotografía del restaurante */}
        <div
          className="
            group relative min-h-[300px]
            overflow-hidden bg-[#24140F]
            sm:min-h-[400px]
            lg:min-h-[470px]
          "
        >
          <img
            src={localBackground}
            alt="Recreación visual de la fachada de Paul Pizzas en Chosica"
            loading="lazy"
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
              transition-transform duration-700
              group-hover:scale-[1.035]
              motion-reduce:transform-none
            "
          />

          {/* Sombra sobre la fotografía */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/35 via-transparent
              to-black/10
            "
          />

          {/* Etiqueta inferior */}
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/25
                bg-black/40 px-4 py-2
                text-xs font-semibold text-white
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#FFCC84]" />
              Paul Pizzas · Chosica
            </span>
          </div>
        </div>

        {/* Panel de ubicación */}
        <div
          className="
            relative bg-[linear-gradient(125deg,#21130F_0%,#120A08_100%)]
          "
        >
          {/* Brillo decorativo */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(ellipse_at_95%_0%,rgba(150,35,15,0.16),transparent_50%)]
            "
          />

          <div className="relative h-full">
            <LocalInfo />
          </div>
        </div>
      </div>

      {/* Detalle rojo inferior */}
      <div
        aria-hidden="true"
        className="h-[4px] bg-gradient-to-r from-[#800000] via-[#C50000] to-[#800000]"
      />
    </section>
  );
}
