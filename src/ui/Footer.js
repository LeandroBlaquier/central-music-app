// import 'Footer.css'

// const indexMyAccount= ['Overview', 'Oder History', 'Wishlist', 'Account information']
// const indexStore = ['Security Notice', 'Location & Hours', 'Rentals', 'Privacy Notice']

const Footer = () => {
  return (
    <>
      <footer>
        <div className="index-content">
          <div></div>
          <div></div>
        </div>
        <div className="social-media">
          <img src="logo" alt="../image/logo.png" />
          <div icons-container>
            <img src="../image/youtube-icon.png" alt="image not found" />
            <img src="../image/twiter-icon.png" alt="image not found" />
            <img src="../image/facebook-icon.png" alt="image not found" />
            <img src="../image/instagram-icon.png" alt="image not found" />
          </div>
        </div>
        <div className="">
          <p>©2021 Music Store</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
