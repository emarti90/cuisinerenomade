import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import BatchCookingSection from "../components/shared/BatchcookingSection";
import PostPartumSection from "../components/shared/PostPartumSection";
import BrunchSection from "../components/shared/BrunchSection";
import DeliverySection from "../components/shared/DeliverySection";
import CTA from "../components/shared/CTA";
import Footer from "../components/shared/Footer";

export default function LandingPage() {
  return (
    <>
      {/* Google Fonts — Licorice (display) + Montserrat (body) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Licorice&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #1A0F08;
          -webkit-font-smoothing: antialiased;
        }
        img {
          display: block;
          max-width: 100%;
        }
      `}</style>

      <Header />
      <main>
        <Hero />
        <BatchCookingSection />
        <PostPartumSection />
        <BrunchSection />
        <DeliverySection />
        <CTA/>
      </main>
      <Footer />
    </>
  );
}
