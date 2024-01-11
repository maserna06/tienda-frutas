import { Badge, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function Login() {
  return (
    <Container>
      <div className="mt-4">
        <h1>
          Ingresar a nuestra
          &nbsp;
          <Badge bg="secondary" as={Button} className="ml-10">
            Tienda de Frutas
          </Badge>
        </h1>
      </div>

      <hr />

      <Row className="align-items-center mt-5">
        <Col md={6} lg={7} className="mb-4">
          <Image
            src={process.env.PUBLIC_URL + "/imagen-frutas.jpg"}
            style={{'borderRadius':'20px'}}
            fluid 
          />
        </Col>

        <Col md={6} lg={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                No compartiremos tu email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
