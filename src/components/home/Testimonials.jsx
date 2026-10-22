import { useState } from "react";
import { testimonials } from "../../data/site";
import {
  IconStar,
  IconCheckCircle,
  IconClock,
  IconArrowLeft,
  IconArrowRight,
} from "../Icons";

const PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="section">
      <div className="container">
        <span className="badge-star">⭐ Testimonials</span>

        <div className="section-head">
          <div>
            <h2>Education Ghor সম্পর্কে শিক্ষার্থীদের মতামত</h2>
            <p>আমাদের বই, LMS প্ল্যাটফর্ম ও কোর্সসমূহ ব্যবহার করা পাঠ্য ও শিক্ষার্থীদের বাস্তব অভিজ্ঞতা ও মতামত জানান।</p>
          </div>
          <div className="testi-controls">
            <span className="testi-rating">
              <IconStar size={15} style={{ color: "#f59e0b" }} /> ৮.৯/১০ সন্তুষ্টি
            </span>
            <button
              className="testi-arrow"
              aria-label="Previous"
              onClick={() => setPage((p) => (p === 0 ? pages - 1 : p - 1))}
            >
              <IconArrowLeft size={17} />
            </button>
            <button
              className="testi-arrow"
              aria-label="Next"
              onClick={() => setPage((p) => (p + 1) % pages)}
            >
              <IconArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="testi-grid">
          {visible.map((t) => (
            <div key={t.id} className="testi-card">
              <div className="testi-top">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">
                    <span className="online-dot" /> {t.role}
                  </div>
                </div>
                <span className="rating-pill">
                  <IconStar size={12} /> {t.rating}
                </span>
              </div>

              <p className="testi-text">{t.text}</p>

              <div className="testi-foot">
                {t.verified ? (
                  <span className="verified">
                    <IconCheckCircle size={15} className="check" /> ভেরিফাইড ভিজিটর
                  </span>
                ) : (
                  <span />
                )}
                <span className="testi-time">
                  <IconClock size={13} /> {t.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
