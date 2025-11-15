import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="tittle">Services</h2>
      <div className="container">
        <div className="card">
          <div className="card-top">
            <span className="emoji">💻</span>
          </div>
          <div className="card-bottom">
            <h2>Front-end Development</h2>
            <p>
              Custom web applications built with modern frameworks and best practices.
            </p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Web Design</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <span className="emoji">🖨️</span>
          </div>
          <div className="card-bottom">
            <h2>3D-Printing</h2>
            <p>
              High-quality 3D printed prototypes, models, and custom designs.
            </p>
            <div className="tags">
              <span className="tag">Prototyping</span>
              <span className="tag">Custom Designs</span>
              <span className="tag">Models</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <span className="emoji">🎨</span>
          </div>
          <div className="card-bottom">
            <h2>Sticker Printing</h2>
            <p>
              Custom stickers and decals for branding, events, and personal use.
            </p>
            <div className="tags">
              <span className="tag">Custom Design</span>
              <span className="tag">Branding</span>
              <span className="tag">Decals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

