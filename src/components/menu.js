import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import menu from "../images/nikkori.jpg"

export default function Menu() {
  const data = useStaticQuery(graphql`
    query Menu {
      menu: file(relativePath: { eq: "nikkori.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcWebp
            aspectRatio
            base64
          }
        }
      }
    }
  `)

  return (
    <section className="menu-section">
      <div>
        <div className="menu-div-1">
          <Img
            className="menu-image"
            alt=""
            fluid={data.menu.childImageSharp.fluid}
          />
        </div>
        <div className="menu-div-2">
          <img className="menu-image" alt="" src={menu} />
        </div>
      </div>
    </section>
  )
}
