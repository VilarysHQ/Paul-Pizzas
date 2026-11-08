import { heroFeatures } from "../../data/Hero/features";

const icons = {
  pizza: (
    <>
      <path d="M12 2 2 22c6-2 14-2 20 0L12 2Z" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="14" cy="17" r="1" />
    </>
  ),
  flame: (
    <path d="M12 22c4.4 0 7-3 7-7 0-4-3-7-4-8 0 3-2 4-2 4 0-5-2-8-4-9 0 5-4 8-4 13 0 4 2.6 7 7 7Z" />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  map: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

export default function HeroFeatures() {
  return (
    <div
      className="
        grid w-full grid-cols-2
        gap-x-4 gap-y-6
        lg:grid-cols-4 lg:gap-8
      "
    >
      {heroFeatures.map((feature) => (
        <div
          key={feature.id}
          className="
            flex items-center
            justify-start gap-3
            lg:justify-center
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="
              h-7 w-7 shrink-0
              text-white
              sm:h-8 sm:w-8
            "
          >
            {icons[feature.icon]}
          </svg>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs font-bold text-white sm:text-sm">
              {feature.title}
            </span>

            <span className="text-xs font-medium text-white/85 sm:text-sm">
              {feature.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
