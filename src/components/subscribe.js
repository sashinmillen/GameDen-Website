import * as React from "react"
import { Button, Container, Form } from "react-bootstrap"
import * as styles from "../styles/components/subscribe.module.css"

const Subscribe = () => {
  return (
    <div>
      <Container
        className={`justify-content-center text-center align-items-center ${styles.container}`}
      >
        <div className={styles.content}>
          <h1>
            Don't miss the updates
            <br /> from our end
          </h1>
          <p>
            Ut sed non dolores qui deleniti tempora. Minus et voluptatem
            officiis ut aspernatur nihil recusandae ullam.
            <br /> Ut similique occaecati ea porro voluptatibus sequi.
          </p>
          <div className="d-flex justify-content-center">
            <Form className="d-flex mt-4">
              <Form.Control
                type="search"
                placeholder="example@email.com"
                className={`text-white rounded-0 bg-transparent ${styles.inputBar}`}
                aria-label="Search"
              />
              <Button
                className={`rounded-0 bg-dark px-5 py-2 ${styles.subscribeBtn}`}
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Subscribe
