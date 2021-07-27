import Form from 'react-bootstrap/Form';
import './styles.css';
import Button from 'react-bootstrap/Button';
import faleConosco from '../../img/fale-conosco-.png';

function Contato() {
  function alerts() {
    alert('Enviado com sucesso!');
  }
  return (
    <div>
      <img className="fale-conosco" src={faleConosco} alt="" />
      <div className="container">
        <Form className="container-form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control className="nome" type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="email"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrição</Form.Label>
            <Form.Control className="textarea" as="textarea" rows={5} />
          </Form.Group>
          <Button onClick={alerts} className="botao-enviar" variant="primary">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Contato;
