import { education } from './config/educationcustomapi';
import { Carousel, Container, Row, Col, Card,  } from 'react-bootstrap';

const CarouselComponent = () => {
  // Group cards into datas for each carousel slide
  const educationDetails = [];
  for (let i = 0; i < education.length; i += 2) {
    educationDetails.push(education.slice(i, i + 2));
  }

  return (
    <Container className="py-5">
    <h1 className="text-center fw-bold mb-5">Education</h1>

      <Carousel controls={true} indicators={false} interval={3000}>
        {educationDetails.map((data, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-evenly">
              {data.map((education, educationIndex) => (
                <Col lg={6} className=' mt-3 mt-lg-0'  key={educationIndex}>
                  <Card className='mylang'>
                    <Card.Body>
                    <img src={education.image} className='img-fluid py-2' ></img>
                      <Card.Title>{education.Course}</Card.Title>
                      <Card.Text>{`${education.CollegeName}`}</Card.Text>
                      <Card.Text>{education.Board}</Card.Text>
                      <Card.Text>{` Percentage:  ${ education.Percentage} `}</Card.Text>
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
