import { IconUser, IconArrowRight } from "../Icons";

export default function BookCard({ book }) {
  return (
    <article className={`book-card ${book.stock ? "featured" : ""}`}>
      <div className="book-thumb">
        <span className="discount-corner">{book.discount}</span>
        <span className="popular-corner">🔥 জনপ্রিয়</span>
        <div
          className="book-cover"
          style={{ background: `linear-gradient(160deg, ${book.cover.from}, ${book.cover.to})` }}
        >
          <span className="bc-title">{book.cover.label}</span>
          {book.cover.sub && <span className="bc-sub">{book.cover.sub}</span>}
          <span className="bc-brand">Education Ghor</span>
        </div>
      </div>

      <div className="book-body">
        <span className="book-category">{book.category}</span>
        <h3 className="book-title">{book.title}</h3>

        <div className="book-author">
          <IconUser size={14} />
          {book.author}
        </div>

        <div className="book-price-row">
          <span className="price">{book.price}</span>
          <span className="old-price">{book.oldPrice}</span>
          <span className={`stock ${book.stock ? "in" : "out"}`}>
            <span className="stock-dot" />
            {book.stock ? "স্টক আছে" : "স্টক শেষ"}
          </span>
        </div>

        <button className="btn-book">বিস্তারিত দেখুন →</button>
      </div>
    </article>
  );
}
