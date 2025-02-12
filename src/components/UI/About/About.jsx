import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-heading">About Me!</h2>
      <div className="about-content">
        <p>
          From my early days of writing simple programs to now <span className="highlighted-text">leading the development of complex eCommerce solutions</span>,
          my journey has been all about curiosity and constant learning. With <span className="highlighted-text">5 years</span> of experience in <span className="highlighted-text">WordPress & WooCommerce</span>,
          I’m dedicated to building websites and stores that don’t just work—they help my clients’ businesses shine.
        </p>

        <p>
          I love <span className="highlighted-text">mentoring junior developers</span>, sharing what I’ve learned, and keeping communication with clients smooth and easy every step of the way.
          Together, <span className="highlighted-text">we create something amazing every time!</span>
        </p>

        <p>
          Now, <span className="highlighted-text">my curiosity has led me to the world of React.</span> I’m passionate about building dynamic, modern web applications and excited to dive into this powerful framework to take my development skills to the next level. 🚀
        </p>

        <p>
          If we step away from the code, you’ll probably find me with my nose in a <span className="highlighted-text">good book</span>, immersed in a <span className="highlighted-text">game</span>,
          or <span className="highlighted-text">binge-watching movies & TV series</span>. I’m also deeply interested in <span className="highlighted-text">meditation</span>,
          <span className="highlighted-text">psychedelics</span>, <span className="highlighted-text">enlightenment</span>, and the <span className="highlighted-text">fascinating journey of evolution. 🌌</span>
        </p>

        <p className="favorite-quote-title"><span className="highlighted-text">Favorite Quote:</span></p>
        <p className="favorite-quote"><strong>"Greatness comes from humble beginnings; it comes from grunt work. It means you’re the least important person in the room—until you change that with results."</strong></p>
      </div>
    </div>
  );
}

export default About;
