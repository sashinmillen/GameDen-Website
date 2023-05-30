import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Styles
import * as styles from "../styles/components/gallery.module.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { BsFillCaretRightFill } from "react-icons/bs"

//Components
import Title from "./title"
import Subscribe from "./subscribe"

const sectionName = "Gallery"
const title = "Here’s how the rigs looks"
const description =
  "Unde ut et. Delectus aspernatur eligendi ullam. Sit ad illum eaque distinctio."

const Gallery = () => {
  return (
    <div className={`pb-5 ${styles.background}`}>
      <Title
        title={title}
        sectionName={sectionName}
        description={description}
      />
      <Container className="pb-5">
        <Row>
          <Col md={6}>
            {" "}
            <StaticImage src="../images/gallery/image-0.png" alt="" />
          </Col>
          <div className="d-block d-sm-none p-3" />
          <Col md={6}>
            <Row className="g-5">
              <Col md={6}>
                {" "}
                <StaticImage src="../images/gallery/image-1.png" alt="" />
              </Col>
              <Col md={6}>
                {" "}
                <StaticImage src="../images/gallery/image-2.png" alt="" />
              </Col>
              <Col md={6}>
                {" "}
                <StaticImage src="../images/gallery/image-3.png" alt="" />
              </Col>
              <Col md={6}>
                {" "}
                <StaticImage src="../images/gallery/image-4.png" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="p-4 justify-content-center align-items-center text-center ">
          <Button
            href="#"
            className="bg-transparent p-0 mt-auto border-0"
            style={{ color: "#B537F2", fontFamily: "Manrope Variable" }}
          >
            View all photos{" "}
            <BsFillCaretRightFill style={{ color: "#B537F2" }} />
          </Button>
        </div>
      </Container>
      <Subscribe />
    </div>
  )
}
export default Gallery
