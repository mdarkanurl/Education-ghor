import PageHero from "../components/PageHero";
import { IconPhoneAndroid, IconDownload, IconBolt } from "../components/Icons";

const apps = [
  {
    name: "Education Ghor App",
    platform: "Android",
    desc: "লাইভ ক্লাস, মডেল টেস্ট, বুক পিডিএফ ও র‍্যাংকিং—সবকিছু এক অ্যাপে। এখনই ডাউনলোড করে পড়াশোনা শুরু করুন।",
    available: true,
  },
  {
    name: "Education Ghor App",
    platform: "iOS (iPhone)",
    desc: "আইফোন ভার্সন খুব শীঘ্রই আসছে। লঞ্চ হওয়ার সাথে সাথেই আপনাকে জানানো হবে।",
    available: false,
  },
];

export default function Apps() {
  return (
    <>
      <PageHero title="আমাদের অ্যাপ" crumb="অ্যাপ" />
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {apps.map((app) => (
              <div key={app.platform} className="feature-card">
                <span className="feature-icon">
                  <IconPhoneAndroid size={24} />
                </span>
                <h3>
                  {app.name} — {app.platform}
                </h3>
                <p>{app.desc}</p>
                <button
                  className={`btn ${app.available ? "btn-blue" : "btn-amber"}`}
                  style={{ marginTop: 16 }}
                  disabled={!app.available}
                >
                  {app.available ? <IconDownload size={17} /> : <IconBolt size={16} />}
                  {app.available ? "ডাউনলোড করুন" : "শীঘ্রই আসছে"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
