import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { IconPhoneAndroid, IconLock, IconBook } from "../components/Icons";

export default function Login() {
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHero title="লগইন করুন" crumb="লগইন" />
      <section className="section">
        <div className="container">
          <div className="auth-card">
            <h2>স্বাগতম! 👋</h2>
            <p className="auth-sub">আপনার অ্যাকাউন্টে লগইন করে কোর্স ও বই দেখুন</p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
              <div className="form-group">
                <label>মোবাইল নম্বর</label>
                <input type="tel" placeholder="01XXXXXXXXX" required />
              </div>
              <div className="form-group">
                <label>পাসওয়ার্ড</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn btn-blue btn-block">
                <IconPhoneAndroid size={17} /> লগইন করুন
              </button>
              {done && (
                <p className="form-note" style={{ textAlign: "center" }}>
                  ✅ ডেমো লগইন সফল! (আসল সিস্টেমে এটি আপনাকে ড্যাশবোর্ডে নিয়ে যাবে)
                </p>
              )}
            </form>

            <p className="auth-alt">
              নতুন ব্যবহারকারী? <Link to="/contact">রেজিস্টার করুন</Link>
            </p>
            <p className="auth-alt" style={{ marginTop: 6, display: "flex", justifyContent: "center", gap: 6, alignItems: "center" }}>
              <IconLock size={14} /> আপনার তথ্য সম্পূর্ণ নিরাপদ
              <IconBook size={14} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
