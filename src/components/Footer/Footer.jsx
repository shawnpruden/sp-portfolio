import React from 'react';

import './Footer.scss';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <section id="footer" className="footer">
      <ul className="footer-social">
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <FaTwitterSquare />
          </a>
        </li>
      </ul>
      <p className="footer-text">
        Copyright &copy; 2022 <span>Shawn Pruden</span>
      </p>
    </section>
  );
}

export default Footer;
