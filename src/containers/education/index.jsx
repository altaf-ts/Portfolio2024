import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.scss';  // Make sure to add the new CSS here

const educationData = [
  {
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'Marathwada Mitra Mandal’s Institute of Technology, Pune',
    date: 'Oct 2020 – Jul 2024 | CGPA - 9.07/10',
    image: './mmit.jpg',  // Replace with actual image path
  },
  {
    title: 'HSC',
    institution: 'Dayanand Junior Science College, Latur',
    date: 'Jul 2018 – Aug 2020 | Percentage - 72%',
    image: './dsc.jpg',  // Replace with actual image path
  },
  {
    title: 'SSC',
    institution: 'Yashwant Vidyalaya, Nanded Road Latur',
    date: 'Feb 2017 – Jun 2018 | Percentage - 90%',
    image: './yashwant.jpg',  // Replace with actual image path
  }
];

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Education"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="education-section">
        {educationData.map((item, i) => (
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

export default Resume;
