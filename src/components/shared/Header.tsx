import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BODY, DISPLAY, WA_LINK } from "../../lib/constants";

// ─── Logo ─────────────────────────────────────────────────────────────────────
// Once logo.svg is in /src/assets/logo.svg, replace Logo() with:
//   import logoSrc from "../assets/logo.svg";
//   <img src={logoSrc} alt="La Cuina de Sempre" style={{ height: "48px" }} />
function Logo() {
  return (
    <a
      href="#"
      style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
    >
      {/* SVG placeholder — swap for <img src="/assets/logo.svg"> when ready */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="17" stroke="#D4A373" strokeWidth="1.2" />
        <path
          d="M18 8 C12 14 10 20 18 28 C26 20 24 14 18 8Z"
          fill="#D4A373"
          opacity="0.7"
        />
        <path
          d="M12 16 Q18 12 24 16"
          stroke="#F5E6C8"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "28px",
            fontWeight: 400,
            color: "#F5E6C8",
            lineHeight: 1,
          }}
        >
          Cuisinère
        </span>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "7.5px",
            fontWeight: 600,
            color: "#D4A373",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginTop: "3px",
          }}
        >
          Nomade
        </span>
      </div>
    </a>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Batch Cooking", href: "#batch-cooking" },
    { label: "Post Partum",   href: "#post-partum"   },
    { label: "Brunch",        href: "#brunch"        },
    { label: "Pokés & Plats", href: "#delivery"      },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(42,28,18,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,163,115,0.2)" : "none",
        padding: scrolled ? "10px 0" : "18px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "28px", alignItems: "center" }}
          className="hdr-desk"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: BODY,
                fontSize: "10.5px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E8D5B0",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A373")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#E8D5B0")}
            >
              {l.label}
            </a>
          ))}

          {/* WhatsApp CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: BODY,
              fontSize: "10.5px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2A1C12",
              background: "#D4A373",
              padding: "10px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C49060")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#D4A373")}
          >
            <FaWhatsapp size={14} /> Réserver
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hdr-mob"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "#E8D5B0",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(42,28,18,0.98)",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {[...links, { label: "Contact WhatsApp", href: WA_LINK }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: BODY,
                fontSize: "15px",
                fontWeight: 500,
                color: "#E8D5B0",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .hdr-desk { display: none !important; }
          .hdr-mob  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
