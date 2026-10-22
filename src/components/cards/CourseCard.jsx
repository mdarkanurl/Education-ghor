import { IconPlay, IconFolder, IconArrowRight, IconStar } from "../Icons";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <span className="new-badge">⚡ নতুন কোর্স</span>

      <div
        className={`course-thumb ${course.thumb.dark ? "dark-text" : ""}`}
        style={{
          background: `linear-gradient(135deg, ${course.thumb.from}, ${course.thumb.to})`,
        }}
      >
        <span className="ct-label">{course.thumb.label}</span>
        <span className="play-btn">
          <IconPlay size={22} />
        </span>
      </div>

      <div className="course-body">
        <h3 className="course-title">{course.title}</h3>

        <div className="course-cat">
          <IconFolder size={15} />
          {course.category}
        </div>

        <div className="price-row">
          <span className="price">{course.price}</span>
          {course.oldPrice && <span className="old-price">{course.oldPrice}</span>}
          {course.discount && <span className="discount">{course.discount}</span>}
        </div>

        <div className="enroll-row">
          <span className="stars">
            {Array.from({ length: course.rating }).map((_, i) => (
              <IconStar key={i} size={13} style={{ display: "inline" }} />
            ))}
          </span>
          <span>👥 {course.enrolled}</span>
        </div>

        <button className="btn-detail">
          <IconArrowRight size={17} /> বিস্তারিত দেখুন
        </button>
      </div>
    </article>
  );
}
