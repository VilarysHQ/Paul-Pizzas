
import logo from "../../assets/Navbar/logo.png";
import {
  footerLinks,
  footerConfig,
} from "../../data/Footer/footer";
import FooterCTA from "./FooterCTA";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer
      className="
        overflow-hidden bg-[#510000]
        text-white
      "
    >
      <FooterCTA />

      <div
        className="
          relative mx-auto max-w-[1440px]
          px-6 pt-12 pb-5
          sm:px-10
          lg:px-16 lg:pt-14
        "
      >
        <div
          className="
            grid grid-cols-1 gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_0.8fr_1fr]
            lg:gap-16
          "
        >
          {/* Marca */}
          <div className="flex flex-col items-start">
            <a
              href="#inicio"
              aria-label="Paul Pizzas - Volver al inicio"
              className="
                inline-flex rounded-md
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              <img
                src={logo}
                alt="Paul Pizzas"
                className="h-auto w-[130px] object-contain"
              />
            </a>

            <p
              className="
                mt-5 max-w-[270px]
                text-[14px] leading-relaxed
                text-white/65
              "
            >
              {footerConfig.tagline}
              <br />
              Una propuesta gastronómica desde Chosica.
            </p>

            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3
              className="
                text-[15px] font-extrabold
                text-white
              "
            >
              Explora
            </h3>

            <div className="mt-3 h-[2px] w-9 bg-[#FFD43B]" />

            <nav
              aria-label="Enlaces del pie de página"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    text-[13px] font-medium
                    text-white/65
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[15px] font-extrabold">
              Visítanos
            </h3>

            <div className="mt-3 h-[2px] w-9 bg-[#FFD43B]" />

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD43B]"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <p className="text-[13px] leading-relaxed text-white/65">
                  {footerConfig.address}
                  <br />
                  {footerConfig.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#FFD43B]"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 2.7a2 2 0 0 1-.6 1.8L8 11a16 16 0 0 0 5 5l1.8-1.9a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 1.9Z" />
                </svg>

                <a
                  href={footerConfig.phoneHref}
                  className="
                    text-[13px] text-white/65
                    transition-colors hover:text-white
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                  "
                >
                  {footerConfig.phoneDisplay}
                </a>
              </div>

              <a
                href="#local"
                className="
                  mt-1 inline-flex w-fit
                  items-center gap-2
                  text-[13px] font-bold
                  text-[#FFD43B]
                  transition-colors hover:text-white
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Ver ubicación
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div
          className="
            mt-12 flex flex-col items-center
            justify-between gap-3
            border-t border-white/15
            pt-5 text-center
            sm:flex-row sm:text-left
          "
        >
          <p className="text-[11px] text-white/50">
            © {footerConfig.year} {footerConfig.brand}.
            Propuesta conceptual no oficial.
          </p>

          <p className="text-[11px] text-white/50">
            Diseño demostrativo por{" "}
            <span className="font-bold text-white/85">
              {footerConfig.developer}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
