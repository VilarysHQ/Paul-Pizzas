import { useEffect } from "react";
import { navigationLinks } from "../../data/Navbar/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`
        absolute top-full left-0 w-full overflow-hidden
        bg-[#790000] shadow-xl transition-all duration-300
        lg:hidden
        ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }
      `}
    >
      <nav
        aria-label="Navegación móvil"
        className="mx-auto flex max-w-7xl flex-col px-5 py-6"
      >
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="
              rounded-lg px-4 py-3.5 text-sm font-semibold
              text-white transition-colors
              hover:bg-white/10
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-amber-300
            "
          >
            {link.label}
          </a>
        ))}

        <span className="mt-5 border-t border-white/15 px-4 pt-5 text-xs text-white/60">
          Paul Pizzas · Chosica
        </span>
      </nav>
    </div>
  );
}