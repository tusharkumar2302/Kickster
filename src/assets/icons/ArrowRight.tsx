import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={10}
      height={15}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.066 0a1 1 0 00-.658 1.772l6.119 5.242-6.12 5.24a1 1 0 101.3 1.514l7.006-5.994a1 1 0 000-1.522l-7.006-6A1 1 0 001.066 0z"
        fill="#111"
      />
    </Svg>
  )
}

export default SvgComponent
