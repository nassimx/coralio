import React from 'react';
import { Link } from 'react-router-dom';
import '../components/404.css';

const PageNotFound = () => {
  return (
    <>
      <h1 className="h1text">404 introuvable</h1>
      {/* <p className="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{' '}
      </p> */}
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Accueil
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
