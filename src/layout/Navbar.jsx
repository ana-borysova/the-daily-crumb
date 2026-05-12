import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./_navbar.scss";
import NavList from "./NavList";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="header__navigation">
      <div className="header__navigation-logo heading_main_light-lg">
        <h1>DC</h1>
      </div>
      <div className="header__navigation-links">
        <NavList />
      </div>
      <div className="header__navigation-smallscreen">
        <GiHamburgerMenu
          fontSize={30}
          className="open-icon"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="header__navigation-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={30}
              className="close-icon"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <div className="header__navigation-smallscreen-links">
              <NavList />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
