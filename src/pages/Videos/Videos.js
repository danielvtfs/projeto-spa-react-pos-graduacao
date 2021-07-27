import Carousel from 'react-bootstrap/Carousel';
function Videos() {
  return (
    <Carousel className="container" fade>
      <Carousel.Item>
        <iframe
          width="475"
          height="344"
          src="https://www.youtube.com/embed/e0AjQUI5NN4"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          width="475"
          height="344"
          src="https://www.youtube.com/embed/BsJisD7n8_Q"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          width="475"
          height="344"
          src="https://www.youtube.com/embed/pRAaU_0XcFk"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          width="475"
          height="344"
          src="https://www.youtube.com/embed/M4lsB-B1O7U"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          width="475"
          height="344"
          src="https://www.youtube.com/embed/09sEokdW-bQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Carousel.Item>
    </Carousel>
  );
}
export default Videos;
