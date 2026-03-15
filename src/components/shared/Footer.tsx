import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BODY, C_ACCENT, C_PRIMARY, C_TEXT, DISPLAY, WA_LINK } from "../../lib/constants";
import { WaBtn } from "../../lib/ui";
import logo from "../../assets/cuisinerenomade_logo.svg";

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
  Acknowledgements: [
    { label: "Freepik",                   href: "#batch-cooking"  },
    { label: "Kamran Aydinov - Freepik",  href: "#brunch"         },
    { label: "rawpixel.com - Freepik",    href: "#delivery"       },
  ],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: C_PRIMARY, borderTop: "1px solid rgba(212,163,115,0.12)" }}
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
          {/* Logo mark + wordmark */}
          <div style={{ marginBottom: "22px", display: "flex", alignItems: "center", gap: "12px" }}>
            <img src={logo} alt="Cuisinère Nomade" style={{ height: "48px" }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: BODY,
                  fontSize: "16px",
                  fontWeight: 400,
                  color: C_TEXT,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Cuisinère
              </div>
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "48px",
                  fontWeight: 600,
                  color: C_ACCENT,
                  marginTop: "5px",
                }}
              >
                Nomade
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: C_TEXT,
              maxWidth: "250px",
              marginBottom: "18px",
            }}
          >
            Cuisine à domicile, chef privé et livraison de repas — des produits de saison
            préparés avec âme.
          </p>
          {/* Location with icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MdLocationOn size={15} color={C_ACCENT} style={{ flexShrink: 0 }} />
            <p style={{ fontFamily: BODY, fontSize: "11px", fontWeight: 400, color: C_TEXT }}>
              Carcassone, France
            </p>
          </div>
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
                color: C_ACCENT,
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
                      color: C_TEXT,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C_ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C_TEXT)}
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
              color: C_ACCENT,
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
              color: C_TEXT,
              marginBottom: "14px",
            }}
          >
            Prête à transformer votre façon de manger à la maison ?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: BODY,
              fontSize: "12px",
              fontWeight: 400,
              color: C_TEXT,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C_ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C_TEXT)}
          >
            <FaInstagram size={13} color={C_ACCENT} />
            @cuisinerenomade.elequilibrio
          </a>
          <div style={{ marginTop: "22px" }}>
            <WaBtn label="Réserver via WhatsApp →" dark />
          </div>
        </div>
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