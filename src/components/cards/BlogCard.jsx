import { IconTag, IconClock, IconCalendar, IconEye, IconUser, IconArrowRight } from "../Icons";

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div
        className="blog-thumb"
        style={{ background: `linear-gradient(135deg, ${blog.cover.from}, ${blog.cover.to})` }}
      >
        <span className="blog-tag">
          <IconTag size={13} /> {blog.tag}
        </span>
        <span className="bt-title">{blog.title.split("(")[0]}</span>
        <span className="read-time">
          <IconClock size={12} style={{ display: "inline", verticalAlign: "-2px" }} />{" "}
          {blog.readTime}
        </span>
      </div>

      <div className="blog-meta">
        <span>
          <IconCalendar size={13} /> {blog.date}
        </span>
        <span>
          <IconEye size={13} /> {blog.views}
        </span>
      </div>

      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-excerpt">{blog.excerpt}</p>

      <div className="blog-footer">
        <span className="blog-author">
          <span className="blog-avatar">
            <IconUser size={15} />
          </span>
          Admin
        </span>
        <span className="read-more">
          পড়ুন <IconArrowRight size={14} />
        </span>
      </div>
    </article>
  );
}
