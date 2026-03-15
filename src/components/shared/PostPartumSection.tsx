import { useRef } from "react";
import { GiMeal, GiPeaceDove, GiCook, GiCalendar } from "react-icons/gi";
import { MdCheckCircleOutline } from "react-icons/md";
import { BODY, DISPLAY, C_ACCENT, C_PRIMARY, C_TEXT, reveal } from "../../lib/constants";
import { DecorNum, ServiceLabel, WaBtn } from "../../lib/ui";
import { useReveal } from "../../lib/hooks";

const includes = [
  "Accompagnement pendant 1 mois",
  "Cuisine à domicile 2 fois par semaine",
  "Repas adaptés à la récupération post-partum",
  "Organisation complète des repas",
];

const iHandleIt = [
  "Recherche des ingrédients",
  "Courses",
  "Préparation des repas",
];

const pillars = [
  {
    Icon: GiMeal,
    title: "Repas nourrissants",
    desc: "Recettes riches en fer, anti-inflammatoires et équilibrantes pour la récupération.",
  },
  {
    Icon: GiPeaceDove,
    title: "Zéro stress",
    desc: "Tout planifié, cuisiné et rangé. Vous n'avez plus qu'à réchauffer.",
  },
  {
    Icon: GiCook,
    title: "Personnalisé",
    desc: "Adapté aux allergies, intolérances, envies et aux goûts de votre famille.",
  },
  {
    Icon: GiCalendar,
    title: "1 mois complet",
    desc: "Cuisine à domicile 2 fois par semaine pendant tout le premier mois.",
  },
];

export default function Section2PostPartum() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, 140);

  return (
    <section
      id="post-partum"
      ref={ref}
      style={{
        background: C_PRIMARY,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />
      <DecorNum n="II" />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "end",
            marginBottom: "64px",
          }}
        >
          <div data-reveal style={reveal}>
            <ServiceLabel n="Batch Cooking Post-Partum" />
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: C_TEXT, marginBottom: "8px" }}>
              Post Partum
            </h2>
            <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C_ACCENT, marginBottom: 0 }}>
              Batch Cooking
            </p>
          </div>

          <div data-reveal style={reveal}>
            <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: C_TEXT, borderLeft: "2px solid #D4A373", paddingLeft: "22px" }}>
              Les premières semaines avec un nouveau-né sont précieuses et intenses. Ce service est conçu pour vous permettre de vous concentrer uniquement sur votre bébé, pendant que je m'occupe de votre alimentation. Pendant un mois, je vous accompagne avec des repas adaptés à la récupération post-partum.
            </p>
          </div>
        </div>

        {/* Four pillars */}
        <div
          data-reveal
          style={{
            ...reveal,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "2px",
            marginBottom: "60px",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: i % 2 === 0 ? "rgba(212,163,115,0.08)" : "rgba(212,163,115,0.04)",
                padding: "34px 22px",
                borderTop: "1px solid rgba(212,163,115,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(212,163,115,0.12)", marginBottom: "16px" }}>
                <p.Icon size={22} color={C_ACCENT} />
              </div>
              <h3 style={{ fontFamily: BODY, fontSize: "12px", fontWeight: 700, color: C_TEXT, marginBottom: "10px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: BODY, fontSize: "12px", fontWeight: 300, lineHeight: 1.75, color: C_TEXT }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Service details: includes + I handle */}
        <div
          data-reveal
          style={{
            ...reveal,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "56px",
            borderTop: "1px solid rgba(212,163,115,0.15)",
            paddingTop: "48px",
          }}
        >
          <div>
            <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "16px" }}>
              Le service inclut
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {includes.map((item) => (
                <li key={item} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: C_TEXT, display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.5 }}>
                  <MdCheckCircleOutline size={15} color={C_ACCENT} style={{ flexShrink: 0, marginTop: "2px" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C_ACCENT, marginBottom: "16px" }}>
              Je m'occupe de tout
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {iHandleIt.map((item) => (
                <li key={item} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: C_TEXT, display: "flex", alignItems: "center", gap: "10px" }}>
                  <MdCheckCircleOutline size={15} color={C_ACCENT} style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: C_TEXT, fontStyle: "italic" }}>
              Votre cuisine est remplie de plats prêts à être dégustés, pour que vous puissiez vous reposer et profiter de votre bébé.
            </p>
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
            borderTop: "1px solid rgba(212,163,115,0.2)",
            paddingTop: "36px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: C_TEXT }}>
            Offrez ce service à une jeune maman — le cadeau le plus précieux.
          </p>
          <WaBtn label="Découvrir l'accompagnement post-partum →" dark />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #post-partum > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #post-partum > div > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
          #post-partum > div > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #post-partum > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}