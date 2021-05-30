import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import fontStyles from '../styles/fontStyles';
// import { ReactComponent as Icon } from '../images/svg/icon.inline.svg';
import '../components/reachMeLinks.css';

// Couldn't find a way to make these all combined. I tried passing in a variable as props, then using it, but received a null error. 
// If you can figure this out, that would be amazing
const mouseOverEmail = () => {
  document.getElementById("emailLink").style.textDecoration = "underline";
}
const mouseOutEmail = () => {
    document.getElementById("emailLink").style.textDecoration = "none";
}
const mouseOverLinkedin = () => {
  document.getElementById("linkedinLink").style.textDecoration = "underline";
}
const mouseOutLinkedin = () => {
    document.getElementById("linkedinLink").style.textDecoration = "none";
}
const mouseOverFacebook= () => {
  document.getElementById("facebookLink").style.textDecoration = "underline";
}
const mouseOutFacebook = () => {
    document.getElementById("facebookLink").style.textDecoration = "none";
}

//document.getElementById("link").onmouseover = {mouseOver()};
//document.getElementById("link").onmouseout = {mouseOut()};

const IndexPage = () => {
  return (
    <>
    <Layout pageTitle="Hi! Nice to meet you. " myName=" I'm Tristan">
      <p style={fontStyles.body}>
        This website is definitely still a work-in-progress, but please let me know what you think!
      </p>
      <ul className = "reachMeLinks">
        <p style={fontStyles.bodyinline}> You can reach me through</p>
        <a className = "emailLink" id = "emailLink" onMouseOver = {mouseOverEmail} onMouseOut = {mouseOutEmail} style={fontStyles.bodyLinks} href="mailto:tjin368@gmail.com">my Email,</a>
        <a className = "linkedInLink" id = "linkedinLink" onMouseOver = {mouseOverLinkedin} onMouseOut = {mouseOutLinkedin} style={fontStyles.bodyLinks} href="https://www.linkedin.com/in/tristan-jin/">LinkedIn,</a>
        <a className = "facebookLink" id = "facebookLink" onMouseOver = {mouseOverFacebook} onMouseOut = {mouseOutFacebook} style={fontStyles.bodyLinks} href="https://www.facebook.com/tristan.jin.8">or Facebook.</a>
        <p style={fontStyles.bodyinline}>(Click to access!)</p>
      </ul>
      <StaticImage 
      alt="A picture of me, Tristan :)"
      src="../images/IMG_1696_4.jpg"
      />
      {/*<p style={fontStyles.body}>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>*/}
    </Layout>
    {/* <Icon /> */}
    </>
  )
}

export default IndexPage