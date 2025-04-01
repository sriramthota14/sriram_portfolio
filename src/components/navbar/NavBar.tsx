import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "Projects", "About", "Contact", "Resume"];

  const menuItemDisplay = menuItems.map((item) => {
    if (item.toLocaleLowerCase() === "home") {
      return (
        <Link to="/" key={item}>
          {item}
        </Link>
      );
    }
    return (
      <Link to={`/${item.toLocaleLowerCase()}`} key={item}>
        {item}
      </Link>
    );
  });

  return (
    <nav className="nav">
      <div className="container nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img
              src="/images/portfoliologot.png"
              alt="Sri Ram Thota Portfolio"
              className="profile-logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">{menuItemDisplay}</div>

        {/* Profile Picture */}
        <div className="nav-profile">
          <button type="button">
            <img
              src="/images/sriramthota.jpg"
              alt="Profile"
              className="profile-img"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu>{menuItemDisplay}</Menu>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
      >
        {menuItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
