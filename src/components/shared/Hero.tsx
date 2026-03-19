import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BODY, C_ACCENT, C_PRIMARY, C_TEXT, DISPLAY, WA_LINK } from "../../lib/constants";

export default function Hero() {
  const h1  = useRef<HTMLHeadingElement>(null);
  const sub = useRef<HTMLParagraphElement>(null);
  const cta = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [h1, sub, cta].forEach((r, i) => {
      if (!r.current) return;
      r.current.style.opacity = "0";
      r.current.style.transform = "translateY(32px)";
      setTimeout(() => {
        if (!r.current) return;
        r.current.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        r.current.style.opacity = "1";
        r.current.style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: C_PRIMARY,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.38,
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg,rgba(26,15,8,0.92) 0%,rgba(26,15,8,0.65) 55%,rgba(26,15,8,0.2) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to top,#1A0F08,transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 32px 80px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: C_ACCENT }} />
          <span
            style={{
              fontFamily: BODY,
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: C_ACCENT,
            }}
          >
            Chef à domicile · Livraison · Castelnaudary
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={h1}
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(72px,10vw,130px)",
            fontWeight: 400,
            lineHeight: 0.95,
            color: C_TEXT,
            maxWidth: "860px",
            margin: "0 0 32px",
          }}
        >
          La vraie cuisine
          <br />
          <em style={{ color: C_ACCENT }}>chez toi.</em>
        </h1>

        {/* Subline */}
        <p
          ref={sub}
          style={{
            fontFamily: BODY,
            fontSize: "clamp(13px,1.5vw,16px)",
            fontWeight: 300,
            lineHeight: 1.85,
            color: C_TEXT,
            maxWidth: "500px",
            margin: "0 0 52px",
          }}
        >
          Batch cooking hebdomadaire, accompagnement post-partum, brunches maison
          et pokés livrés — tout préparé avec des produits de saison et un vrai soin.
        </p>

        {/* CTAs */}
        <div ref={cta} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#batch-cooking"
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C_PRIMARY,
              background: C_ACCENT,
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C_ACCENT;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C_ACCENT;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Découvrir les services
          </a>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: BODY,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C_TEXT,
              background: "transparent",
              border: "1px solid rgba(212,163,115,0.5)",
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C_ACCENT;
              e.currentTarget.style.color = C_ACCENT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,163,115,0.5)";
              e.currentTarget.style.color = C_TEXT;
            }}
          >
            <FaWhatsapp size={14} /> Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}