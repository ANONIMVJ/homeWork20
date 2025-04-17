import * as React from "react"
import { colors } from "@/styles/theme"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 18}
    height={props.height ?? 12}
    fill="none"
    {...props}
  >
    <path stroke={props.color || colors.main } d="M17 6H0m17 0-5.037-5M17 6l-5.037 5" />
  </svg>
)
export default SvgComponent
