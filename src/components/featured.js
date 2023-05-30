import React, { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

//Styles
import * as styles from "../styles/components/featured.module.css"
import { Container, Badge, Card, Button } from "react-bootstrap"
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs"
import "react-multi-carousel/lib/styles.css"

//Components
import Title from "./title"

const sectionName = "Featured"
const title = "Find the best out there"
const description =
  "Unde ut et. Delectus aspernatur eligendi ullam. Sit ad illum eaque distinctio."

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const games = [
  {
    name: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the...",
    link: "/gtav",
  },
  {
    name: "Forza Horizon 5",
    description:
      "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the...",
    link: "/forza-horizon5",
  },
  {
    name: "Red Dead Redemption II",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry...",
    link: "/red-dead-redemption-ii",
  },
]

const Featured = () => {
  let carouselRef = useRef(null)

  return (
    <div className={styles.featured}>
      <Title
        title={title}
        sectionName={sectionName}
        description={description}
      />
      <Container>
        <Carousel
          ref={el => (carouselRef = el)}
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          arrows={false}
          infinite={true}
          keyBoardControl={true}
          // dotListClass={styles.dots}
          className="pb-5"
        >
          <Card className={styles.cards}>
            <Card.Body>
              <StaticImage src="../images/featured/blog-1.png" alt="" />
              <Badge
                className={`font-weight-light my-3 p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                PS4
              </Badge>
              <Badge
                className={`font-weight-light p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                PC
              </Badge>
              <Badge
                className={`font-weight-light p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                NINTENDO
              </Badge>
              <Card.Title>{games[0].name}</Card.Title>
              <Card.Text>{games[0].description}</Card.Text>
              <Button
                className="bg-transparent p-0 mt-auto border-0 fw-bold"
                style={{ color: "#B537F2" }}
                href={games[0].link}
              >
                Play now <BsFillCaretRightFill style={{ color: "#B537F2" }} />
              </Button>
            </Card.Body>
          </Card>

          <Card className={styles.cards}>
            <Card.Body>
              <StaticImage src="../images/featured/blog-2.png" alt="" />
              <Badge
                className={`font-weight-light my-3 p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                Xbox One
              </Badge>
              <Card.Title>{games[1].name}</Card.Title>
              <Card.Text>{games[1].description}</Card.Text>
              <Button
                className="bg-transparent p-0 mt-auto border-0 fw-bold"
                style={{ color: "#B537F2" }}
                href={games[1].link}
              >
                Play now <BsFillCaretRightFill style={{ color: "#B537F2" }} />
              </Button>
            </Card.Body>
          </Card>

          <Card className={styles.cards}>
            <Card.Body>
              <StaticImage src="../images/featured/blog-3.png" alt="" />
              <Badge
                className={`font-weight-light my-3 p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                PS4
              </Badge>
              <Badge
                className={`font-weight-light p-2 me-2 rounded-0 ${styles.badgeTitle}`}
              >
                Xbox One
              </Badge>
              <Card.Title>{games[2].name}</Card.Title>
              <Card.Text>{games[2].description}</Card.Text>
              <Button
                className="bg-transparent p-0 mt-auto border-0 fw-bold"
                style={{ color: "#B537F2" }}
                href={games[2].link}
              >
                Play now <BsFillCaretRightFill style={{ color: "#B537F2" }} />
              </Button>
            </Card.Body>
          </Card>
        </Carousel>

        <button
          className={styles.previousButton}
          onClick={() => {
            carouselRef.previous()
          }}
        >
          <BsFillCaretLeftFill />
        </button>

        <button
          className={styles.nextButton}
          onClick={() => {
            carouselRef.next()
          }}
        >
          <BsFillCaretRightFill />
        </button>
      </Container>
    </div>
  )
}

export default Featured
