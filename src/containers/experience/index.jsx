import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';  // Make sure to add the new CSS here

const experienceData = [
  {
    title: 'Full Stack Development Intern',
   describe: 'I developed a weather forecast web application using HTML, CSS, and JavaScript, integrating dynamic data from the OpenWeatherMap API and designing a responsive frontend, resulting in a 30% increase in user engagement. I also implemented backend services to improve data fetching efficiency by 20%, applied modular JavaScript functions to optimize performance, and collaborated with teams to enhance system reliability and usability.',
    institution: 'Capabl India',
    date: 'Jul 2024 – Aug 2024',
    image: './cap.png',  // Replace with actual image path
  },
  {
    title: 'Front End Developer Intern-At Simplbyte, I completed a one-month online internship as a Front End Developer from Mar 2023 to Apr 2023, where I gained hands-on experience in web development and design, utilizing technologies such as HTML, CSS, JavaScript, Bootstrap, and Figma.',
    institution: 'Simplbyte',
    date: 'Jun 2023 – Jul 2023',
    image: './sim.png',  // Replace with actual image path
  },
  {
    title: 'AI-ML Virtual Intern-AI-ML Virtual Internship at the All India Council for Technical Education (AICTE) from January 2024 to March 2024. During this internship,  involved in developing and implementing machine learning models and analyzing data sets, contributing to the research and development of AI-driven solutions. and completed an AICTE AIML Google internship.',
    institution: 'AICTE',
    date: 'Jan 2024 – Mar 2024',
    image: './aiml.png',  // Replace with actual image path
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <PageHeaderContent
        headerText="My Experience"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="education-section">
        {experienceData.map((item, i) => (
          <div key={i} className="education-card">
            <img src={item.image} alt={`${item.title} institution`} className="education-card__image" />
            <div className="education-card__details">
              <h3 className="education-card__title">{item.title}</h3>
              <p className="education-card__institution">{item.institution}</p>
              <p className="education-card__date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
