import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
function Cursos() {
  return (
    <Carousel className="container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://musicclan.com.br/wp-content/uploads/2019/05/Curso-Completo-de-Guitarra-Mod-2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/510hMjy1QsL.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.formulaviolao.com/wp-content/uploads/2019/09/curso-guitarra-intensiva-rodrigo-ferrarezi.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Cursos;
