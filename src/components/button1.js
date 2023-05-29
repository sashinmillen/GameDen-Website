import * as React from "react"
import { Button } from "react-bootstrap"
import * as styles from "../styles/components/button.module.css"

const Button1 = ({ ButtonName }) => {
  return (
    <Button variant={`px-4 rounded-0 ${styles.btnColor}`}>{ButtonName}</Button>
  )
}
export default Button1
