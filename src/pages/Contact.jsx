import { useState } from "react";
import PageHero from "../components/PageHero";
import { IconMail, IconPhone, IconMapPin } from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero title="যোগাযোগ" crumb="যোগাযোগ" />
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h2 className="section-title" style={{ textAlign: "left", fontSize: 24 }}>
                আমাদের সাথে যোগাযোগ করুন
              </h2>
              <p className="content-text" style={{ fontSize: 14.5 }}>
                কোর্স, বই বা অর্ডার সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের লিখুন—আমরা দ্রুত
                উত্তর দেওয়ার চেষ্টা করব।
              </p>

              <div style={{ marginTop: 22 }}>
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
                    <div className="contact-label">ফোন</div>
                    <div className="contact-value">01516-555649</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <IconMapPin size={18} />
                  </span>
                  <div>
                    <div className="contact-label">ঠিকানা</div>
                    <div className="contact-value">
                      277/5 Elephant Road, Newmarket, Dhaka-1205
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>আপনার নাম</label>
                  <input type="text" placeholder="পূর্ণ নাম লিখুন" required />
                </div>
                <div className="form-group">
                  <label>মোবাইল নম্বর</label>
                  <input type="tel" placeholder="01XXXXXXXXX" required />
                </div>
                <div className="form-group full">
                  <label>ইমেইল</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group full">
                  <label>বিষয়</label>
                  <input type="text" placeholder="কী বিষয়ে জানতে চান?" required />
                </div>
                <div className="form-group full">
                  <label>বার্তা</label>
                  <textarea rows={5} placeholder="আপনার বার্তা লিখুন..." required />
                </div>
                <div className="form-group full">
                  <button type="submit" className="btn btn-blue btn-block">
                    বার্তা পাঠান
                  </button>
                  {sent && <p className="form-note">✅ আপনার বার্তা পাঠানো হয়েছে! ধন্যবাদ।</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
