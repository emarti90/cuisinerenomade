import { useRef } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { BODY, C_ACCENT, C_PRIMARY, C_SECONDARY, DISPLAY, reveal } from "../../lib/constants";
import { DecorNum, ServiceLabel, WaBtn } from "../../lib/ui";
import { useReveal } from "../../lib/hooks";

const options = [
  "Brunch préparé et servi sur place",
  "Brunch livré ou préparé à l'avance",
  "Café de spécialité",
  "Menu personnalisé selon vos envies",
];

const ideal = [
  "Anniversaires",
  "Brunch entre amis",
  "Week-ends gourmands",
  "Petits événements privés",
];

const menu = [
  {
    category: "Brunch",
    items: [
      "Brownie (également sans gluten)",
      "Carrot Cake (également sans gluten)",
      "Gâteau de Saint-Jacques",
      "Cookies",
      "Pancakces",
      "Club Sandwich chaudes et froides",
    ],
  },
  {
    category: "Café",
    items: [
      "Expresso",
      "Double Expresso",
      "Macchiato",
      "Americain",
      "Capiccino",
      "Flat white",
    ],
  },
  {
    category: "Lattes",
    items: [
      "Latte",
      "Chai",
      "Golden",
      "Cacao",
      "Pumpkin Spice (saisonnière)",
      "Matcha",
    ],
  },
];

export default function Section3Brunch() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="brunch"
      ref={ref}
      style={{
        background: C_SECONDARY,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DecorNum n="III" right light />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top: heading + image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          <div>
            <div data-reveal style={reveal}>
              <ServiceLabel n="Brunch & Café de Spécialité" light />
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: C_PRIMARY, marginBottom: "8px" }}>
                Brunch &
              </h2>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: C_ACCENT, marginBottom: "20px" }}>
                Café de Spécialité
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "16px" }}>
                Un brunch sur mesure, directement chez vous
              </p>
              <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: C_ACCENT, marginBottom: "28px", maxWidth: "400px" }}>
                Profitez d'un brunch convivial et gourmand, préparé avec soin et accompagné de café de spécialité. Parfait pour un moment entre amis, en famille ou pour célébrer une occasion spéciale.
              </p>

              {/* Options */}
              <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "12px" }}>
                Options possibles
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {options.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: C_ACCENT, display: "flex", alignItems: "center", gap: "8px" }}>
                    <MdCheckCircleOutline size={14} color={C_ACCENT} style={{ flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "10px" }}>
                Idéal pour
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ideal.map((item) => (
                  <span key={item} style={{ fontFamily: BODY, fontSize: "11px", fontWeight: 500, color: C_ACCENT, background: C_SECONDARY, padding: "5px 12px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image + floating quote */}
          <div data-reveal style={{ ...reveal, position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <img
                src="/images/brunch.webp"
                alt="Brunch"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Menu list */}
        <div
          data-reveal
          style={{
            ...reveal,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            borderTop: "1px solid rgba(139,94,60,0.2)",
          }}
        >
          {menu.map((g, i) => (
            <div
              key={g.category}
              style={{
                padding: "32px 26px",
                borderRight: i < 2 ? "1px solid rgba(139,94,60,0.2)" : "none",
              }}
            >
              <h3 style={{ fontFamily: BODY, fontSize: "9px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "16px" }}>
                {g.category}
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {g.items.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "12.5px", fontWeight: 400, color: C_PRIMARY, padding: "10px 0", borderBottom: "1px solid rgba(139,94,60,0.1)", lineHeight: 1.4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal style={{ ...reveal, textAlign: "center", marginTop: "44px" }}>
          <WaBtn label="Organiser votre brunch →" />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #brunch > div > div:first-child { grid-template-columns: 1fr !important; gap: 48px !important; }
          #brunch > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #brunch > div > div:nth-child(2) > div { border-right: none !important; border-bottom: 1px solid rgba(139,94,60,0.2); }
        }
      `}</style>
    </section>
  );
}