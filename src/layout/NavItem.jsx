function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="nav__link">
        {children}
      </a>
    </li>
  );
}

export default NavItem;
