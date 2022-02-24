// import 'Footer.css'

// const menuMyAccount= ['Overview', 'Oder History', 'Wishlist', 'Account information']
// const menuStore = ['Security Notice', 'Location & Hours', 'Rentals', 'Privacy Notice']

const Footer = () => {
  return(
    <>
    <footer>
      <div className="footer-menus">
        <div ></div>
        <div></div>
      </div>
      <div className="social-media">
        <img src="../image/logo.png" alt="logo" />
        <div className="icons-container" >
          <img src="../image/youtube-icon.png" alt="youtube" />
          <img src="../image/twiter-icon.png" alt="twiter" />
          <img src="../image/facebook-icon.png" alt="facebook" />
          <img src="../image/instagram-icon.png" alt="instagram" />
        </div>
      </div>
      <div className="">
        <p>©2021 Music Store</p>
      </div>
    </footer>
    </>
  )
}

export default Footer