import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <div className="header__container container">
          <Link to="/" className="header__logo">
            <span className="header__logo-text">SAM BUNGER</span>
          </Link>

          <nav className="header__nav">
            <Link
              to="/"
              className={`header__nav-link ${
                location.pathname === "/" ? "header__nav-link--active" : ""
              }`}
            >
              <span className="header__nav-number">01</span>
              HOME
            </Link>
            <Link
              to="/projects"
              className={`header__nav-link ${
                location.pathname === "/projects"
                  ? "header__nav-link--active"
                  : ""
              }`}
            >
              <span className="header__nav-number">02</span>
              PROJECTS
            </Link>
            <Link
              to="/work-experience"
              className={`header__nav-link ${
                location.pathname === "/work-experience"
                  ? "header__nav-link--active"
                  : ""
              }`}
            >
              <span className="header__nav-number">03</span>
              WORK EXPERIENCE
            </Link>
          </nav>
        </div>
        <div className="header__line"></div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="footer__line"></div>
        <div className="footer__container container">
          <span className="footer__copyright">
            © {new Date().getFullYear()}
          </span>
          <span className="footer__name">SAM BUNGER</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
