import React from "react";
import bgImage from "../assets/bg.png";
import mainPuzzleImage from "../assets/Frame 1.png";   
import floatingPiece from "../assets/jigsaw.png";       
import arrowImage from "../assets/arrow.png";

const Hero = () => {
  const batches = [
    { id: 1, price: "$4,000", active: false },
    { id: 2, price: "$4,250", active: false },
    { id: 3, price: "$4,500", active: false },
    { id: 4, price: "$4,750", active: true  },
    { id: 5, price: "$5,000", active: false },
    { id: 6, price: "$5,250", active: false },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          min-height: 100vh;
          width: 100%;
          background: #0b0f18;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 860px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11,15,24,0.60) 0%,
            rgba(11,15,24,0.50) 35%,
            rgba(11,15,24,0.72) 65%,
            rgba(11,15,24,1.00) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-top: 110px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-headline {
          text-align: center;
          font-size: clamp(40px, 5.2vw, 68px);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 18px;
        }

        .hero-headline .accent {
          color: #f97316;
          font-style: italic;
        }

        .hero-subtext {
          text-align: center;
          color: rgba(255,255,255,0.65);
          font-size: 15px;
          font-weight: 400;
          max-width: 450px;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        .hero-cta {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 38px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.3px;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 6px 28px rgba(249,115,22,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
          margin-bottom: 52px;
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(249,115,22,0.65);
        }

        .visual-block {
          width: 100%;
          max-width: 1120px;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 300px;
          align-items: flex-end;
          gap: 0;
        }

        .puzzle-wrap {
          position: relative;
          width: 100%;
        }

        .puzzle-main-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 18px;
          object-fit: cover;
        }

        .floating-piece {
          position: absolute;
          bottom: -20px;
          left: 44%;
          transform: translateX(-50%);
          width: 155px;
          filter: drop-shadow(0 12px 32px rgba(0,0,0,0.75));
          animation: floatY 4s ease-in-out infinite;
          z-index: 8;
          pointer-events: none;
        }

        .arrow-img {
          position: absolute;
          right: -70px;
          bottom: 28%;
          width: 140px;
          z-index: 7;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
          pointer-events: none;
        }

        .info-panel {
          padding-left: 92px;
          padding-bottom: 28px;
        }

        .info-heading {
          color: #ffffff;
          font-size: clamp(24px, 2.6vw, 40px);
          font-weight: 900;
          line-height: 1.13;
          letter-spacing: -0.5px;
        }

        .info-heading .orange { color: #f97316; }

        .stats-card {
          margin-top: 22px;
          background: rgba(17,23,38,0.95);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 14px 18px 16px;
          width: 220px;
          backdrop-filter: blur(16px);
        }

        .stats-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .stats-logo {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #fff;
          font-weight: 900;
          flex-shrink: 0;
        }

        .stats-label {
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          font-weight: 500;
        }

        .stats-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stats-value {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .stats-badge {
          color: #22c55e;
          font-size: 11.5px;
          font-weight: 700;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          padding: 2px 8px;
          border-radius: 20px;
        }

        .price-section {
          width: 100%;
          padding: 48px 40px 60px;
        }

        .price-card {
          background: rgba(14,20,33,0.97);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 30px 32px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .price-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 26px;
        }

        .price-title {
          color: #f97316;
          font-size: 17px;
          font-weight: 700;
        }

        .badge-row { display: flex; gap: 10px; }

        .badge-soldout {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 11.5px;
          font-weight: 600;
        }

        .badge-active {
          background: rgba(34,197,94,0.1);
          color: #22c55e;
          border: 1px solid rgba(34,197,94,0.28);
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 11.5px;
          font-weight: 600;
        }

        .batch-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .batch-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 16px 16px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }

        .batch-item.active {
          background: rgba(249,115,22,0.06);
          border: 1.5px solid #f97316;
        }

        .batch-label {
          color: rgba(255,255,255,0.45);
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .batch-price {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        .batch-item.active .batch-price { color: #f97316; }

        @keyframes floatY {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-12px); }
        }
      `}</style>

      <div className="hero-root">

        <section className="hero-section">
          <div className="hero-bg" />
          <div className="hero-overlay" />

          <div className="hero-content">

            <h1 className="hero-headline">
              Discover <span className="accent">high-growth</span>
              <br />
              property investments
            </h1>

            <p className="hero-subtext">
              Join the CEG Equity Token batch. Start building your portfolio
              with fractional ownership of global assets.
            </p>

            <button className="hero-cta">Start Earning Now &nbsp;→</button>

            <div className="visual-block">

              <div className="puzzle-wrap">
                <img
                  src={mainPuzzleImage}
                  alt="Luxury property"
                  className="puzzle-main-img"
                />
                <img
                  src={floatingPiece}
                  alt="Puzzle piece"
                  className="floating-piece"
                />
                <img
                  src={arrowImage}
                  alt="Arrow"
                  className="arrow-img"
                />
              </div>

              <div className="info-panel">
                <h2 className="info-heading">
                  Access<br />
                  premium<br />
                  property<br />
                  ownership<br />
                  <span className="orange">for $150</span>
                </h2>

                <div className="stats-card">
                  <div className="stats-header">
                    <div className="stats-logo">₢</div>
                    <span className="stats-label">All Time Returns</span>
                  </div>
                  <div className="stats-row">
                    <span className="stats-value">AED 165,000</span>
                    <span className="stats-badge">+111%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="price-section">
          <div className="price-card">

            <div className="price-header">
              <span className="price-title">Price Progression (200 Tokens)</span>
              <div className="badge-row">
                <span className="badge-soldout">SOLD OUT 1-3</span>
                <span className="badge-active">ACTIVE 4</span>
              </div>
            </div>

            <div className="batch-grid">
              {batches.map((b) => (
                <div key={b.id} className={`batch-item${b.active ? " active" : ""}`}>
                  <div className="batch-label">Batch {b.id}</div>
                  <div className="batch-price">{b.price}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;