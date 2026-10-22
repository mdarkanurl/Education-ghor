import PageHero from "../components/PageHero";
import Stats from "../components/home/Stats";
import { IconBook, IconUsers, IconExam } from "../components/Icons";

const features = [
  {
    icon: IconBook,
    title: "সেরা সাধারণ জ্ঞান বই",
    desc: "বিশ্ববিদ্যালয় ভর্তি ও চাকরির প্রস্তুতির জন্য এডুকেশন ঘরের সাধারণ জ্ঞান বই ও ই-বুক।",
  },
  {
    icon: IconExam,
    title: "লাইভ ও রেকর্ডেড কোর্স",
    desc: "অভিজ্ঞ শিক্ষকদের লাইভ ক্লাস, রেকর্ডেড ভিডিও, বোর্ড পিডিএফ ও রেগুলার মডেল টেস্ট।",
  },
  {
    icon: IconUsers,
    title: "৩০,০০০+ শিক্ষার্থীর বিশ্বাস",
    desc: "দেশজুড়ে ৩০,০০০+ শিক্ষার্থী আমাদের কোর্স ও বই নিয়ে সফলভাবে ভর্তি পরীক্ষার প্রস্তুতি নিচ্ছেন।",
  },
];

export default function About() {
  return (
    <>
      <PageHero title="আমাদের সম্পর্কে" crumb="আমাদের সম্পর্কে" />
      <section className="section">
        <div className="container">
          <Stats />

          <div className="panel">
            <h2 className="section-title">Education Ghor কী?</h2>
            <p className="content-text">
              Education Ghor বিশ্ববিদ্যালয় ভর্তি ও চাকরির প্রস্তুতির জন্য একটি সম্পূর্ণ
              প্ল্যাটফর্ম। আমাদের সাধারণ জ্ঞানের বই, ই-বুক, লাইভ কোর্স, এগ্জাম ব্যাচ ও
              ফ্রি মডেল টেস্ট—সবকিছু এক জায়গায় পাওয়া যায়।
              অভিজ্ঞতাসম্পন্ন শিক্ষকদের নির্দেশনায় প্রতিদিন হাজারো শিক্ষার্থী নিজেদের
              পছন্দের বিশ্ববিদ্যালয়ে ভর্তি হচ্ছেন। আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে
              সাশ্রয়ী মূল্যে মানসম্মত প্রস্তুতি দেওয়া।
            </p>
          </div>

          <div className="feature-grid">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="feature-card">
                  <span className="feature-icon">
                    <Icon size={24} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
