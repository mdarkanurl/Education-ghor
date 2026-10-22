import PageHero from "../components/PageHero";
import BookCard from "../components/cards/BookCard";
import { books } from "../data/site";

export default function Books() {
  return (
    <>
      <PageHero title="আমাদের বইসমূহ" crumb="বই" />
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="section-title">সকল বই</h2>
            <div className="books-grid">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
