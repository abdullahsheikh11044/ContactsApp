import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useSignupMutation } from "./userApiSlice";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
// import GoogleIcon from "../../assets/icons/googleicon.png";
// import FbIcon from "../../assets/icons/fbicon.png";
// import SignUpSchema from "../../validations/schemas/SignUpSchema";
// import { loginRoute, GoogleAuthUrl } from "../../constants/Constants";
// import { successToast, errorToast } from "../../notifications/toast";
import { useState } from "react";
// import Otp from "./Otp";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useSignupMutation();
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);

  const signUp = async (values) => {
    try {
      const response = await register(values).unwrap();
      //   successToast(response.message);
      if (response) {
        navigate("/login");
      }
      setEmail(response.email);
      setFlag(true);
    } catch (response) {
      //   errorToast(`${response.error.email || response.error.password}`);
    }
  };

  //   const [signupVerify, { isLoading: isLoadingverification }] =
  //     useSignupVerifyMutation();
  //   const verification = async (tokenValue, email) => {
  //     try {
  //       const response = await signupVerify({
  //         token: tokenValue,
  //         email: email,
  //       }).unwrap();
  //       navigate(loginRoute);
  //       successToast(response.message);
  //     } catch (response) {
  //       errorToast(response.error[0]);
  //     }
  //   };

  const handleGoogleAuth = () => {
    window.location.replace(GoogleAuthUrl);
  };

  const initialValues = {
    email: "",
    password: "",
    username: "",
  };

  return (
    <>
      {flag ? (
        <Otp verification={verification} email={email} setFlag={setFlag} />
      ) : (
        <div className="container-fluid d-flex justify-content-center align-items-center loginContainer">
          <Formik
            initialValues={initialValues}
            // validationSchema={SignUpSchema}
            onSubmit={(values) => {
              signUp(values);
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
                <h2 className="mt-3 mb-5 formHeading">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 d-flex justify-content-center"
                    controlId="formBasicEmail"
                  >
                    <div>
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
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-center"
                      >
                        {errors.email}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex justify-content-center"
                    controlId="formBasicPassword"
                  >
                    <div>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Create Password"
                        className="py-2 formFeilds"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        isInvalid={!!errors.password && touched.password}
                        isValid={touched.password && !errors.password}
                        disabled={isLoading}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-center"
                      >
                        {errors.password}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex justify-content-center"
                    controlId="formBasicPassword2"
                  >
                    <div>
                      <Form.Control
                        required
                        type="text"
                        placeholder="username"
                        className="py-2 formFeilds"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        isInvalid={!!errors.username && touched.username}
                        isValid={touched.username && !errors.username}
                        disabled={isLoading}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="text-center"
                      >
                        {errors.username}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  <Container fluid className="pt-2">
                    <Row lg={2} className="gy-2 d-flex justify-content-center">
                      <Col md={12} lg={12}>
                        <p className="formHeading">or signup with</p>
                      </Col>
                    </Row>
                    {/* <div className="pt-2">
                      <Col className="d-flex justify-content-center">
                        <div>
                          <div className="mt-4 d-flex flex-column justify-content-center justify-content-md-start gap-2">
                            <Button
                              className="border-0 bg-white btn-lg formFeilds text-center text-dark text-center"
                              onClick={handleGoogleAuth}
                            >
                              <div className="d-flex flex-row ">
                                <img
                                  className="img-fluid publicIcon d-flex flex-start"
                                  src={GoogleIcon}
                                  alt="google icon"
                                />
                                <div className="flex-grow-1 formHeading">
                                  Google
                                </div>
                              </div>
                            </Button>
                            <Button className="border-0 bg-white btn-lg formFeilds text-center text-dark text-center">
                              <div className="d-flex flex-row ">
                                <img
                                  src={FbIcon}
                                  alt="slack icon"
                                  className="img-fluid publicIcon"
                                />
                                <div className="flex-grow-1 formHeading">
                                  Facebook
                                </div>
                              </div>
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </div> */}
                    <Row lg={2} className="gy-2 d-flex justify-content-center">
                      <Col md="auto" lg="auto" xs="auto">
                        <Button
                          className="bg-primary btn-lg border-0 rounded-pill text-black-50 shadow mt-5 mb-5"
                          type="submit"
                          disabled={isLoading}
                        >
                          <div className=" gap-2 px-4 text-white fw-bold">
                            {isLoading && (
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            )}
                            Sign Up
                          </div>
                        </Button>
                      </Col>
                    </Row>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <p className="formHeading">Already have an account?</p>
                      {/* <Link className="text-primary fw-bold" to={loginRoute}>
                        <p>Log in</p>
                      </Link> */}
                    </div>
                  </Container>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Register;
