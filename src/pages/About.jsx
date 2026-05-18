import "./_about.scss";
import { CiCoffeeCup } from "react-icons/ci";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { LuCroissant } from "react-icons/lu";
import ScribbleReveal from "../components/ScribbleReveal";

function About({ isVisible }) {
  return (
    <div className="about section" id="about">
      <div className="about__marquee">
        <div className="about__marquee--track">
          <span>
            Since 1995 · Since 1995 · Since 1995 · Since 1995 · Since 1995
            ·{" "}
          </span>
          <span>
            Since 1995 · Since 1995 · Since 1995 · Since 1995 · Since 1995
            ·{" "}
          </span>
        </div>
      </div>

      <div className="about__image">
        {isVisible && (
          <ScribbleReveal
            src="/img/facade.png"
            className="about__image--img"
            alt="Buidling facade"
          />
        )}
      </div>
      <div className="about__content">
        <div className="about__content__heading">
          <h2 className="heading_sub_light-md">
            Where every bean tells a story and every record plays a<br />
            <span className="heading_main_light-lg about__content__heading--accent">
              memory
            </span>
          </h2>
        </div>

        <p className="text_size-lg">It all began with a simple belief:</p>
        <h4>
          Every New York morning should start with a perfect 'crumb' of joy.
        </h4>
        <p className="text_size-lg">
          Now, The Daily Crumb has become a sanctuary where the scent of freshly
          baked goods blends with the soul of classic jazz. More than just a
          coffee shop, we offer a place to breathe and pause in the heart of the
          city that never sleeps
        </p>

        <a href="#menu" className="btn btn-sketch text-flicker" type="button">
          View menu &rarr;
          <svg className="btn-sketch__circle" viewBox="0 0 100 40">
            <ellipse cx="50" cy="21" rx="48" ry="18" />
          </svg>
        </a>
        <a href="#visit" className="btn btn-sketch text-flicker" type="button">
          Find us &rarr;
          <svg className="btn-sketch__circle" viewBox="0 0 100 40">
            <ellipse cx="50" cy="21" rx="48" ry="18" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
