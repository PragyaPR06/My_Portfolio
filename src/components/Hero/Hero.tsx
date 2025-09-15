import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { CircularCarousel } from "../circularCarousel/circularCarousel";


export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Pragati Kalwar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>4th Year CSE Undergrad, NIT Silchar,Ex-SDE Intern @ LinkedIn</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">1 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/pragati-kalwar-786b09257/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/pragatikalwar/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
{/*             <a
              href="https://api.whatsapp.com/send/?phone=%2B919127519417&text=Hello+Pragat+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a> */}
            <a href="https://t.me/pragatikalwar" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <CircularCarousel />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
