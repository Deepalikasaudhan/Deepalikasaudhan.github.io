import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Name */}
        <div className="footer-brand">
          <h1>Deepali's Portfolio</h1>
         
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
         
          <a href="https://x.com/DeepaliKas12364" className="social-icon"><FaTwitter /></a>
          <a href="https://www.instagram.com/deepali23_10/" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/deepali-kasaudhan-86786327a/" className="social-icon"><FaLinkedinIn /></a>
        </div>

        {/* Thank You Message */}
        <div className="footer-thankyou">
          <p>Thanks for visiting! See you again soon. 🚀</p>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Deepali Kasaudhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
