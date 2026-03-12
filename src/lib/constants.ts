// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export const WA_NUMBER  = "+33736715902"; // ← replace with real number
export const WA_MESSAGE = encodeURIComponent("Bonjour ! Je souhaite réserver une session.");
export const WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// ─── Fonts ────────────────────────────────────────────────────────────────────
export const DISPLAY = "'Licorice', cursive";
export const BODY    = "'Montserrat', sans-serif";

// ─── Scroll-reveal base style ─────────────────────────────────────────────────
export const reveal: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(40px)",
  transition: "opacity 0.8s ease, transform 0.8s ease",
};