import "./Hero.css";
//import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img2 from "../../assets/Profile4.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img2} alt="" className="profile-img" />
      <h1>
        <span>I`m Aditya Ravi Bangare,</span> frontend developer.
      </h1>
      <p>
        I create scalable and maintainable web applications using the latest
        frontend technologies. Driven by performance and usability, I turn
        complex problems into elegant solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
