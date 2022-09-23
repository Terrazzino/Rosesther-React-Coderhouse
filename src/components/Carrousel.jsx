import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../assets/images/banner_1.png';
import Banner2 from '../assets/images/banner_2.png';
import Banner3 from '../assets/images/banner_3.png';
import '../assets/css/Carrousel.css'
 
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">FABRICA DE CERVEZA ARTESANAL</h3>
          <p className="carrousel-text">Con trayectoria y experiencia que se expresa en su calidad</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carrousel-text">LA CERVEZA ESTA PRIMERO</h3>
          <p className="carrousel-text">Cuidamos nuestro producto de cualquier posible contaminación en cada proceso</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carrousel-text">VOS - NUESTRA PRIORIDAD</h3>
          <p className="carrousel-text">Pensamos en vos y en lo que mereces, cerveza a tu nivel!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;