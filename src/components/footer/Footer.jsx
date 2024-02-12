/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yuvaraj</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/mr_01111001/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yuvaraj-t-708141169/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/yuvaraj2511"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Yuvaraj. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
