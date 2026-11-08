
import heroBackground from "../../assets/Hero/heroBackground.png";
import pizzaBrush from "../../assets/Hero/pizzaBrush.png";
import HeroFeatures from "./HeroFeatures";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#20C263]"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.47 0 .1 5.37.1 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.9 11.9 0 0 0 5.86 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.2-3.52-8e90 11.97-11.97 0-3.2-1.25-6.2-3.52-8.41ZM12.07 21.84a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89a9.8 9.8 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function PizzaBrush() {
  return (
    <span
      className="
        relative mt-2 inline-flex
        w-fit items-center justify-center
        isolate
      "
    >
      {/* Pincelada roja PNG */}
      <img
        src={pizzaBrush}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          -z-10
          h-[200%] w-[130%]
          max-w-none
          -translate-x-1/2 -translate-y-1/2
          -rotate-2
          object-fill
          select-none
        "
      />

      {/* Texto */}
      <span
        className="
          relative block
          px-3 py-1
          text-[1.25em]
          leading-[0.95]
          font-black
          tracking-[-0.06em]
          text-white
          sm:px-4
        "
      >
        PIZZA
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="
        relative isolate flex min-h-[690px]
        flex-col overflow-hidden
        bg-[#1B0F0B] text-white
        sm:min-h-[720px]
        lg:min-h-[min(790px,100svh)]
      "
    >
      {/* Imagen principal */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-cover
          bg-[position:62%_center]
          sm:bg-[position:58%_center]
          lg:bg-center
        "
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* Gradiente */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#120806]/90
          via-[#120806]/40
          to-transparent
          lg:from-[#120806]/75
          lg:via-[#120806]/15
        "
      />

      {/* Contenido */}
      <div
        className="
          mx-auto flex w-full max-w-[1500px]
          flex-1 flex-col justify-center
          px-6 pt-32 pb-14
          sm:px-10 sm:pt-36
          lg:px-16 lg:pt-32 lg:pb-8
          xl:px-20
        "
      >
        <div className="max-w-[590px]">
          {/* Etiqueta superior */}
          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.36em]
                text-white/90 sm:text-xs
              "
            >
              Desde Chosica
            </span>

            <span
              aria-hidden="true"
              className="h-px w-12 bg-white/60"
            />
          </div>

          {/* Título */}
          <h1
            id="hero-title"
            className="
              flex flex-col items-start
              text-[clamp(39px,4.4vw,68px)]
              leading-[1.02]
              font-black uppercase
              tracking-[-0.045em]
            "
          >
            <span>El verdadero</span>
            <span>Sabor de la</span>
            <PizzaBrush />
          </h1>

          {/* Descripción */}
          <p
            className="
              mt-7 max-w-[390px]
              text-[14px] leading-relaxed
              text-white/90 sm:text-base
            "
          >
            Pizzas recién horneadas, con ingredientes
            seleccionados y el sabor que nos caracteriza.
          </p>

          {/* Botones */}
          <div
            className="
              mt-7 flex flex-wrap
              items-center gap-3
              sm:mt-8 sm:gap-4
            "
          >
            <button
              type="button"
              disabled
              title="WhatsApp pendiente de configurar"
              className="
                inline-flex items-center
                justify-center gap-2
                rounded-full bg-[#FFF8F0]
                px-5 py-3 text-[13px]
                font-bold text-[#850000]
                shadow-lg shadow-black/10
                disabled:cursor-not-allowed
                sm:px-6 sm:py-3.5
              "
            >
              <WhatsAppIcon />
              Pedir por WhatsApp
            </button>

            <a
              href="#menu"
              className="
                inline-flex items-center
                justify-center gap-2
                rounded-full
                border border-white/60
                bg-black/20 px-5 py-3
                text-[13px] font-semibold
                text-white backdrop-blur-sm
                transition-colors duration-200
                hover:border-white
                hover:bg-white/15
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:px-6 sm:py-3.5
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m8 5 11 7-11 7V5Z" />
              </svg>

              Ver nuestro menú
            </a>
          </div>
        </div>
      </div>

      {/* Características */}
      <div
        className="
          mx-auto w-full max-w-[1500px]
          px-6 pb-12 sm:px-10
          lg:px-16 lg:pb-14 xl:px-20
        "
      >
        <HeroFeatures />
      </div>

      {/* Transición inferior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-px left-0
          h-7 w-full bg-[#FFF3E8]
          [clip-path:polygon(0_60%,22%_92%,55%_100%,78%_78%,100%_25%,100%_100%,0_100%)]
        "
      />
    </section>
  );
}
