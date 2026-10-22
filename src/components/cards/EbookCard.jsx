export default function EbookCard({ ebook }) {
  return (
    <article className="book-card">
      <div className="book-thumb">
        <span className="discount-corner">{ebook.discount}</span>
        <div
          className="book-cover"
          style={{ background: `linear-gradient(160deg, ${ebook.cover.from}, ${ebook.cover.to})` }}
        >
          <span className="bc-sub" style={{ marginTop: 0 }}>
            এডুকেশন ঘর নির্বাচিত
          </span>
          <span className="bc-title" style={{ fontSize: 15, marginTop: 4 }}>
            {ebook.cover.label}
          </span>
          <span className="bc-brand">ই-বুক • PDF</span>
        </div>
      </div>

      <div className="book-body">
        <h3 className="book-title" style={{ marginTop: 0 }}>
          {ebook.title}
        </h3>

        <div className="book-price-row">
          <span className="price">{ebook.price}</span>
          <span className="old-price">{ebook.oldPrice}</span>
        </div>

        <button className="btn-book">বিস্তারিত দেখুন →</button>
      </div>
    </article>
  );
}
