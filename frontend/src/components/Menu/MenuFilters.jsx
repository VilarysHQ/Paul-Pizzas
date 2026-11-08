
import { menuCategories } from "../../data/Menu/categories";

function CategoryIcon({ category }) {
  const paths = {
    todas: (
      <>
        <path d="M12 2 2 22c6-2 14-2 20 0L12 2Z" />
        <circle cx="11" cy="12" r="1" />
        <circle cx="15" cy="18" r="1" />
      </>
    ),
    clasicas: (
      <>
        <path d="M12 2 2 22c6-2 14-2 20 0L12 2Z" />
        <circle cx="11" cy="12" r="1" />
        <circle cx="15" cy="18" r="1" />
      </>
    ),
    especiales: (
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.7 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
    ),
    familiares: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2H3ZM16 15a5 5 0 0 1 5 5v1h-4" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      {paths[category]}
    </svg>
  );
}

export default function MenuFilters({
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div
      role="group"
      aria-label="Categorías de pizzas"
      className="
        mt-7 flex flex-wrap items-center
        justify-center gap-3
      "
    >
      {menuCategories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={active}
            onClick={() => onCategoryChange(category.id)}
            className={`
              inline-flex min-h-10 items-center
              justify-center gap-2 rounded-full
              border px-5 py-2.5
              text-[13px] font-bold
              shadow-[0_3px_9px_rgba(90,40,20,0.06)]
              transition-all duration-200
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#A00000]
              ${
                active
                  ? "border-[#AD0000] bg-[#AD0000] text-white"
                  : "border-[#E9D6C7] bg-[#FFF8F1] text-[#251510] hover:border-[#BC0000]/40 hover:bg-white"
              }
            `}
          >
            <CategoryIcon category={category.id} />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
