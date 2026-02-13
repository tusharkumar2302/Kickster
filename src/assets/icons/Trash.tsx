import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Trash(props : any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_30020_2946)" fill="#111">
        <Path d="M21 6h-5V4.33A2.42 2.42 0 0013.5 2h-3A2.42 2.42 0 008 4.33V6H3a1 1 0 000 2h1v11a3 3 0 003 3h10a3 3 0 003-3V8h1a1 1 0 100-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4V4.33zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V8h12v11z" />
        <Path d="M9 17a1 1 0 001-1v-4a1 1 0 10-2 0v4a1 1 0 001 1zM15 17a1 1 0 001-1v-4a1 1 0 00-2 0v4a1 1 0 001 1z" />
      </G>
      <Defs>
        <ClipPath id="clip0_30020_2946">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Trash
