import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CourseCategories from "../components/home/CourseCategories";
import Testimonials from "../components/home/Testimonials";
import CourseCard from "../components/cards/CourseCard";
import BookCard from "../components/cards/BookCard";
import EbookCard from "../components/cards/EbookCard";
import BlogCard from "../components/cards/BlogCard";
import { courses, books, ebooks, blogs } from "../data/site";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <Stats />
          <CourseCategories />

          <div className="panel">
            <h2 className="section-title">Popular Courses</h2>
            <div className="cards-grid-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="btn-center">
              <Link to="/courses" className="btn btn-blue">
                See All Courses
              </Link>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Popular Books</h2>
            <div className="books-grid">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="btn-center">
              <Link to="/books" className="btn btn-blue">
                See All Books
              </Link>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Popular E-Books</h2>
            <div className="books-grid">
              {ebooks.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>
            <div className="btn-center">
              <Link to="/ebook" className="btn btn-blue">
                See All E-Books
              </Link>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Latest Blog &amp; Articles</h2>
            <div className="cards-grid-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="btn-center">
              <Link to="/blog" className="btn btn-blue">
                See All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
