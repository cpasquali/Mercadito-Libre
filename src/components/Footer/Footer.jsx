import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container bg-body-tertiary">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Discover top-quality products at great prices. Enjoy fast shipping
            and excellent customer service. Shop now!.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:marketify@example.com">marketify@example.com</a>
            </li>
            <li>
              <a href="tel:+1234567890">+54 307416422</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
