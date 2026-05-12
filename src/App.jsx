import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Hero from "./layout/Hero";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuModal from "./components/MenuModal";
import VisitUs from "./pages/VisitUs";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalSections = 4;

  const wheelRef = useRef();

  useEffect(() => {
    const wheel = wheelRef.current;

    const handleWheel = (e) => {
      if (isMenuOpen) return;
      e.preventDefault();
      const el = wheelRef.current;
      const sectionWidth = el.clientWidth;
      const currentSection = Math.round(el.scrollLeft / sectionWidth);

      if (e.deltaY > 0) {
        el.scrollTo({
          left: (currentSection + 1) * sectionWidth,
        });
      } else {
        el.scrollTo({
          left: (currentSection - 1) * sectionWidth,
        });
      }
    };

    if (wheel) {
      wheel.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      wheel.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const el = wheelRef.current;

    const handleScroll = () => {
      const sectionWidth = el.clientWidth;
      const scrollLeft = el.scrollLeft;
      const maxScroll = sectionWidth * (totalSections - 1);
      setProgress(scrollLeft / maxScroll);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="site-wrapper">
        <div className="site-card">
          <Navbar />
          <div className="progress-bar">
            <div
              className="progress-bar__fill"
              style={{ width: `${progress * 100}%` }}
            />
            <div
              className="progress-bar__dot"
              style={{ left: `${progress * 100}%` }}
            />
          </div>
          <main ref={wheelRef} className="horizontal-scroll">
            <Hero />
            <About />
            <Menu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />
            <VisitUs />
          </main>
        </div>
      </div>
      <span className="credentials">&copy; Ana Borysova 2026</span>
    </>
  );
}

export default App;
