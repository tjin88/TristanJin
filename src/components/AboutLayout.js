import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText
} from './aboutLayout.css'
import fontStyles from '../styles/fontStyles'

import NavBar from './NavBar'

const AboutLayout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <NavBar>
        <ul className={navLinks}>
        <li key={navLinkItem} style= {{color:"#663399"}}>
            <Link to="/school" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              School
            </Link>
            {/* <Button> Testing Home </Button> */}
          </li>
          <li key={navLinkItem} style= {{color:"#0D96F2"}}>
            <Link to="/rita" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              Rita
            </Link>
            {/*<Button> Testing About Me </Button>*/}
          </li>
          <li key={navLinkItem} style= {{color:"#E95800"}}>
            <Link to="/sports" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              Sports
            </Link>
            {/* <Button> Testing Home </Button> */}
          </li>
        </ul>
      </NavBar>
      {children}
    </main>
  )
}

export default AboutLayout