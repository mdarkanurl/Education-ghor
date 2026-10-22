import { Link } from "react-router-dom";
import { IconArrowRight } from "../Icons";

const heroBooks = [
  { title: "মৌলিক TEST", sub: "Best Opportunity for Self Study", from: "#15803d", to: "#22c55e" },
  { title: "Education Ghor GK", sub: "English Version", from: "#b91c1c", to: "#dc2626" },
  { title: "এডুকেশন ঘর GK", sub: "সম্পূর্ণ কোর্স", from: "#166534", to: "#15803d" },
  { title: "মৌলিক GK", sub: "সাধারণ জ্ঞান", from: "#1d4ed8", to: "#3b82f6" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Welcome to Education Ghor</h1>
          <p>
            স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তির প্রস্তুতি এখন আরও সহজ! সাধারণ জ্ঞানের কোর্স,
            এগ্জাম ব্যাচ ও ই-বুক–সব এক জায়গায়, ছাঁচনো প্রস্তুতির জন্য। 📚 আগ্রহবিসের সাথে
            শুরু করুন আজই!
          </p>
          <div className="hero-btns">
            <Link to="/exam" className="btn btn-blue">
              Take Exam <IconArrowRight size={18} />
            </Link>
            <Link to="/courses" className="btn btn-orange">
              Courses <IconArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-books">
          {heroBooks.map((book) => (
            <div
              key={book.title + book.sub}
              className="book-cover hero-book"
              style={{ background: `linear-gradient(160deg, ${book.from}, ${book.to})` }}
            >
              <span className="bc-title">{book.title}</span>
              <span className="bc-sub">{book.sub}</span>
              <span className="bc-brand">Education Ghor</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
