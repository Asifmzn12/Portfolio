import { education } from './config/educationcustomapi';
import { Carousel, Container, Row, Col, Card,  } from 'react-bootstrap';

const CarouselComponent = () => {
  const educationDetails = [];
  for (let i = 0; i < education.length; i += 2) {
    educationDetails.push(education.slice(i, i + 2));
  }

  return (
    <Container className="py-5">
    <h2 className="text-center fw-bold mb-5">Education</h2>

      <Carousel controls={true} indicators={false} interval={3000}>
        {educationDetails.map((data, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-evenly">
              {data.map((education, educationIndex) => (
                <Col lg={6} className=' mt-3 mt-lg-0'  key={educationIndex}>
                  <Card className='mylang'>
                    <Card.Body>
                    <img src={education.image} className='img-fluid py-2' ></img>
                      <Card.Title className='education-title'>{education.Course}</Card.Title>
                      <Card.Text className='subheading'>{`${education.CollegeName}`}</Card.Text>
                      <Card.Text className='subheading'>{education.Board}</Card.Text>
                      <Card.Text className='subheading'>{` Percentage:  ${ education.Percentage} `}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
