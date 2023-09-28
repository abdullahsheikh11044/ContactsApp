import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "./userSlice";
import { Link } from "react-router-dom";
import { useLoginMutation } from "./userApiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const signIn = async (values) => {
    try {
      const response = await login(values).unwrap();
      if (response.access) {
        localStorage.setItem("email", values.email);
        dispatch(setCredentials(response));
        navigate(profileSetupRoute);
      }
    } catch (response) {}
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center text-center loginContainer"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={LoginSchema}
        onSubmit={(values) => {
          signIn(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div className="loginImgContainer">
              <img
                src="src/assets/robot6.png"
                alt="login logo"
                className="loginImg"
              />
            </div>
            <h1 className="mb-5 formHeading">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Email"
                    className="py-2 formFeilds"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isInvalid={touched.email && !!errors.email}
                    isValid={touched.email && !errors.email}
                    disabled={isLoading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="py-2 formFeilds"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    isInvalid={!!errors.password && touched.password}
                    isValid={touched.password && !errors.password}
                    disabled={isLoading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </>
              </Form.Group>
              <Container className="pt-5">
                <Row
                  lg={2}
                  className="gy-2 d-flex justify-content-center btnContainer"
                >
                  <Col md="auto" lg="auto">
                    <Button
                      className="rounded-pill border-0 shadow bg-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      <div className="d-flex gap-2 px-4 justify-content-center align-items-center text-white">
                        {isLoading && (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}
                        Login
                      </div>
                    </Button>
                  </Col>
                  <Col md="auto" lg="auto">
                    <p className="formHeading">or</p>
                  </Col>
                  <Col md="auto" lg="auto">
                    <Link
                      //   to={signupRoute}
                      variant="light"
                      className="text-primary fw-bold"
                      disabled={isLoading}
                    >
                      Signup
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
