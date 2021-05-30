import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import fontStyles from '../styles/fontStyles'

import NavBar from './NavBar'

const Layout = ({ pageTitle, children, myName }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <NavBar>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              Home
            </Link>
            {/* <Button> Testing Home </Button> */}
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              About Me
            </Link>
            {/*<Button> Testing About Me </Button>*/}
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/indexEXAMPLE" className={navLinkText} style={fontStyles.links} activeStyle={fontStyles.activeLinks}>
              Gatsby Example
            </Link>
            {/*<Button> Testing Example </Button>*}
          </li> */}
        </ul>
      </NavBar>
      <h1 className={heading} style={fontStyles.header}>{pageTitle} </h1> 
      <h1 className={heading} style={fontStyles.header.name}>{myName}</h1> 
      {children}
    </main>
  )
}

export default Layout