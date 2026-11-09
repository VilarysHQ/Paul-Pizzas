
export default function PromotionCard({ promotion }) {
  return (
    <div
      className="
        relative grid w-full items-center
        gap-4 px-6 pt-8 pb-16
        sm:px-10
        lg:min-h-[280px]
        lg:grid-cols-[29%_43%_28%]
        lg:gap-0 lg:px-14 lg:py-5
        xl:px-16
      "
    >
      {/* Columna izquierda */}
      <div className="relative z-10 text-center lg:text-left">
        <div
          className="
            mb-3 flex items-center
            justify-center gap-3
            lg:justify-start
          "
        >
          <span
            className="
              text-[10px] font-bold uppercase
              tracking-[0.27em] text-white/90
            "
          >
            Promociones
          </span>

          <span className="h-px w-9 bg-white/40" />
        </div>

        <h2
          className="
            text-[clamp(32px,3.1vw,48px)]
            leading-[0.95] font-black
            tracking-[-0.045em]
          "
        >
          <span className="block text-white">
            {promotion.title}
          </span>

          <span className="mt-1 block text-[#FFD43B]">
            {promotion.highlight}
          </span>
        </h2>

        <p
          className="
            mx-auto mt-4 max-w-[240px]
            text-[13px] leading-[1.5]
            text-white/90 lg:mx-0
          "
        >
          {promotion.description}
        </p>
      </div>

      {/* Imagen central */}
      <div
        className="
          relative z-10 flex h-[230px]
          items-center justify-center
          sm:h-[275px]
          lg:h-[245px]
          xl:h-[265px]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-x-[8%] bottom-[8%]
            h-[40%] rounded-full
            bg-[#FF6A20]/15 blur-[40px]
          "
        />

        <img
          src={promotion.image}
          alt={promotion.imageAlt}
          className="
            relative z-10 block
            h-full w-[112%] max-w-none
            object-contain
            drop-shadow-[0_14px_15px_rgba(35,0,0,0.22)]
            transition-transform duration-500
            hover:scale-[1.03]
            motion-reduce:transition-none
          "
        />

        {/* Destellos decorativos */}
        <svg
          viewBox="0 0 60 60"
          fill="none"
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -top-2 left-[5%]
            hidden h-10 w-10 text-white/80
            lg:block
          "
        >
          <path
            d="M30 4v17M7 18l15 12M45 12l-8 16"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Columna derecha */}
      <div
        className="
          relative z-10 flex flex-col
          items-center text-center
          lg:items-start lg:pl-5 lg:text-left
        "
      >
        <span
          className="
            inline-flex items-center justify-center
            rounded-full bg-[#FFF4E8]
            px-5 py-2 text-[13px]
            font-extrabold text-[#2B160F]
          "
        >
          {promotion.badge}
        </span>

        <p
          className="
            mt-4 max-w-[245px]
            text-[14px] font-semibold
            leading-[1.5] text-white
            xl:text-[15px]
          "
        >
          {promotion.detail}
        </p>

        <div
          className="
            mt-4 inline-flex items-center
            justify-center rounded-full
            border border-white/20
            bg-white/10 px-4 py-2
            text-[13px] font-semibold
            text-white/95
          "
        >
          {promotion.price ?? "Precio por confirmar"}
        </div>
      </div>
    </div>
  );
}
