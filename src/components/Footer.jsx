import { Link } from "react-router-dom";
import { footerServices, footerLinks } from "../data/site";
import {
  IconBook,
  IconFacebook,
  IconYouTube,
  IconMail,
  IconPhone,
  IconMapPin,
  IconChevronRight,
  IconShield,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-logo">
                <IconBook size={22} />
              </span>
              <span className="brand-name">
                Education
                <span>Ghor</span>
              </span>
            </div>
            <p className="footer-tagline">
              বিশ্ববিদ্যালয় ভর্তি ও চাকরির জন্য সেরা সাধারণ জ্ঞান বই ও কোর্স – সবকিছু এক
              জায়গায়!
            </p>
            <div className="socials">
              <a href="#" className="social-btn" aria-label="Facebook">
                <IconFacebook size={18} />
              </a>
              <a href="#" className="social-btn" aria-label="YouTube">
                <IconYouTube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>আমাদের সেবাসমূহ</h4>
            {footerServices.map((item) => (
              <Link key={item.label} to={item.to} className="footer-link">
                <IconChevronRight size={14} className="chev" />
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>প্রয়োজনীয় লিংক</h4>
            {footerLinks.map((item) => (
              <Link key={item.label} to={item.to} className="footer-link">
                <IconChevronRight size={14} className="chev" />
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>যোগাযোগ</h4>
            <div className="contact-item">
              <span className="contact-icon">
                <IconMail size={18} />
              </span>
              <div>
                <div className="contact-label">ইমেইল ঠিকানা</div>
                <div className="contact-value">info@educationghor.com</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <IconPhone size={18} />
              </span>
              <div>
                <div className="contact-label">ফোনেইন</div>
                <div className="contact-value">01516-555649</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <IconMapPin size={18} />
              </span>
              <div>
                <div className="contact-label">ঠিকানার ঠিকানা</div>
                <div className="contact-value">
                  277/5 Elephant Road, Newmarket, Dhaka-1205
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2023 - 2026 Education Ghor. All rights reserved. | E-Trade License:
            TRAD/DSCC/269482/2019
          </span>
          <span>
            কারিগরি সহায়তা: <a href="#">SOFT-ITBD</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
