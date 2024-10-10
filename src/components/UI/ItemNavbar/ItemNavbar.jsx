import React from "react"

export const ItemNavbar = ({text, link}) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}
