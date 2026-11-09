
import {
  localInfo,
  getGoogleMapsUrl,
  getGoogleMapsEmbedUrl,
} from "../../data/Local/localInfo";

function InfoIcon({ type }) {
  const paths = {
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 1.8L8 11a16 16 0 0 0 5 5l1.8-1.9a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 1.9Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#FFD7B8]"
    >
      {paths[type]}
    </svg>
  );
}

export default function LocalInfo() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-10 text-white sm:px-10 lg:px-12 xl:px-16">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#E8BFA8]">
          Nuestro local
        </span>
        <span className="h-px w-12 bg-[#E8BFA8]/45" />
      </div>

      <h2
        id="local-title"
        className="mt-3 text-[clamp(28px,2.6vw,43px)] font-black leading-tight tracking-[-0.04em]"
      >
        Te esperamos en{" "}
        <span className="text-[#FFCC9C]">Chosica</span>
      </h2>

      <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
        Encuentra nuestra ubicación y planifica tu visita.
      </p>

      <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_220px]">
        {/* Datos de contacto */}
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <InfoIcon type="map" />
            <div>
              <p className="text-sm font-semibold">
                {localInfo.address}
              </p>
              <p className="mt-1 text-xs text-white/55">
                {localInfo.location}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <InfoIcon type="clock" />
            <div>
              <p className="text-sm font-semibold">
                Horarios de atención
              </p>
              <p className="mt-1 text-xs text-white/65">
                {localInfo.hours}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {localInfo.closingTime}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <InfoIcon type="phone" />
            <div>
              <p className="text-xs text-white/55">
                Teléfono
              </p>
              <a
                href={localInfo.phoneHref}
                className="mt-1 inline-block text-sm font-bold text-white transition-colors hover:text-[#FFCC9C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {localInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={getGoogleMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF3E8] px-5 py-3 text-sm font-bold text-[#8D0000] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none"
          >
            <InfoIcon type="map" />
            Cómo llegar
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#30201A]">
          <iframe
            title="Ubicación de Paul Pizzas en Chosica"
            src={getGoogleMapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[220px] w-full border-0 xl:h-full xl:min-h-[235px]"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
