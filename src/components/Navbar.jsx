import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IconHome, IconMenu, IconClose, IconSpeaker, IconBook } from "./Icons";

const links = [
  { to: "/", label: "HOME", home: true },
  { to: "/about", label: "ABOUT US" },
  { to: "/apps", label: "APPS" },
  { to: "/courses", label: "COURSES" },
  { to: "/exam", label: "EXAM" },
  { to: "/books", label: "BOOKS" },
  { to: "/ebook", label: "E-BOOK" },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-logo">
            <IconBook size={22} />
          </span>
          <span className="brand-name">
            Education
            <span>Ghor</span>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.home}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.home && <IconHome size={15} />}
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/login" className="btn-login" onClick={() => setOpen(false)}>
          <IconSpeaker size={16} />
          লগইন করুন
        </Link>

        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose size={24} /> : <IconMenu size={24} />}
        </button>
      </div>
    </header>
  );
}
