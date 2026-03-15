// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export const WA_NUMBER  = "+33736715902"; // ← replace with real number
export const WA_MESSAGE = encodeURIComponent("Bonjour ! Je souhaite réserver une session.");
export const WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// ─── Fonts ────────────────────────────────────────────────────────────────────
export const DISPLAY = "'Licorice', cursive";
export const BODY    = "'Montserrat', sans-serif";

// ─── Color palette ────────────────────────────────────────────────────────────
export const C_PRIMARY   = "#2A1C12"; // dark brown — backgrounds, containers
export const C_SECONDARY = "#F5ECD7"; // light cream — light section backgrounds
export const C_ACCENT    = "#D4A373"; // gold       — buttons, icons, highlights
export const C_TEXT      = "#F5E6C8"; // warm white — main readable text

// ─── Scroll-reveal base style ─────────────────────────────────────────────────
export const reveal: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(40px)",
  transition: "opacity 0.8s ease, transform 0.8s ease",
};