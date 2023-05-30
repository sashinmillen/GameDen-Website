import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Logo from "./logo"

//Styles
import * as styles from "../styles/components/footer.module.css"
import { Container, Row, Col } from "react-bootstrap"

const description =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo."
const ContactNo = "+123 456 789"
const Email = "gameden@email.com"
const Address = "5036 O'Reilly Alley, Trystanbury"

const quicklinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "Events",
    link: "/events",
  },
]

const resources = [
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Support",
    link: "/support",
  },
]

const branches = [
  {
    name: "Atlanta",
    link: "/atlanta",
  },
  {
    name: "Homenickshire",
    link: "/homenickshire",
  },
  {
    name: "South Betty",
    link: "/south",
  },
]

const legal = [
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Disclaimer",
    link: "/disclaimer",
  },
]

const Footer = () => {
  return (
    <div className={styles.background}>
      <Container>
        <Row>
          <Col md={4}>
            <Logo />
            <p className="my-4">{description}</p>
            <p>
              <StaticImage src="../images/icons/phone.svg" alt="" />{" "}
              <a
                className="text-white text-decoration-none"
                href={`tel:${ContactNo}`}
              >
                {ContactNo}
              </a>
            </p>

            <p>
              <StaticImage src="../images/icons/email.svg" alt="" />{" "}
              <a
                className="text-white text-decoration-none"
                href={`mailto:${Email}`}
              >
                {Email}
              </a>
            </p>

            <p>
              <StaticImage src="../images/icons/location.svg" alt="" />{" "}
              <a className="text-white text-decoration-none" href="">
                {Address}
              </a>
            </p>
          </Col>

          <Col md={8}>
            <Row>
              <Col md={3}>
                <div className="d-block d-sm-none p-3" />
                <h6 className="pt-2 text-uppercase">SOCIAL LINKS</h6>
                {quicklinks.map(quicklink => (
                  <div className="mt-2">
                    {" "}
                    <a
                      className="text-white text-decoration-none"
                      href={`/${quicklink.name.toLowerCase()}`}
                    >
                      {quicklink.name}
                    </a>{" "}
                  </div>
                ))}

                <h6 className="pt-2 text-uppercase my-4">Quick Links</h6>
                <a
                  className="text-white text-decoration-none"
                  href="https://www.facebook.com"
                  target="blank"
                >
                  <StaticImage
                    src="../images/icons/facebook.svg"
                    className="me-2"
                    alt=""
                  />
                </a>

                <a
                  className="text-white text-decoration-none"
                  href="https://www.instagram.com"
                  target="blank"
                >
                  <StaticImage
                    src="../images/icons/instagram.svg"
                    className="me-2"
                    alt=""
                  />
                </a>

                <a
                  className="text-white text-decoration-none"
                  href="https://www.linkedin.com"
                  target="blank"
                >
                  <StaticImage
                    src="../images/icons/linkedin.svg"
                    className="me-2"
                    alt=""
                  />
                </a>
              </Col>

              <Col md={3}>
                <div className="d-block d-sm-none p-3" />
                <h6 className="pt-2 text-uppercase">Resources</h6>
                {resources.map(resource => (
                  <div className="mt-2">
                    <a
                      className="text-white text-decoration-none"
                      href={`/${resource.name.toLowerCase()}`}
                    >
                      {resource.name}
                    </a>{" "}
                  </div>
                ))}
              </Col>

              <Col md={3}>
                <div className="d-block d-sm-none p-3" />
                <h6 className="pt-2 text-uppercase">Branches</h6>
                {branches.map(branch => (
                  <div className="mt-2">
                    <a
                      className="text-white text-decoration-none"
                      href={`/${branch.name.toLowerCase()}`}
                    >
                      {branch.name}
                    </a>{" "}
                  </div>
                ))}
              </Col>

              <Col md={3}>
                <div className="d-block d-sm-none p-3" />
                <h6 className="pt-2 text-uppercase">legal</h6>
                {legal.map(legallink => (
                  <div className="mt-2">
                    <a
                      className="text-white text-decoration-none"
                      href={`/${legallink.name.toLowerCase()}`}
                    >
                      {legallink.name}
                    </a>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-5" />
        <p className="text-center">© 2022 Surge Global. All rights reserved.</p>
      </Container>
    </div>
  )
}

export default Footer
