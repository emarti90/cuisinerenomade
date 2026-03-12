import { useRef } from "react";
import { GiWheat, GiAlarmClock } from "react-icons/gi";
import { FaSnowflake } from "react-icons/fa";
import { LuHandPlatter } from "react-icons/lu";
import { MdCheckCircleOutline } from "react-icons/md";
import { BODY, DISPLAY, reveal } from "../../lib/constants";
import { DecorNum, ServiceLabel, WaBtn } from "../../lib/ui";
import { useReveal } from "../../lib/hooks";

const features = [
  { Icon: LuHandPlatter,label: "4 repas + 4 dîners préparés"      },
  { Icon: GiWheat,      label: "Repas équilibrés et faits maison"  },
  { Icon: GiAlarmClock, label: "Cuisine réalisée chez vous"        },
  { Icon: FaSnowflake,  label: "Conservés au réfrigérateur"        },
];

const steps = [
  "Vous recevez une liste d'ingrédients",
  "Vous faites les courses",
  "Je viens chez vous et je cuisine tout",
  "Vos repas sont prêts et conservés au réfrigérateur",
];

const ideal = [
  "Familles actives",
  "Professionnels avec peu de temps",
  "Personnes souhaitant manger sainement sans cuisiner tous les jours",
];

export default function BatchCookingSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
      <section
      id="batch-cooking"
      ref={ref}
      style={{
        background: "#F5ECD7",
        padding: "120px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <DecorNum n="I" right />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* ── Image ── */}
        <div
          data-reveal
          style={{
            ...reveal,
            position: "relative",
          }}
        >
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80"
              alt="Batch cooking"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "-24px",
                background: "#2A1C12",
                padding: "22px 26px",
                minWidth: "150px",
              }}
            >
              <div style={{ fontFamily: DISPLAY, fontSize: "44px", fontWeight: 400, color: "#D4A373", lineHeight: 1 }}>
                8
              </div>
              <div style={{ fontFamily: BODY, fontSize: "9px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C8B08A", marginTop: "6px" }}>
                repas par semaine
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{ paddingLeft: "16px" }}>
          <div data-reveal style={reveal}>
            <ServiceLabel n="Batch Cooking à Domicile" />
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(56px,6vw,84px)", fontWeight: 400, lineHeight: 1, color: "#2A1C12", marginBottom: "8px" }}>
              Batch Cooking
            </h2>
            <p style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "20px" }}>
              Des repas faits maison pour toute la semaine
            </p>
            <p style={{ fontFamily: BODY, fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: "#5C3D24", marginBottom: "32px", maxWidth: "420px" }}>
              Le batch cooking vous permet d'avoir plusieurs repas prêts à l'avance, cuisinés directement dans votre cuisine avec des ingrédients frais. Je me déplace chez vous pour préparer des repas équilibrés et savoureux que vous n'aurez plus qu'à réchauffer.
            </p>
          </div>

          {/* Feature grid */}
          <div data-reveal style={{ ...reveal, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "32px" }}>
            {features.map(({ Icon, label }) => (
              <div key={label} style={{ background: "#EDE0C4", padding: "14px 16px", display: "flex", alignItems: "center", gap: "11px" }}>
                <Icon size={20} color="#8B5E3C" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: BODY, fontSize: "11.5px", fontWeight: 600, color: "#2A1C12", lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div data-reveal style={reveal}>
            <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "14px" }}>
              Comment ça fonctionne
            </p>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
              {steps.map((step, i) => (
                <li key={step} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: "#5C3D24", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.5 }}>
                  <span style={{ fontFamily: DISPLAY, fontSize: "18px", color: "#D4A373", lineHeight: 1, flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B5E3C", marginBottom: "10px" }}>
              Idéal pour
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px", marginBottom: "32px" }}>
              {ideal.map((item) => (
                <li key={item} style={{ fontFamily: BODY, fontSize: "13px", fontWeight: 300, color: "#5C3D24", display: "flex", alignItems: "center", gap: "8px" }}>
                  <MdCheckCircleOutline size={15} color="#8B5E3C" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <WaBtn label="Réserver une session de Batch Cooking →" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #batch-cooking > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
