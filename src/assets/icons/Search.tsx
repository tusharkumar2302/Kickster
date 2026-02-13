import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props : any) {
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
        d="M21 21l-5.196-5.197m0 0A7.5 7.5 0 105.197 5.196a7.5 7.5 0 0010.607 10.607z"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Search
