import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Bell(props : any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.857 17.082c1.863-.22 3.693-.66 5.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 106 9v.75a8.967 8.967 0 01-2.313 6.022c1.733.64 3.56 1.085 5.456 1.31m5.713 0a24.259 24.259 0 01-5.713 0m5.713 0a3 3 0 11-5.713 0"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={17} cy={5} r={3} fill="#E53935" />
    </Svg>
  )
}

export default Bell
