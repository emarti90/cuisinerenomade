import { BODY, C_ACCENT, C_PRIMARY, C_SECONDARY, DISPLAY } from "../../lib/constants";
import { FaWhatsapp } from "react-icons/fa";

const ctaButtons = [
  { label: "Réserver un batch cooking",  message: "Bonjour ! Je souhaite réserver un batch cooking." },
  { label: "Organiser un brunch",         message: "Bonjour ! Je souhaite organiser un brunch." },
  { label: "Commander des plats",         message: "Bonjour ! Je souhaite commander des plats." },
];

export default function SectionCTA() {
  return (
    <section
      id="reserver"
      style={{
        background: C_SECONDARY,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: DISPLAY,
          fontSize: "clamp(120px, 18vw, 240px)",
          fontWeight: 400,
          color: "rgba(139,94,60,0.06)",
          lineHeight: 1,
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        À table !
      </div>

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "40px", height: "1px", background: C_ACCENT }} />
          <span style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: C_ACCENT }}>
            Nos Services Culinaires
          </span>
          <div style={{ width: "40px", height: "1px", background: C_ACCENT }} />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(56px, 7vw, 96px)",
            fontWeight: 400,
            lineHeight: 1,
            color: C_PRIMARY,
            marginBottom: "24px",
          }}
        >
          Mangez mieux
          <br />
          <em style={{ color: C_ACCENT }}>sans perdre de temps</em>
        </h2>

        {/* Subline */}
        <p
          style={{
            fontFamily: BODY,
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.85,
            color: C_ACCENT,
            maxWidth: "560px",
            margin: "0 auto 56px",
          }}
        >
          Des repas faits maison, préparés avec des ingrédients frais et adaptés à votre quotidien. Réservez votre service dès maintenant.
        </p>

        {/* Three CTA buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            alignItems: "center",
          }}
        >
          {ctaButtons.map(({ label, message }, i) => {
            const link = `https://wa.me/34600000000?text=${encodeURIComponent(message)}`;
            const isPrimary = i === 0;
            return (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: BODY,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: isPrimary ? "18px 48px" : "15px 40px",
                  background: isPrimary ? C_PRIMARY : "transparent",
                  color: isPrimary ? C_SECONDARY : C_PRIMARY,
                  border: isPrimary ? "none" : "1.5px solid rgba(42,28,18,0.35)",
                  transition: "all 0.25s ease",
                  minWidth: "320px",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isPrimary ? C_ACCENT : "rgba(42,28,18,0.08)";
                  e.currentTarget.style.borderColor = C_PRIMARY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isPrimary ? C_PRIMARY : "transparent";
                  e.currentTarget.style.borderColor = isPrimary ? "none" : "rgba(42,28,18,0.35)";
                }}
              >
                <FaWhatsapp size={15} />
                {label}
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #reserver a { min-width: unset !important; width: 100%; }
        }
      `}</style>
    </section>
  );
}