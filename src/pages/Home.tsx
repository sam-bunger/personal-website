import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile-pic.webp";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__grid">
          {/* Profile Image Section */}
          <div className="home__image-section">
            <div className="home__image-wrapper">
              <img
                src={profileImage}
                alt="Sam Bunger"
                className="home__image"
              />
              <div className="home__image-accent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="home__content">
            <div className="home__intro">
              <span className="home__section-number">01</span>
              <span className="home__section-label">INTRODUCTION</span>
            </div>

            <h1 className="home__title">
              SAM
              <br />
              <span className="home__title-accent">BUNGER</span>
            </h1>

            <div className="home__divider"></div>

            <div className="home__bio">
              <p className="home__bio-text">
                Full-stack developer and game creator based in San Francisco,
                CA. I build high-performance, scalable backend systems and love
                applying that same technical rigor to game development.
              </p>
              <p className="home__bio-text">
                Experienced in TypeScript, JavaScript, C++, and Unity.
              </p>
              <p className="home__bio-text">
                Check out my{" "}
                <Link to="/projects" className="home__inline-link">
                  projects
                </Link>{" "}
                and{" "}
                <Link to="/work-experience" className="home__inline-link">
                  work experience
                </Link>
                .
              </p>
            </div>

            <div className="home__links">
              <a
                href="https://linkedin.com/in/sam-bunger"
                className="home__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN →
              </a>
              <a
                href="https://github.com/sam-bunger"
                className="home__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="home__decoration">
        <div className="home__decoration-line home__decoration-line--1"></div>
        <div className="home__decoration-line home__decoration-line--2"></div>
      </div>
    </div>
  );
};

export default Home;
