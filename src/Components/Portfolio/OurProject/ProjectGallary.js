import React, { useState, useEffect } from "react";
import "./ProjectGallary.css";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../../../Images/protfolio/prot_galary/pg1.jpg";
import galaryImg from "./ProjectGallaryData";

function ProjectGallary() {
  const [items, setItems] = useState(galaryImg);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    fetch("./ProjectGallaryData.js")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const filterItem = (catItem) => {
    const updatedItem = galaryImg.filter((cureEle) => {
      return cureEle.category === catItem;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <section className="gallary">
        <div className="galarry_text">
          <p>our ALl Project</p>
          <h2>Have a look at our work!</h2>
        </div>
        <Container>
          <div className="overLine">
            <hr />
          </div>
          <div className="galary_btn">
            <button onClick={() => filterItem("web")}>
              Web Design & Development
            </button>
            <button onClick={() => filterItem("GraphicDesign")}>
              Graphic Design
            </button>
            <button onClick={() => filterItem("UI/UXDesign")}>
              UI/UX Design
            </button>
            <button onClick={() => filterItem("DigitalMarketing")}>
              Digital Marketing
            </button>
            <button onClick={() => filterItem("Partners")}>Partners</button>

            <button onClick={() => setItems(galaryImg)}>All</button>
          </div>
          <Row>
            {items.map((data) => {
              const { id, projectNmae, frameWork, clint, category, img } = data;
              return (
                <Col md={4} sm={12} key={id}>
                  <div className="glarry_img">
                    <img src={img} alt="" />
                    <div className="project_details">
                      <div className="project_info">
                        <div className="project_text">
                          <h3>
                            Project: {projectNmae}/ <small>{category}</small>
                          </h3>
                          <p>This web site created by {frameWork}</p>
                          <small>Client: {clint}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="loadMore">
            <button>Load More</button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectGallary;
