import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import {PiCodeSimpleFill} from 'react-icons/pi'
import images from './config/experiencecustomapi';
import 'react-vertical-timeline-component/style.min.css';
function Experience() {
  return (

    <div className="container py-md-5 py-3">
     <h2 className="text-center fw-bold mb-5">Experience</h2>
    <div className='Stepper'>
    <VerticalTimeline className='w-100 mw-100' layout="1-column-left">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255 255 255)' }}
      date="August 2023 - present"
      iconStyle={{ background: 'rgba(255, 255, 255,1)', color: '#fff' }}
   icon={<img src={images.Developer} className='img-fluid' alt="Experience" />}
  >
      <h3 className="vertical-timeline-element-title">Software Developer</h3>
      <h5 className="vertical-timeline-element-subtitle my-2">Plaxonic Inc</h5>
      <p>
      Role & Reponsibilites: Web Developepment, Creating Intractiive and Responsive UI
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255 255 255)' }}
    date="January 2023 - May 2023"
    iconStyle={{ background: 'rgba(255, 255, 255,1)', color: '#fff' }}
     icon={<img src={images.Developer} className='img-fluid' alt="Experience" />}

    >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h5 className="vertical-timeline-element-subtitle my-2">Redian  Software </h5>
    <p>
    Role & Reponsibilites: Full time Frontend Developer 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255 255 255)' }}
      date="Nom 2022 - December 2022"
      iconStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
      icon={<img src={images.Developer} className='img-fluid' alt="Experience" />}
      >
      <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
      <h5 className="vertical-timeline-element-subtitle my-2">Redian Software</h5>
      <p>
      Role & Reponsibilites: Frontend Developer Intern
      </p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  rgb(255 255 255)' }}
date="Febuary 2022 - Aug 2022"
iconStyle={{ background: 'rgba(20, 20, 58,1)', color: '#fff' }}
icon={<img src={images.Developer} className='img-fluid' alt="Experience" />}
>
<h3 className="vertical-timeline-element-title">Apprenticeship</h3>
<h5 className="vertical-timeline-element-subtitle my-2">Ducat Training Center </h5>
<p>
Role & Reponsibilites: Get Traning for Mern Stack
</p>
</VerticalTimelineElement>

    </VerticalTimeline>
   
    </div>

      
    </div>
  )
}

export default Experience
