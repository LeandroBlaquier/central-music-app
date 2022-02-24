// import 'Footer.css'

// const indexMyAccount= ['Overview', 'Oder History', 'Wishlist', 'Account information']
// const indexStore = ['Security Notice', 'Location & Hours', 'Rentals', 'Privacy Notice']

const Footer = () => {
  return(
    <>
    <footer>
      <div className="index-content">
        <div ></div>
        <div></div>
      </div>
      <div className="social-media">
        <img src="logo" alt="../image/logo.png" />
        <div icons-container>
          <img src="" alt="../image/youtube-icon.png" />
          <img src="" alt="../image/twiter-icon.png" />
          <img src="" alt="../image/facebook-icon.png" />
          <img src="" alt="../image/instagram-icon.png" />
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