import Card from 'react-bootstrap/Card';
import { data } from './config/skillscustomapi';

function Skills() {
  return (
    <div className='container py-5'>
      <h1 className="text-center fw-bold mb-5">Skills</h1>

      <div className='row justify-content-md-start justify-content-center   align-items-center text-center'>

        {
          data.map((skills) => (
            <div data-aos="fade-right" className=' col-sm-6 col-md-4 col-lg-3 my-2 ' key={skills.id} >
              <Card className='mylang py-3 py-lg-4 skills'>
                <Card.Body>
                  <img src={skills.img} className='img-fluid skillimg'></img>
                  <Card.Text className='my-2'>{skills.SkillName}</Card.Text>
                  <div>
                  <Card.Text className='slevel'>{skills.level}</Card.Text>

                  </div>


                </Card.Body>
              </Card>
            </div>
          ))
        }



      </div>
    </div>
  );
}

export default Skills;
