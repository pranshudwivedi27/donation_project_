import React from 'react';
import { NAV_ITEMS } from '../data';

function Footer({ onNavigate, onDonate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col brand">
          <div className="footer-logo">
            <div className="logo-mark small">
              <img src="/AandH_Logo.jpeg" alt="AANDH Foundation logo" />
            </div>
            <div>
              <div className="logo-title">AANDH</div>
              <div className="logo-sub">Foundation</div>
            </div>
          </div>
          <p>
            A grassroots non-profit working on education, health, women
            empowerment, food and environment.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <button className="link" onClick={() => onNavigate(n.id)}>
                  {n.label}
                </button>
              </li>
            ))}
            <li>
              <button className="link" onClick={onDonate}>
                Donate Now
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <p>hello@aandhfoundation.org</p>
          <p>+91 90000 00000</p>
          <p>Hyderabad, India</p>
        </div>

        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="socials">
            <a href="#!" aria-label="Facebook" className="social">f</a>
            <a href="#!" aria-label="Instagram" className="social">◎</a>
            <a href="#!" aria-label="Twitter" className="social">𝕏</a>
            <a href="#!" aria-label="YouTube" className="social">▶</a>
            <a href="#!" aria-label="LinkedIn" className="social">in</a>
          </div>
          <p className="muted small">
            Registered 12A / 80G non-profit. Donations are tax-deductible.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AANDH Foundation. All rights reserved.</span>
        <span>Made with ♥ for a better tomorrow.</span>
      </div>
    </footer>
  );
}

export default Footer;
