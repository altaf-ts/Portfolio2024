import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaJava, FaDatabase, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si"; 

const personalDetails = [
  {
    label: "Name",
    value: "Altaf Shaikh",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "Pune-Maharashtra, India",
  },
  {
    label: "Email",
    value: "ashaikh20754@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7385274784",
  },
];

const jobSummary =
  "I recently graduated in 2024 from MMIT Pune with a strong passion for software development and full-stack development. I have a solid foundation in object-oriented programming and Java, complemented by hands-on experience in web development and design through an internship. I am eager to explore new opportunities that allow me to apply and expand my skills in the dynamic field of software development. I am always open to connecting with professionals in the industry to exchange knowledge and grow. Please feel free to reach out for any inquiries or collaborations.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Java Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaJava size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" /> {/* SQL */}
              </div>
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiSpringboot size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
