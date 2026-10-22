import { Link } from "react-router-dom";
import { categories } from "../../data/site";

export default function CourseCategories() {
  return (
    <div className="panel">
      <h2 className="section-title">Course Category</h2>
      <div className="cat-grid">
        {categories.map((cat) => (
          <Link key={cat.title} to="/courses" className="cat-card">
            <span className="cat-badge">{cat.badge}</span>
            <div>
              <div className="cat-title">{cat.title}</div>
              <div className="cat-sub">{cat.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
