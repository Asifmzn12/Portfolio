import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from './config/experiencecustomapi';



function Experience() {
  return (
    <div className="container py-md-5 py-3">
      <h2 className="text-center fw-bold mb-5">Experience</h2>
      <div className='Stepper'>
        <VerticalTimeline className='w-100 mw-100' layout="1-column-left">
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(255 255 255)' }}
              date={experience.date}
              iconStyle={{ background: 'rgba(255, 255, 255,1)', color: '#fff' }}
              icon={<img src={experience.img} className='img-fluid' alt="Experience" />}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h5 className="vertical-timeline-element-subtitle my-2">{experience.company}</h5>
              <p>
                Role & Responsibilities: {experience.role}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
