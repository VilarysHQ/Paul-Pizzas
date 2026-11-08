
import { useEffect, useMemo, useRef, useState } from "react";
import menuBackground from "../../assets/Menu/menuBackground.png";
import { pizzas } from "../../data/Menu/pizzas";
import MenuFilters from "./MenuFilters";
import PizzaCard from "./PizzaCard";

function CarouselArrow({ direction, onClick, disabled }) {
  const previous = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={previous ? "Pizzas anteriores" : "Pizzas siguientes"}
      className={`
        flex h-11 w-11 items-center justify-center
        rounded-full bg-[#850000] text-white
        shadow-[0_4px_12px_rgba(80,0,0,0.2)]
        transition-all duration-200
        hover:bg-[#B50000]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#850000]
        disabled:cursor-not-allowed
        disabled:opacity-30
        lg:h-12 lg:w-12
      `}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
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

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const carouselRef = useRef(null);

  const filteredPizzas = useMemo(() => {
    if (activeCategory === "todas") return pizzas;

    return pizzas.filter(
      (pizza) => pizza.category === activeCategory
    );
  }, [activeCategory]);

  const getCardStep = () => {
    const carousel = carouselRef.current;
    const card = carousel?.firstElementChild;

    if (!carousel || !card) return 0;

    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const update = () => {
      const step = getCardStep();
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (!step || maxScroll <= 1) {
        setPageCount(1);
        setActivePage(0);
        return;
      }

      const count = Math.ceil((maxScroll - 1) / step) + 1;

      setPageCount(count);
      setActivePage(
        Math.min(
          count - 1,
          Math.round(carousel.scrollLeft / step)
        )
      );
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(carousel);

    return () => observer.disconnect();
  }, [filteredPizzas]);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const step = getCardStep();
    if (!carousel || !step) return;

    setActivePage(
      Math.min(
        pageCount - 1,
        Math.round(carousel.scrollLeft / step)
      )
    );
  };

  const goToPage = (page) => {
    const carousel = carouselRef.current;
    const step = getCardStep();
    if (!carousel || !step) return;

    const target = Math.min(
      Math.max(0, page * step),
      carousel.scrollWidth - carousel.clientWidth
    );

    carousel.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActivePage(0);

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "instant",
      });
    }
  };

  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="
        relative scroll-mt-20
        overflow-hidden bg-[#FFF3E8]
        py-16 text-[#1B110E]
        sm:py-20
      "
    >
      {/* Fondo decorativo atenuado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${menuBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      <div
        className="
          relative mx-auto w-full
          max-w-[1600px] px-5
          sm:px-8 lg:px-12 xl:px-16
        "
      >
        {/* Encabezado */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#B50000]/40" />

            <span
              className="
                text-[10px] font-extrabold
                uppercase tracking-[0.3em]
                text-[#B50000] sm:text-[11px]
              "
            >
              Nuestro menú
            </span>

            <span className="h-px w-10 bg-[#B50000]/40" />
          </div>

          <h2
            id="menu-title"
            className="
              mt-3 text-[clamp(30px,3.6vw,46px)]
              font-black leading-tight
              tracking-[-0.045em]
            "
          >
            Nuestras Especialidades
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-[#634D42] sm:text-base">
            Descubre nuestras pizzas y encuentra tu favorita.
          </p>
        </div>

        {/* Filtros */}
        <MenuFilters
          activeCategory={activeCategory}
          onCategoryChange={changeCategory}
        />

        {/* Carrusel */}
        <div className="relative mt-9 lg:px-14">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            tabIndex={0}
            aria-label="Catálogo de pizzas"
            className="
              grid grid-flow-col
              auto-cols-[82%] gap-5
              overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              overscroll-x-contain
              pb-5 [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:auto-cols-[calc((100%_-_20px)/2)]
              lg:auto-cols-[calc((100%_-_40px)/3)]
              xl:auto-cols-[calc((100%_-_60px)/4)]
            "
          >
            {filteredPizzas.map((pizza) => (
              <div key={pizza.id} className="min-w-0 snap-start">
                <PizzaCard pizza={pizza} />
              </div>
            ))}
          </div>

          {/* Flechas laterales en escritorio */}
          {pageCount > 1 && (
            <div
              className="
                pointer-events-none absolute
                inset-0 hidden items-center
                justify-between lg:flex
              "
            >
              <div className="pointer-events-auto">
                <CarouselArrow
                  direction="previous"
                  disabled={activePage === 0}
                  onClick={() => goToPage(activePage - 1)}
                />
              </div>

              <div className="pointer-events-auto">
                <CarouselArrow
                  direction="next"
                  disabled={activePage >= pageCount - 1}
                  onClick={() => goToPage(activePage + 1)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Indicadores */}
        {pageCount > 1 && (
          <div className="mt-2 flex items-center justify-center gap-3">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Ir a la posición ${index + 1}`}
                aria-current={index === activePage ? "true" : undefined}
                className={`
                  h-2.5 rounded-full
                  transition-all duration-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#850000]
                  ${
                    index === activePage
                      ? "w-6 bg-[#B50000]"
                      : "w-2.5 border border-[#D6BBA8] bg-transparent hover:bg-[#CFA38D]"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* Controles móviles */}
        {pageCount > 1 && (
          <div className="mt-5 flex justify-center gap-5 lg:hidden">
            <CarouselArrow
              direction="previous"
              disabled={activePage === 0}
              onClick={() => goToPage(activePage - 1)}
            />
            <CarouselArrow
              direction="next"
              disabled={activePage >= pageCount - 1}
              onClick={() => goToPage(activePage + 1)}
            />
          </div>
        )}

        <p className="mt-7 text-center text-xs text-[#896D5B]">
          Catálogo demostrativo. Productos, ingredientes
          y precios sujetos a confirmación.
        </p>
      </div>
    </section>
  );
}
