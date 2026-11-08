
import { useState } from "react";

export default function PizzaCard({ pizza }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      className="
        group relative h-[305px] overflow-hidden
        rounded-[18px] bg-[#21120D]
        shadow-[0_8px_20px_rgba(65,30,12,0.14)]
        transition-[transform,box-shadow] duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_30px_rgba(65,30,12,0.2)]
        sm:h-[310px]
      "
    >
      {/* Fotografía */}
      <img
        src={pizza.image}
        alt={`Pizza ${pizza.name}`}
        loading="lazy"
        className="
          absolute inset-0 h-full w-full
          object-cover object-center
          transition-transform duration-500
          group-hover:scale-[1.04]
        "
      />

      {/* Degradado inferior */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#170B08] from-0%
          via-[#170B08]/90 via-24%
          to-transparent to-65%
        "
      />

      {/* Etiqueta especial */}
      {pizza.featured && (
        <span
          className="
            absolute right-3 top-3 z-10
            rounded-full bg-[#B60000]
            px-3 py-1.5 text-[10px]
            font-bold text-white shadow-md
          "
        >
          Especialidad
        </span>
      )}

      {/* Información principal */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-10
          flex flex-col p-4 text-white
          sm:p-5
        "
      >
        <h3
          className="
            text-[19px] font-extrabold
            leading-tight tracking-[-0.035em]
          "
        >
          {pizza.name}
        </h3>

        <p
          className="
            mt-1.5 line-clamp-2
            min-h-[32px] text-[12px]
            leading-[1.45] text-white/85
          "
        >
          {pizza.description}
        </p>

        <div
          className="
            mt-4 flex items-end
            justify-between gap-2
          "
        >
          <div className="flex flex-col gap-0.5">
            <span
              className="
                text-[9px] font-semibold uppercase
                tracking-[0.1em] text-white/60
              "
            >
              Precio
            </span>

            <span
              className="
                text-[13px] font-extrabold
                text-[#FFD447]
              "
            >
              Por confirmar
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowDetails(true)}
            aria-label={`Ver detalles de ${pizza.name}`}
            className="
              flex items-center gap-2
              rounded-full bg-[#FFF4E8]
              py-1.5 pr-1.5 pl-3
              text-xs font-bold text-[#A80000]
              transition-colors duration-200
              hover:bg-white
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-white
            "
          >
            Detalles

            <span
              aria-hidden="true"
              className="
                flex h-8 w-8 items-center
                justify-center rounded-full
                bg-[#F9E5D7] text-xl
                leading-none
              "
            >
              +
            </span>
          </button>
        </div>
      </div>

      {/* Panel de información */}
      {showDetails && (
        <div
          className="
            absolute inset-0 z-20
            flex flex-col justify-between
            bg-[#1A0C09]/97 p-5
            text-white backdrop-blur-md
          "
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              aria-label="Cerrar detalles"
              className="
                flex h-9 w-9 items-center
                justify-center rounded-full
                border border-white/20
                text-xl hover:bg-white/10
              "
            >
              ×
            </button>
          </div>

          <div>
            <span
              className="
                text-[10px] font-bold uppercase
                tracking-[0.2em] text-[#FFCC72]
              "
            >
              Ficha demostrativa
            </span>

            <h4 className="mt-3 text-2xl font-black">
              {pizza.name}
            </h4>

            <p
              className="
                mt-3 text-sm leading-relaxed
                text-white/80
              "
            >
              {pizza.description}
            </p>
          </div>

          <p className="text-xs text-white/55">
            Ingredientes, tamaños y precios
            pendientes de confirmación.
          </p>
        </div>
      )}
    </article>
  );
}
