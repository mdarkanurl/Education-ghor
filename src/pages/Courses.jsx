import PageHero from "../components/PageHero";
import CourseCard from "../components/cards/CourseCard";
import { courses } from "../data/site";

export default function Courses() {
  return (
    <>
      <PageHero title="আমাদের কোর্সসমূহ" crumb="কোর্স" />
      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="btn-center" style={{ marginTop: 0, marginBottom: 24 }}>
              <div className="tags" style={{ justifyContent: "center" }}>
                <span className="tag" style={{ background: "#2563eb", padding: "8px 18px" }}>
                  HSC 2026 Batch
                </span>
                <span className="tag" style={{ background: "#e5e7eb", color: "#374151", padding: "8px 18px" }}>
                  HSC 2027 Batch
                </span>
                <span className="tag" style={{ background: "#e5e7eb", color: "#374151", padding: "8px 18px" }}>
                  HSC 2025 Batch
                </span>
                <span className="tag" style={{ background: "#e5e7eb", color: "#374151", padding: "8px 18px" }}>
                  HSC 2024 Batch
                </span>
              </div>
            </div>

            <div className="cards-grid-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
