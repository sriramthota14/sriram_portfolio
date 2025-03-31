import { useState } from "react";
import { Code2, Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "Projects", "About", "Contact"];

  return (
    <nav className="nav">
      <div className="container nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img
            src="./src/assets/portfoliologot.png"
            alt="Sri Ram Thota Portfolio"
            className="profile-logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        {/* Profile Picture */}
        <div className="nav-profile">
          <button type="button">
            <img
              src="./src/assets/sriramthota.jpg"
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
            <Menu />
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
