import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

import SideLog from "../SideLog/SideLog";

function Login() {
  return (
    <>
      <section className="login">
        <Container className="back">
          <Row>
            <Col md={6}>
              <div className="form">
                <div className="log_form">
                  <div className="log_text">
                    <h2>Sign into your account</h2>
                  </div>
                  <div className="log_link">
                    <Link className="link_active" to="/sign-in">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </div>
                  <div className="form_login">
                    <form action="">
                      <div className="user">
                        <input type="text" placeholder="Username" />
                      </div>
                      <div className="pass">
                        <input type="text" placeholder="Password" />
                      </div>
                      <div className="control_area">
                        <div className="remember">
                          <input type="checkbox" />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link to="/forget-password">Forget Password?</Link>
                      </div>
                      <div className="form_submit">
                        <button>LOGIN</button>
                      </div>
                    </form>
                    <div className="dont_account">
                      <Link to="/register">
                        Don’t have an account? Register here.
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <SideLog />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
