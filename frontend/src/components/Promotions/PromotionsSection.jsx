
import { useState } from "react";
import { promotions } from "../../data/Promotions/promotions";
import PromotionCard from "./PromotionCard";

function ArrowButton({ direction, onClick }) {
  const previous = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        previous ? "Promoción anterior" : "Promoción siguiente"
      }
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-white/40
        bg-[#650000]/25 text-white
        backdrop-blur-sm
        transition-all duration-200
        hover:border-white/70 hover:bg-white/15
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-white
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d={previous ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
        />
      </svg>
    </button>
  );
}

export default function PromotionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const promotion = promotions[activeIndex];

  const changePromotion = (direction) => {
    setActiveIndex(
      (current) =>
        (current + direction + promotions.length) %
        promotions.length
    );
  };

  return (
    <section
      id="promociones"
      aria-label="Promociones"
      className="
        relative scroll-mt-20
        bg-[#FFF3E8] px-4 pt-2 pb-12
        sm:px-8 lg:px-12 xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div
          role="region"
          aria-roledescription="carrusel"
          aria-label="Combos de Paul Pizzas"
          className="
            relative isolate overflow-hidden
            rounded-[24px] bg-[#990000]
            text-white
            shadow-[0_12px_28px_rgba(90,0,0,0.13)]
          "
        >
          {/* Fondo decorativo */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10
              bg-[linear-gradient(110deg,#980000_0%,#BA0707_48%,#870000_100%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10
              bg-[radial-gradient(ellipse_at_48%_70%,rgba(255,120,40,0.16),transparent_50%)]
            "
          />

          {/* Promoción con animación */}
          <div
            key={promotion.id}
            className="
              animate-[promotionEnter_350ms_ease-out_both]
              motion-reduce:animate-none
            "
          >
            <PromotionCard promotion={promotion} />
          </div>

          {promotions.length > 1 && (
            <>
              {/* Flechas escritorio */}
              <div
                className="
                  pointer-events-none absolute
                  inset-x-3 top-1/2 z-20
                  hidden -translate-y-1/2
                  items-center justify-between
                  lg:flex
                "
              >
                <div className="pointer-events-auto">
                  <ArrowButton
                    direction="previous"
                    onClick={() => changePromotion(-1)}
                  />
                </div>

                <div className="pointer-events-auto">
                  <ArrowButton
                    direction="next"
                    onClick={() => changePromotion(1)}
                  />
                </div>
              </div>

              {/* Flechas móvil */}
              <div
                className="
                  absolute inset-x-5 bottom-4 z-20
                  flex items-center justify-between
                  lg:hidden
                "
              >
                <ArrowButton
                  direction="previous"
                  onClick={() => changePromotion(-1)}
                />

                <ArrowButton
                  direction="next"
                  onClick={() => changePromotion(1)}
                />
              </div>

              {/* Indicadores */}
              <div
                role="group"
                aria-label="Seleccionar promoción"
                className="
                  absolute bottom-6 left-1/2 z-20
                  flex -translate-x-1/2
                  items-center justify-center gap-2
                  lg:bottom-3
                "
              >
                {promotions.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Mostrar ${item.badge}`}
                    aria-current={
                      activeIndex === index ? "true" : undefined
                    }
                    className={`
                      h-2 rounded-full
                      transition-all duration-300
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-white
                      ${
                        activeIndex === index
                          ? "w-5 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }
                    `}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <p className="mt-3 text-center text-[11px] text-[#8A6D5B]">
          Promociones ilustrativas. Productos y precios sujetos a confirmación.
        </p>
      </div>
    </section>
  );
}
