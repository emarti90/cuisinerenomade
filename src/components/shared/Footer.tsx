import { FaWhatsapp } from "react-icons/fa";
import { BODY, DISPLAY, WA_LINK } from "../../lib/constants";
import { WaBtn } from "../../lib/ui";

interface NavItem {
  label: string;
  href: string;
  ext?: boolean;
}

const nav: Record<string, NavItem[]> = {
  Services: [
    { label: "Batch Cooking",     href: "#batch-cooking" },
    { label: "Post Partum",       href: "#post-partum"   },
    { label: "Brunch & Café",     href: "#brunch"        },
    { label: "Pokés & Livraison", href: "#delivery"      },
  ],
  Infos: [
    { label: "À propos",          href: "#"              },
    { label: "Comment ça marche", href: "#"              },
    { label: "FAQ",               href: "#"              },
    { label: "WhatsApp",          href: WA_LINK, ext: true },
  ],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#0D0703", borderTop: "1px solid rgba(212,163,115,0.12)" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "68px 32px 52px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "52px",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "18px" }}>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: "28px",
                fontWeight: 400,
                color: "#F5E6C8",
                lineHeight: 1,
              }}
            >
              La Cuina
            </div>
            <div
              style={{
                fontFamily: BODY,
                fontSize: "8px",
                fontWeight: 600,
                color: "#D4A373",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginTop: "5px",
              }}
            >
              de sempre
            </div>
          </div>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#6B4F35",
              maxWidth: "250px",
              marginBottom: "18px",
            }}
          >
            Cuisine à domicile, chef privé et livraison de repas — des produits de saison
            préparés avec âme.
          </p>
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#4A3022" }}>
            📍 Barcelone, Catalogne
          </p>
        </div>

        {/* Nav columns */}
        {Object.entries(nav).map(([title, items]) => (
          <div key={title}>
            <h4
              style={{
                fontFamily: BODY,
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#D4A373",
                marginBottom: "16px",
              }}
            >
              {title}
            </h4>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.ext ? "_blank" : undefined}
                    rel={item.ext ? "noreferrer" : undefined}
                    style={{
                      fontFamily: BODY,
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#6B4F35",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A373")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4F35")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4
            style={{
              fontFamily: BODY,
              fontSize: "8.5px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#D4A373",
              marginBottom: "16px",
            }}
          >
            Nous Contacter
          </h4>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#6B4F35",
              marginBottom: "14px",
            }}
          >
            Prête à transformer votre façon de manger à la maison ?
          </p>
          <a
            href="mailto:hola@lacuina.es"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 400,
              color: "#C8B08A",
              textDecoration: "none",
              display: "block",
              marginBottom: "8px",
            }}
          >
            hola@lacuina.es
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 400,
              color: "#6B4F35",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A373")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4F35")}
          >
            <FaWhatsapp size={13} color="#D4A373" />
            WhatsApp direct
          </a>
          <div style={{ marginTop: "22px" }}>
            <WaBtn label="Réserver via WhatsApp →" dark />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(212,163,115,0.08)",
          padding: "16px 32px",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 300, color: "#3A2518" }}>
          © {new Date().getFullYear()} La Cuina de Sempre. Tous droits réservés.
        </p>
        <p style={{ fontFamily: BODY, fontSize: "10px", fontWeight: 300, color: "#3A2518" }}>
          Fait avec soin · Barcelone
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
