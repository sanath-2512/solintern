import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const navLinks = ["Properties", "Digital Assets", "Stake & Earn"];

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 48px",
        background: "transparent",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
       
        <div
          style={{
            width: "32px",
            height: "32px",
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "900",
            color: "white",
            fontSize: "16px",
            fontFamily: "'Georgia', serif",
            letterSpacing: "-1px",
          }}
        >
          ₢
        </div>
        <span
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "700",
            fontFamily: "'Segoe UI', sans-serif",
            letterSpacing: "0.3px",
          }}
        >
          Stake
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setActive(link)}
            onMouseLeave={() => setActive(null)}
            style={{
              color: active === link ? "#f97316" : "rgba(255,255,255,0.9)",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              fontFamily: "'Segoe UI', sans-serif",
              transition: "color 0.2s ease",
              letterSpacing: "0.2px",
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <a
          href="#"
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "14px",
            fontWeight: "500",
            textDecoration: "none",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          Login
        </a>
        <button
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
            color: "white",
            border: "none",
            borderRadius: "24px",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            fontFamily: "'Segoe UI', sans-serif",
            letterSpacing: "0.2px",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.9";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;