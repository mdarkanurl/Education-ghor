import PageHero from "../components/PageHero";
import { exams } from "../data/site";
import { IconQuestion, IconClock, IconArrowRight } from "../components/Icons";

export default function Exam() {
  return (
    <>
      <PageHero title="অনলাইন এগ্জাম" crumb="এগ্জাম" />
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="section-title">ফ্রি অনলাইন মডেল টেস্ট</h2>
            <div className="exam-grid">
              {exams.map((exam) => (
                <div key={exam.id} className="exam-card" style={{ "--exam-color": exam.color }}>
                  <h3>{exam.title}</h3>
                  <div className="exam-meta">
                    <span>📝 {exam.questions}</span>
                    <span>
                      <IconClock size={14} style={{ display: "inline", verticalAlign: "-2px" }} />{" "}
                      {exam.duration}
                    </span>
                  </div>
                  <button className="btn btn-blue btn-block">
                    <IconQuestion size={16} /> এগ্জাম দিন
                  </button>
                </div>
              ))}
            </div>
            <div className="btn-center">
              <button className="btn btn-amber">
                সকল এগ্জাম দেখুন <IconArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
