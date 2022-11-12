
import {Button, Col, Form, InputGroup, Row }from 'react-bootstrap';
import "./SignUp.css"


const SignUpForm = () => {
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
    <h1 className="display-4">Signup From</h1>
    <Form onSubmit={handleSubmit} className="signUp-form">
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full Name"
          />   
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  );
}

export default SignUpForm;