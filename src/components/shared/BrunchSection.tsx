import { useRef } from "react";
import { BODY, DISPLAY, reveal } from "../../lib/constants";
import { DecorNum, ServiceLabel, WaBtn } from "../../lib/ui";
import { MdCheckCircleOutline } from "react-icons/md";
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
      "Œufs Bénédicte, hollandaise à la truffe",
      "Pain perdu brioché, compote de saison",
      "Shakshuka, feta & herbes fraîches",
      "Avocat écrasé, pain maison fermenté",
    ],
  },
  {
    category: "Café",
    items: [
      "Single origin en V60",
      "Flat white & cortado",
      "Cold brew lait d'avoine",
      "Lattes de spécialité & thés",
    ],
  },
  {
    category: "Sucreries",
    items: [
      "Brioche cardamome & cannelle",
      "Gâteau amande & orange sans farine",
      "Galette de saison",
      "Pancakes ricotta, beurre de miel",
    ],
  },
];

export default function BrunchSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="brunch"
      ref={ref}
      style={{
        background: "#EDE0C4",
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
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: "#2A1C12", marginBottom: "8px" }}>
                Brunch &
              </h2>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: "#8B5E3C", marginBottom: "20px" }}>
                Café de Spécialité
              </h2>
              <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "16px" }}>
                Un brunch sur mesure, directement chez vous
              </p>
              <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: "#5C3D24", marginBottom: "28px", maxWidth: "400px" }}>
                Profitez d'un brunch convivial et gourmand, préparé avec soin et accompagné de café de spécialité. Parfait pour un moment entre amis, en famille ou pour célébrer une occasion spéciale.
              </p>

              {/* Options */}
              <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "12px" }}>
                Options possibles
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {options.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: "#5C3D24", display: "flex", alignItems: "center", gap: "8px" }}>
                    <MdCheckCircleOutline size={14} color="#8B5E3C" style={{ flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "10px" }}>
                Idéal pour
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ideal.map((item) => (
                  <span key={item} style={{ fontFamily: BODY, fontSize: "11px", fontWeight: 500, color: "#5C3D24", background: "#D4B896", padding: "5px 12px" }}>
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
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&q=80"
                alt="Brunch"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ position: "absolute", top: "32px", left: "-32px", background: "#2A1C12", padding: "18px 20px", maxWidth: "215px" }}>
              <p style={{ fontFamily: BODY, fontSize: "12px", fontStyle: "italic", fontWeight: 300, lineHeight: 1.6, color: "#D4A373", margin: 0 }}>
                "Le meilleur brunch que j'aie eu en dehors d'un restaurant."
              </p>
              <p style={{ fontFamily: BODY, fontSize: "10px", color: "#9A7A5A", marginTop: "8px" }}>
                — Une cliente heureuse
              </p>
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
              <h3 style={{ fontFamily: BODY, fontSize: "9px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "16px" }}>
                {g.category}
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {g.items.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "12.5px", fontWeight: 400, color: "#2A1C12", padding: "10px 0", borderBottom: "1px solid rgba(139,94,60,0.1)", lineHeight: 1.4 }}>
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
