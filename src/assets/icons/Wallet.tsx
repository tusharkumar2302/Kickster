import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Wallet(props : any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_30020_3030)"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M21.639 14.396H17.59a2.693 2.693 0 01-2.693-2.692 2.693 2.693 0 012.693-2.69h4.048M18.049 11.643h-.312" />
        <Path
          clipRule="evenodd"
          d="M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z"
        />
        <Path d="M7.035 7.538h5.4" />
      </G>
      <Defs>
        <ClipPath id="clip0_30020_3030">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Wallet
