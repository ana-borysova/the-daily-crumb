import NavItem from "./NavItem";

function NavList() {
  return (
    <ul>
      <NavItem href="#home">Welcome</NavItem>
      <NavItem href="#about">Story</NavItem>
      <NavItem href="#menu">Menu</NavItem>
      <NavItem href="#visit">Visit Us</NavItem>
    </ul>
  );
}

export default NavList;
