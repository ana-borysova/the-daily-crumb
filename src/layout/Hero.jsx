import ScribbleReveal from "../components/ScribbleReveal";
import "./_hero.scss";

function Header() {
  return (
    <header id="home" className="hero section">
      <div className="hero__content">
        <span className="hero__eyebrow heading_sub_light-sm">Welcome to</span>
        <h1 className="heading_main_light-lg">The Daily Crumb</h1>
        <p className="p_btm_lg text_size-lg">
          Your comfy New York morning starts here. Freshly made pancakes,
          specialty coffee, and an atmosphere that inspires. We bring crumbs of
          joy to the heart of the big city.
        </p>

        <h2 className="heading_sub_light-md">
          Find your perfect
          <span className="heading_main_light-lg crumb">crumb</span>
        </h2>
        <div className="hero__content__btn">
          <a href="#about" className="btn-sketch text-flicker">
            See our Story &rarr;
            <svg className="btn-sketch__circle" viewBox="0 0 100 40">
              <ellipse cx="50" cy="21" rx="48" ry="18" />
            </svg>
          </a>
          <a href="#menu" className="btn-sketch text-flicker">
            Explore our menu &rarr;
            <svg className="btn-sketch__circle" viewBox="0 0 100 40">
              <ellipse cx="50" cy="20" rx="55" ry="19" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero__image">
        <ScribbleReveal
          src="/img/hero.png"
          alt="Pancakes"
          className="hero__image-img"
        />
      </div>
    </header>
  );
}

export default Header;
