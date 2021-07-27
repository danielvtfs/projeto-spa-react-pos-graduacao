import Carousel from 'react-bootstrap/Carousel';
function Album() {
  return (
    <Carousel className="container" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/589/thumb-1920-58905.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pitangui.com/2013/wp-content/uploads/2017/01/aprenda-a-tocar-guitarra-da-maneira-wallpaper-002.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/d8/38/26/d83826d786528d59bce7a3e3138b3fee.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wallpaperscristaos.com.br/wp-content/uploads/2014/04/wallpaper-cristao-hd-te-louvarei-guitarra-cama_2048x1536.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1541690212779-7a48c04096cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGd1aXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Album;
