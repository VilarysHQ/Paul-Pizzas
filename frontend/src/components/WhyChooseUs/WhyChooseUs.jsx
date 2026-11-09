
import { reasons } from "../../data/WhyChooseUs/reasons";
import ReasonCard from "./ReasonCard";

export default function WhyChooseUs() {
  return (
    <section
      id="nosotros"
      aria-labelledby="why-choose-us-title"
      className="
        relative overflow-hidden
        bg-[#FFF3E8] px-5
        pt-8 pb-20 text-[#25140F]
        sm:px-8 sm:pb-24
        lg:px-12 xl:px-16
      "
    >
      {/* Decoración superior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          top-0 left-1/2
          h-px w-[min(85%,1100px)]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent via-[#DEC3B3]
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Encabezado */}
        <header className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B30000]/45" />

            <span
              className="
                text-[10px] font-extrabold
                uppercase tracking-[0.3em]
                text-[#B30000]
              "
            >
              Nuestra esencia
            </span>

            <span className="h-px w-8 bg-[#B30000]/45" />
          </div>

          <h2
            id="why-choose-us-title"
            className="
              mt-3 text-[clamp(28px,3.3vw,44px)]
              font-black leading-tight
              tracking-[-0.045em]
            "
          >
            ¿Por qué elegir{" "}
            <span className="text-[#AC0000]">
              Paul Pizzas?
            </span>
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[540px]
              text-sm leading-relaxed
              text-[#786255] sm:text-base
            "
          >
            Buenos momentos alrededor de una buena pizza.
          </p>
        </header>

        {/* Tarjetas */}
        <div
          className="
            mt-10 grid grid-cols-1
            gap-4 sm:grid-cols-2
            lg:grid-cols-4 lg:gap-5
          "
        >
          {reasons.map((reason) => (
            <ReasonCard
              key={reason.id}
              reason={reason}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
