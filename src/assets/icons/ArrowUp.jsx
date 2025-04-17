import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ??  18}
    height={props.height ?? 18}
    fill="none"
    {...props}
  >
    <path stroke="#000" strokeWidth={2} d="M1 1h16m0 0v16m0-16L1 17" />
  </svg>
)
export default SvgComponent
