import PageHero from "../components/PageHero";
import BlogCard from "../components/cards/BlogCard";
import { blogs } from "../data/site";

export default function Blog() {
  return (
    <>
      <PageHero title="ব্লগ ও আর্টিকেল" crumb="ব্লগ" />
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="section-title">সর্বশেষ ব্লগ ও আর্টিকেল</h2>
            <div className="cards-grid-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
