import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './Footer.scss';

function Footer() {
  return (
    <section id="footer" className="footer">
      <ul className="footer-social">
        <li>
          <a
            href="https://github.com/shawnpruden"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/shawnpruden"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>

      <p className="footer-text">
        Copyright &copy; {new Date().getFullYear()} <em>Shawn Pruden</em>
      </p>
    </section>
  );
}

export default Footer;
