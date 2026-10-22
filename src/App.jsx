import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Courses from "./pages/Courses";
import Exam from "./pages/Exam";
import Books from "./pages/Books";
import EBook from "./pages/EBook";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/books" element={<Books />} />
          <Route path="/ebook" element={<EBook />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}
