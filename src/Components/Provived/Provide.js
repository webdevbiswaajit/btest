import React from "react";
import { Tabs, Tab, Container, Col, Row } from "react-bootstrap";
import web_banner from "../../Images/webBanner.jpg";
import "./Provide.css";

function Provide() {
  return (
    <>
      <section className="provide">
        <Container>
          <div className="provide_top">
            <h2>Services We Provide</h2>
            <p>Know More About Our Services</p>
          </div>
          <div className="provide_tabs">
            <Tabs
              defaultActiveKey="web"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="web" title="Web Design & Development">
                <div className="provide_content">
                  <Row>
                    <Col md={6}>
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content">
                        <p>
                          Bringing your ideas to live, website designs is our
                          forte. We carve perfect designs to build creative
                          websites that engage users on both desktop & mobile
                          devices with its ultra modern responsive UI.
                        </p>

                        <ul>
                          <li> Highly Professional Design</li>
                          <li> Responsive Design</li>
                          <li> Multi-level Security</li>
                          <li> payment Gateway </li>
                          <li> Email Marketing Integration </li>
                          <li> Dashboard/ Reporting Tools </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <div className="get_stered banner_button">
                            <button>Get Started</button>
                          </div>
                          <div className="contuct_us banner_button">
                            <button>Contact Us</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="android " title="Android Application Development">
                <div className="provide_content">
                  <Row>
                    <Col md={6}>
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content banner_gap">
                        <p>
                          Bringing your ideas to live, website designs is our
                          forte. We carve perfect designs to build creative
                          websites that engage users on both desktop & mobile
                          devices with its ultra modern responsive UI.
                        </p>

                        <ul>
                          <li> Highly Professional Design</li>
                          <li> Responsive Design</li>
                          <li> Multi-level Security</li>
                          <li> payment Gateway </li>
                          <li> Email Marketing Integration </li>
                          <li> Dashboard/ Reporting Tools </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <div className="get_stered banner_button">
                            <button>Get Started</button>
                          </div>
                          <div className="contuct_us banner_button">
                            <button>Contact Us</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="graphic" title="UI & Graphic Design Service">
                <div className="provide_content">
                  <Row>
                    <Col md={6}>
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content">
                        <p>
                          Bringing your ideas to live, website designs is our
                          forte. We carve perfect designs to build creative
                          websites that engage users on both desktop & mobile
                          devices with its ultra modern responsive UI.
                        </p>

                        <ul>
                          <li> Highly Professional Design</li>
                          <li> Responsive Design</li>
                          <li> Multi-level Security</li>
                          <li> payment Gateway </li>
                          <li> Email Marketing Integration </li>
                          <li> Dashboard/ Reporting Tools </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <div className="get_stered banner_button">
                            <button>Get Started</button>
                          </div>
                          <div className="contuct_us banner_button">
                            <button>Contact Us</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab eventKey="marketing" title="Digital Marketing Service">
                <div className="provide_content">
                  <Row>
                    <Col md={6}>
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content banner_gap">
                        <p>
                          Bringing your ideas to live, website designs is our
                          forte. We carve perfect designs to build creative
                          websites that engage users on both desktop & mobile
                          devices with its ultra modern responsive UI.
                        </p>

                        <ul>
                          <li> Highly Professional Design</li>
                          <li> Responsive Design</li>
                          <li> Multi-level Security</li>
                          <li> payment Gateway </li>
                          <li> Email Marketing Integration </li>
                          <li> Dashboard/ Reporting Tools </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <div className="get_stered banner_button">
                            <button>Get Started</button>
                          </div>
                          <div className="contuct_us banner_button">
                            <button>Contact Us</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Provide;
