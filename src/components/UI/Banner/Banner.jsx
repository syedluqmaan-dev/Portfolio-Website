import './banner.css';

function Banner() {
  return (
    <div className="banner-container" id="home">
      <div className="banner-intro-text">
        <p>Hello there! I am</p>
        <span className="banner-intro-name">Mihir Dave.</span>
        <p className="banner-intro-subtext">
          A passionate developer with 5 years of full-stack experience, stepping into the exciting universe of React development! 🌌
        </p>
      </div>
      <div className="banner-dev-image"></div>
    </div>
  );
}

export default Banner;
