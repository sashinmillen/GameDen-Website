import * as React from "react"
import { Badge, Container } from "react-bootstrap"
import * as styles from "../styles/components/title.module.css"

const Title = ({ title, sectionName, description }) => {
  return (
    <Container
      className={`justify-content-center text-center align-items-center ${styles.container}`}
    >
      <Badge bg={`secondary rounded-0 ${styles.sectionTitle}`}>
        {sectionName}
      </Badge>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
export default Title
