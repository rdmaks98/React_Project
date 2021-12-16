import logo from './logo.svg';
import "./css/index.css"

function App() {
  return (
    <>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" class="w3-bar-item w3-button w3-wide">LOGO</a>
          {/* <!-- Right-sided navbar links --> */}
          <div class="w3-right w3-hide-small">
            <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
            <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
            <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
            <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
            <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
          </div>
          {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}

          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
      {/* slider */}
      <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{ display: 'none' }} id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
        <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT</a>
        <a href="#team" onclick="w3_close()" class="w3-bar-item w3-button">TEAM</a>
        <a href="#work" onclick="w3_close()" class="w3-bar-item w3-button">WORK</a>
        <a href="#pricing" onclick="w3_close()" class="w3-bar-item w3-button">PRICING</a>
        <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
      </nav>

      <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
        <div class="w3-display-left w3-text-white" style={{ padding: '48px' }}>
          <span class="w3-jumbo w3-hide-small">Start something that matters</span><br />
          <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
          <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
          <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
        </div>
        <div class="w3-display-bottomleft w3-text-grey w3-large" style={{ padding: '24px 48px' }}>
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </header>

      {/* about company */}
      <div class="w3-container" style={{ padding: "128px 16px" }} id="about">
        <h3 class="w3-center">ABOUT THE COMPANY</h3>
        <p class="w3-center w3-large">Key features of our company</p>
        <div class="w3-row-padding w3-center" style={{ marginTop: "64px" }}>
          <div class="w3-quarter">
            <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
            <p class="w3-large">Responsive</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Passion</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Design</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
      </div>
      {/* <!-- Promo Section - "We know design" --> */}
      {/* <div class="w3-container" style={{ padding: '128px 16px' }}>
        <div class="w3-row-padding">
          <div class="w3-col m6">
            <h3>We know design.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore.</p>
            <p><a href="#work" class="w3-button w3-black"><i class="fa fa-th">&nbsp;</i> View Our Works</a></p>
          </div>
          <div class="w3-col m6">
            <img class="w3-image w3-round-large" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Buildings" width="700" height="394" />
          </div>
        </div>
      </div>

      footer */}
      <footer class="w3-center w3-black w3-padding-64">
        <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div class="w3-xlarge w3-section">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
      </footer>
    </>
  );
}

export default App;
