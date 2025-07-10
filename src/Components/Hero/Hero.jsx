import "./Hero.css";
//import profile_img from "../../assets/profile_img.svg";
//import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img2 from "../../assets/Profile4.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img2} alt="" className="profile-img" />
      <h1>
        <span>I`m Aditya Ravi Bangare,</span> Frontend developer.
      </h1>
      <p>
        I create scalable and maintainable web applications using the latest
        frontend technologies. Driven by performance and usability, I turn
        complex problems into elegant solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchor-link"
            href="https://www.linkedin.com/in/aditya-r-bangare-164196191"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={{
                width: "24px",
                height: "24px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            LinkedIn
          </a>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
