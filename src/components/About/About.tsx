import { Container } from "./styles";
import PragatiKalwar from "../../assets/PragatiKalwar.png";
import python from "../../assets/python.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import githubIcon from '../../assets/github.svg';
import nodejsIcon from '../../assets/node-icon.svg';
import javaIcon from '../../assets/java.svg';
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      { (window.innerWidth<960) && <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.21 * 1000}>
          <img src={PragatiKalwar} alt="Pragati Kalwar" />
        </ScrollAnimation>
      </div>}
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hello! I'm Pragati Kalwar, a driven Computer Science undergraduate and enthusiastic software engineer with experience in building scalable and automated solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My strength lies in developing end-to-end frameworks, creating user-centric applications, and optimizing data workflows to improve productivity and reliability.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>B.Tech, Computer Science and Engineering</h4>
            <p>National Institute of Technology, Silchar | Nov 2022 – Present</p>
            <p>CGPA: 8.61</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Software Engineering Intern</h4>
            <p>LinkedIn | May 2025 – Aug 2025</p>
            <p>Bangalore, India</p>
            <ul>
              <li>Automated data contract workflows using Python, Airflow, Spark, and SQL for the Trust Data Science Engineering team</li>
              <li>Reduced manual work by 95%, cutting process time from 5+ days to 30 minutes</li>
              <li>Enabled proactive data quality monitoring with dynamic thresholding and owner alerting</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={650}>
          <div className="achievements">
            <h3>Achievements:</h3>
            <ul>
              <li>Selected as LinkedIn CoachIn Mentee’24 (top 70 out of 10,000+)</li>
              <li>Winner, Shark Tank Entrepreneurial Challenge – E-Cell, NITS, 2023</li>
              <li>Pupil at Codeforces (max rating 1260), 650+ Leetcode problems solved</li>
              <li>National level Kho-Kho player</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.20 * 1000}>
              <img src={nodejsIcon} alt="node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.40 * 1000}>
              <img src={githubIcon} alt="githubIcon" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.50 * 1000}>
              <img src={javaIcon} alt="java" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
            { (window.innerWidth>=960) && <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.21 * 1000}>
          <img src={PragatiKalwar} alt="Pragati Kalwar" />
        </ScrollAnimation>
      </div>}
    </Container>
  );
}
