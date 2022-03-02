import "./Footer.css";
import logo from "../assets/images/logo.png";
import youtube from "../assets/images/youtube.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

const menuAccount = [
  "Overview",
  "Oder History",
  "Wishlist",
  "Account information",
];
const menuStore = [
  "Security Notice",
  "Location & Hours",
  "Rentals",
  "Privacy Notice",
];

const Footer = () => {
  return (
    <>
      <center>
        <footer>
          <div className="footer-menu">
            <div className="menu">
              <div className="line"></div>
              <h1 className="mt">My Account</h1>
              {menuAccount.map((item) => (
                <p className="footer" key={item}>
                  {item}
                </p>
              ))}
            </div>
            <div className="menu">
              <div className="line"></div>
              <h1 className="mt">Store</h1>
              {menuStore.map((item) => (
                <p className="footer" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="social-media">
            <img className="logo" src={logo} alt="img not found" />
            <div className="icons-container">
              <img src={youtube} alt="img not found" />
              <img src={twitter} alt="img not found" />
              <img src={instagram} alt="img not found" />
              <img src={facebook} alt="img not found" />
            </div>
          </div>
        </footer>
        <div className="autor">
          <p className="autor">©2021 Music Store</p>
        </div>
      </center>
    </>
  );
};

export default Footer;
