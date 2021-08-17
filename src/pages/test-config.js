import React from "react"

const TestComp = ({ children, ...props }) => {
  return (
    <div>
      <div>TEST COMP</div>
      <div>{ JSON.stringify(props) }</div>
      { children }
    </div>
  )
}
const config = ({
  type: TestComp,
  props: { fake: "PROP" },
  children: [
    <div>!!!!!!!!!!!!!!!!!!!!!!!!</div>,
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    () => <div>1111111111111111</div>,
    () => <div>2222222222222222</div>,
    () => <div>3333333333333333</div>
  ]
})
export default config;
