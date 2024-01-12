import { useContext, useState } from "react";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { UserContext } from "../../context/UserContext";

function Login() {
  const { loginUser, wait, loggedInCheck } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const onChangeInput = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setErrMsg("Debe llenar todos los campos, son requeridos!");
      return;
    }

    const data = await loginUser(formData);

    if (data.success) {
      e.target.reset();
      setRedirect("Redirecting...");
      await loggedInCheck();
      return;
    }
    setErrMsg(data.message);
  };

  return (
    <Container>
      <div className="mt-4">
        <h1>
          Ingresar a nuestra &nbsp;
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
            style={{ borderRadius: "20px" }}
            fluid
          />
        </Col>

        <Col md={6} lg={5}>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="loginEmail"
                value={formData.email}
                onChange={onChangeInput}
                placeholder="Ingrese su email"
                required
              />
              <Form.Text className="text-muted">
                No compartiremos tu email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="loginPassword"
                value={formData.password}
                onChange={onChangeInput}
                placeholder="Ingrese su contraseña"
                required
              />
            </Form.Group>

            { 
                errMsg &&
                <Alert key={'danger'} variant={'danger'}>
                    {errMsg}
                </Alert>
            }

            { redirect ? 
                    redirect
                :
                    <Button variant="primary" type="submit" disabled={wait}>
                        Enviar
                    </Button>
            }
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
