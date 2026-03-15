import { useRef } from "react";
import { FaLeaf, FaStar, FaFireAlt, FaUtensils } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { BODY, C_ACCENT, C_PRIMARY, C_TEXT, DISPLAY, reveal } from "../../lib/constants";
import { DecorNum, ServiceLabel, WaBtn } from "../../lib/ui";
import { useReveal } from "../../lib/hooks";

const alaCarteItems = [
  { label: "Tortilla",               Icon: FaUtensils },
  { label: "Empanadas",              Icon: FaUtensils },
  { label: "Quesadillas",            Icon: FaUtensils },
  { label: "Planches de charcuterie",Icon: FaStar     },
  { label: "Planches de fromages",   Icon: FaLeaf     },
  { label: "Plat du jour",           Icon: FaFireAlt  },
];

const eventItems = [
  "Anniversaires",
  "Réunions familiales",
  "Petits événements",
];

export default function Section4Delivery() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="delivery"
      ref={ref}
      style={{
        background: C_PRIMARY,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DecorNum n="IV" />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          data-reveal
          style={{
            ...reveal,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "end",
            marginBottom: "72px",
          }}
        >
          <div>
            <ServiceLabel n="Livraison & Commandes" />
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: C_TEXT, marginBottom: "8px" }}>
              Livraison &
            </h2>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: C_ACCENT }}>
              Commandes
            </h2>
          </div>
          <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: C_TEXT }}>
            Vous pouvez également commander certains plats et les recevoir directement chez vous ou pour vos événements. Des plats faits maison, disponibles sur commande.
          </p>
        </div>

        {/* Two column: à la carte + events */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            marginBottom: "72px",
          }}
        >
          {/* À la carte */}
          <div
            data-reveal
            style={{
              ...reveal,
              background: "rgba(212,163,115,0.06)",
              border: "1px solid rgba(212,163,115,0.15)",
              padding: "48px 40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: "24px", height: "1px", background: C_ACCENT }} />
              <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT }}>
                À la carte
              </p>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0" }}>
              {alaCarteItems.map(({ label, Icon }) => (
                <li
                  key={label}
                  style={{
                    fontFamily: BODY,
                    fontSize: "15px",
                    fontWeight: 400,
                    color: C_TEXT,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(212,163,115,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Icon size={13} color={C_ACCENT} style={{ flexShrink: 0 }} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Pour vos événements */}
          <div
            data-reveal
            style={{
              ...reveal,
              background: "rgba(212,163,115,0.03)",
              border: "1px solid rgba(212,163,115,0.08)",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                <div style={{ width: "24px", height: "1px", background: C_ACCENT }} />
                <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT }}>
                  Pour vos événements
                </p>
              </div>
              <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: C_TEXT, marginBottom: "28px" }}>
                Nous proposons également des formats adaptés aux réceptions et événements privés.
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                {eventItems.map((item) => (
                  <li key={item} style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, color: C_TEXT, display: "flex", alignItems: "center", gap: "10px" }}>
                    <MdCheckCircleOutline size={15} color={C_ACCENT} style={{ flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src="images/poke.webp"
                alt="Plats à commander"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div
          data-reveal
          style={{
            ...reveal,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212,163,115,0.15)",
            paddingTop: "40px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "4px" }}>
              Commande sur mesure
            </p>
            <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, color: C_TEXT }}>
              Contactez-nous pour connaître les disponibilités et les tarifs.
            </p>
          </div>
          <WaBtn label="Voir le menu et commander →" dark />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #delivery > div > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 32px !important; }
          #delivery > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #delivery > div > div:nth-child(4) { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}