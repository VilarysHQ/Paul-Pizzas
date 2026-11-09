
const iconPaths = {
  chef: (
    <>
      <path d="M6 13a4 4 0 0 1-1-7.9A5 5 0 0 1 14 4a4 4 0 0 1 5 7.9V20H6v-7Z" />
      <path d="M6 16h13M10 16v4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8 14-2 8 6-3 6 3-2-8" />
      <path d="m12 5 1.2 2.5 2.8.4-2 2 .5 2.8L12 11.4l-2.5 1.3.5-2.8-2-2 2.8-.4L12 5Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 21v-2a6 6 0 0 1 12 0v2H3Z" />
      <path d="M16 15a5 5 0 0 1 5 5v1h-4" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

export default function ReasonCard({ reason }) {
  return (
    <article
      className="
        group relative flex h-full min-h-[200px]
        flex-col overflow-hidden rounded-[20px]
        border border-[#EDD9CA]
        bg-[#FFFAF5]/95 p-6
        shadow-[0_6px_22px_rgba(100,50,20,0.045)]
        transition-[transform,box-shadow,border-color]
        duration-300
        hover:-translate-y-1.5
        hover:border-[#C97B6B]/50
        hover:shadow-[0_15px_35px_rgba(100,40,20,0.1)]
        motion-reduce:transform-none
        sm:p-7
      "
    >
      {/* Número decorativo */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          top-4 right-5 text-[38px]
          font-black leading-none
          text-[#B30000]/[0.055]
        "
      >
        {reason.number}
      </span>

      {/* Icono */}
      <div
        className="
          flex h-14 w-14 items-center
          justify-center rounded-2xl
          border border-[#F0D8CE]
          bg-[#FDECE5] text-[#B30000]
          transition-colors duration-300
          group-hover:border-[#F3C9B8]
          group-hover:bg-[#FADFD5]
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
          className="h-8 w-8"
        >
          {iconPaths[reason.icon]}
        </svg>
      </div>

      <div className="mt-5">
        <h3
          className="
            text-[17px] font-extrabold
            leading-snug tracking-[-0.035em]
            text-[#25140F]
          "
        >
          {reason.title}
        </h3>

        <p
          className="
            mt-2 text-[13px] leading-[1.65]
            text-[#786255]
          "
        >
          {reason.description}
        </p>
      </div>

      {/* Detalle rojo inferior */}
      <span
        aria-hidden="true"
        className="
          absolute bottom-0 left-6
          h-[3px] w-0 rounded-full
          bg-[#B30000]
          transition-[width] duration-300
          group-hover:w-14
        "
      />
    </article>
  );
}
