
import { socialLinks } from "../../data/Footer/footer";

const socialIcons = {
  facebook: (
    <path
      d="M15.5 8H14V6.5c0-.5.4-.5.8-.5H16V3h-2.2C11 3 10 4.8 10 6.5V8H8v3h2v10h4V11h2l.5-3h-2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
};

export default function SocialLinks() {
  const availableLinks = socialLinks.filter(
    (social) => Boolean(social.href)
  );

  if (availableLinks.length === 0) return null;

  return (
    <div className="flex items-center gap-3">
      {availableLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar ${social.label} de Paul Pizzas`}
          className="
            flex h-10 w-10 items-center
            justify-center rounded-full
            border border-white/20
            bg-white/10 text-white
            transition-all duration-200
            hover:-translate-y-0.5
            hover:border-white/50
            hover:bg-white/20
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-white
            motion-reduce:transform-none
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-5 w-5"
          >
            {socialIcons[social.id]}
          </svg>
        </a>
      ))}
    </div>
  );
}
