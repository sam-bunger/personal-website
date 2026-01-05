import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VXNLogo } from "../components/VxnLogo";
import gameLogos from "../assets/vxn/gameLogos.webp";
import speakeasy from "../assets/vxn/speakeasy.png";
import phonicFrenzy from "../assets/vxn/phonicFrenzy.png";
import drawnOut from "../assets/vxn/drawnOut.png";
import speakeasyPhone from "../assets/vxn/speakeasyPhone.png";
import mutterNonsense from "../assets/vxn/mutterNonsense.png";

const VxnProducts: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="vxn-products">
      <div className="vxn-products__container container">
        <Link to="/projects" className="vxn-products__back-button">
          ← BACK TO PROJECTS
        </Link>

        <div className="vxn-products__header">
          <div className="vxn-products__logo-container">
            <VXNLogo />
          </div>

          <div className="vxn-products__intro">
            <span className="vxn-products__section-number">04</span>
            <span className="vxn-products__section-label">VXN GAMES</span>
          </div>

          <h1 className="vxn-products__title">PRODUCTS</h1>

          <div className="vxn-products__divider"></div>

          <p className="vxn-products__description">
            A website where players could play phone connected party games
            similar to Jackbox TV. A total of 4 games were released all with
            their own unique mechanics and styles.
          </p>
        </div>

        <div className="vxn-products__gallery">
          {/* Featured game logos banner */}
          <div className="vxn-products__gallery-item vxn-products__gallery-item--wide">
            <img
              src={gameLogos}
              alt="VXN Game Logos"
              className="vxn-products__gallery-image"
              onClick={() => openModal(gameLogos, "VXN Game Logos")}
            />
          </div>

          {/* Landscape game screenshots */}
          <div className="vxn-products__gallery-item vxn-products__gallery-item--landscape">
            <img
              src={speakeasy}
              alt="Speakeasy Game"
              className="vxn-products__gallery-image"
              onClick={() => openModal(speakeasy, "Speakeasy Game")}
            />
          </div>

          <div className="vxn-products__gallery-item vxn-products__gallery-item--landscape">
            <img
              src={drawnOut}
              alt="Drawn Out Game"
              className="vxn-products__gallery-image"
              onClick={() => openModal(drawnOut, "Drawn Out Game")}
            />
          </div>

          {/* Extra wide screenshot */}
          <div className="vxn-products__gallery-item vxn-products__gallery-item--landscape">
            <img
              src={phonicFrenzy}
              alt="Phonic Frenzy Game"
              className="vxn-products__gallery-image"
              onClick={() => openModal(phonicFrenzy, "Phonic Frenzy Game")}
            />
          </div>

          {/* Portrait phone screenshots */}
          <div className="vxn-products__gallery-item vxn-products__gallery-item--portrait">
            <img
              src={speakeasyPhone}
              alt="Speakeasy Phone View"
              className="vxn-products__gallery-image"
              onClick={() => openModal(speakeasyPhone, "Speakeasy Phone View")}
            />
          </div>

          <div className="vxn-products__gallery-item vxn-products__gallery-item--portrait">
            <img
              src={mutterNonsense}
              alt="Mutter Nonsense Game"
              className="vxn-products__gallery-image"
              onClick={() => openModal(mutterNonsense, "Mutter Nonsense Game")}
            />
          </div>
        </div>

        <div className="vxn-products__footer">
          <div className="vxn-products__footer-line"></div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="image-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="image-modal__close" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="image-modal__image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VxnProducts;
