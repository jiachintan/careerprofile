"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand" href="#main-content" aria-label="Tan Jia Chin, home">
          <span className="brand-mark" aria-hidden="true">
            JC
          </span>
          <span className="brand-copy">
            <strong>Tan Jia Chin</strong>
            <span>Software Engineer</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/dailyping" className="header-contact">
            Daily Ping
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <a className="header-contact" href="#contact">
            Contact
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="site-shell">
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
          <Link href="/dailyping" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <span>05</span>
            Daily Ping
          </Link>
          <a href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <span>06</span>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
