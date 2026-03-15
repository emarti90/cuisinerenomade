import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BODY, C_ACCENT, C_PRIMARY, C_TEXT, DISPLAY, WA_LINK } from "../../lib/constants";
import logo  from "../../assets/cuisinerenomade_logo.svg";

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a
      href="#"
      style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
    >
      <img src={logo} alt="Cuisinère Nomade" style={{ height: "48px" }} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: BODY,
            fontSize: "12px",
            fontWeight: 400,
            color: C_TEXT,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Cuisinére
        </span>
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "28px",
            fontWeight: 600,
            color: C_ACCENT,
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
                color: C_TEXT,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C_ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C_TEXT)}
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
              color: C_PRIMARY,
              background: C_ACCENT,
              padding: "10px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C_ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C_ACCENT)}
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
                background: C_TEXT,
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
                color: C_TEXT,
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