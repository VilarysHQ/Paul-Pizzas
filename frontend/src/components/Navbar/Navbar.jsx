
import { useState } from "react";
import logo from "../../assets/Navbar/logo.png";
import { navigationLinks } from "../../data/Navbar/navigation";
import { useScrollPosition } from "../../hooks/Navbar/useScrollPosition";
import MobileMenu from "./MobileMenu";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#20C263]"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.47 0 .1 5.37.1 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.9 11.9 0 0 0 5.86 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.2-3.52-8.41ZM12.07 21.84a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89a9.8 9.8 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 h-[72px]
        transition-[background-color,box-shadow] duration-300
        lg:h-[80px]
        ${
          scrolled
            ? "bg-[#760000]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-[#850000]"
        }
      `}
    >
      <div
        className="
          mx-auto grid h-full w-full max-w-[1600px]
          grid-cols-[1fr_auto] items-center gap-4
          px-5 sm:px-8
          lg:grid-cols-[1fr_auto_1fr] lg:px-12
          xl:px-16 2xl:px-20
        "
      >
        {/* Logotipo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Paul Pizzas - Inicio"
          className="
            flex w-fit shrink-0 items-center
            focus-visible:rounded-sm
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-amber-300
          "
        >
          <img
            src={logo}
            alt="Paul Pizzas"
            className="
              block h-auto w-[104px] object-contain
              lg:w-[116px]
            "
          />
        </a>

        {/* Navegación escritorio */}
        <nav
          aria-label="Navegación principal"
          className="
            hidden items-center justify-center
            gap-7 lg:flex xl:gap-10
          "
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative whitespace-nowrap
                py-2 text-[14px] font-semibold
                text-white transition-opacity duration-200
                hover:opacity-75
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-amber-300
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botones */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            disabled
            title="WhatsApp pendiente de configurar"
            className="
              inline-flex items-center justify-center
              gap-2 rounded-full bg-[#FFF8F0]
              px-3 py-2.5 text-xs font-bold
              whitespace-nowrap text-[#850000]
              shadow-sm
              disabled:cursor-not-allowed
              sm:px-5 sm:text-[13px]
            "
          >
            <WhatsAppIcon />

            <span className="hidden sm:inline">
              Pedir por WhatsApp
            </span>
          </button>

          {/* Menú móvil */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              flex h-10 w-10 flex-col items-center
              justify-center gap-[5px] rounded-lg
              border border-white/30 text-white
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-amber-300
              lg:hidden
            "
          >
            <span
              className={`
                h-[2px] w-5 rounded bg-current
                transition-transform duration-300
                ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                h-[2px] w-5 rounded bg-current
                transition-opacity duration-300
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-[2px] w-5 rounded bg-current
                transition-transform duration-300
                ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
}
