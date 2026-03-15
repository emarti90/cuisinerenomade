import { FaWhatsapp } from "react-icons/fa";
import { BODY, C_ACCENT, C_PRIMARY, C_SECONDARY, WA_LINK } from "./constants";

// ─── WhatsApp CTA button ──────────────────────────────────────────────────────
interface WaBtnProps {
  label: string;
  dark?: boolean;
  style?: React.CSSProperties;
}

export function WaBtn({ label, dark = false, style = {} }: WaBtnProps) {
  const base: React.CSSProperties = {
    fontFamily: BODY,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.25s ease",
    padding: "15px 36px",
    whiteSpace: "nowrap",
    ...style,
  };
  const colors = dark
    ? { color: C_PRIMARY, background: C_ACCENT }
    : { color: C_SECONDARY, background: C_PRIMARY };

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      style={{ ...base, ...colors }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = dark ? C_ACCENT : C_ACCENT)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = dark ? C_ACCENT : C_PRIMARY)
      }
    >
      <FaWhatsapp size={15} />
      {label}
    </a>
  );
}

// ─── Decorative oversized section number ─────────────────────────────────────
interface DecorNumProps {
  n: string;
  right?: boolean;
  light?: boolean;
}

export function DecorNum({ n, right = false, light = false }: DecorNumProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
        [right ? "right" : "left"]: "-20px",
        fontFamily: BODY,
        fontSize: "280px",
        fontWeight: 400,
        color: light ? "rgba(139,94,60,0.08)" : "rgba(212,163,115,0.06)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {n}
    </div>
  );
}

// ─── Service label (eyebrow line + text) ─────────────────────────────────────
interface ServiceLabelProps {
  n: string;
  light?: boolean;
}

export function ServiceLabel({ n, light = false }: ServiceLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "1px",
          background: light ? C_ACCENT : C_ACCENT,
        }}
      />
      <span
        style={{
          fontFamily: BODY,
          fontSize: "9.5px",
          fontWeight: 600,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: light ? C_ACCENT : C_ACCENT,
        }}
      >
        Service {n}
      </span>
    </div>
  );
}