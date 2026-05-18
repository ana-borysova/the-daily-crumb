import ScribbleReveal from "../components/ScribbleReveal";
import "./_visit.scss";

function VisitUs({ isVisible }) {
  return (
    <div id="visit" className="visit section">
      <div className="visit__map">
        {isVisible && (
          <ScribbleReveal
            src="/img/map.png"
            className="about__image--img"
            alt="Buidling facade"
          />
        )}
      </div>
      <div className="visit__content">
        <h1 className="heading_main_light-lg">Find Us in SoHo</h1>
        <p>
          Tucked away on Greene Street, The Daily Crumb is a cozy corner for
          slow mornings, fresh pastries, and specialty coffee in the heart of
          New York
        </p>
        <h2 className="heading__accent-md">148 Lafayette, SoHo, NYC</h2>
        <p>Open daily — 7:00 AM to 8:00 PM</p>
        <p>Fresh pastries every morning • We are Pet-friendly 🐾</p>
        <h2 className="heading__accent-md text-flicker">See you soon!</h2>
      </div>
    </div>
  );
}

export default VisitUs;
