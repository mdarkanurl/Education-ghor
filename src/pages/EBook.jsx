import PageHero from "../components/PageHero";
import EbookCard from "../components/cards/EbookCard";
import { ebooks } from "../data/site";

export default function EBook() {
  return (
    <>
      <PageHero title="আমাদের ই-বুকসমূহ" crumb="ই-বুক" />
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="section-title">সকল ই-বুক (PDF)</h2>
            <div className="books-grid">
              {ebooks.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
