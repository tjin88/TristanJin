import * as React from 'react'
// import AboutLayout from '../components/AboutLayout';
import Layout from '../components/layout'
import fontStyles from '../styles/fontStyles';
import { StaticImage } from 'gatsby-plugin-image';

/* const mouseOverImage = () => {
  if (isMarathonVisible) {
  document.getElementById("marathon").style.opacity = 1;
  }
  //document.getElementById("marathon").src = "../images/IMG_4367.png";
}*/

const AboutPage = () => {
    return (
      <Layout pageTitle="About Me">
        {/* <AboutLayout pageTitle="About Me"> */}
          <p style={fontStyles.body}>
            My name is Tristan. I'm an engineering student at Western University, hoping to specialize in software engineering.
          </p>
          <StaticImage
          alt="A logo of Western Engineering"
          src="../images/WesternEngineering.png"
          />
          <p style={fontStyles.body}>
            I am from Cobourg, Ontario - It's a small town, but our beach is known to be one of Ontario's best beaches.
            We have a ton of events each summer, and my favourite is definitely the Sandcastle Festival. 
          </p>
          <StaticImage
          alt="A picture of a sandcastle, depicting Cobourg's symbol"
          src="../images/Cobourg-Sandcastle.jpg"
          />
          <p style={fontStyles.body}>
            Outside the classroom, I am a tennis coach and tennis league co-ordinator at the Port Hope Racquet Club.
          </p>
          <StaticImage
          alt="A picture of a sandcastle, depicting Cobourg's symbol"
          src="../images/PHRCLogoColour.jpg"
          />
          <p className = "marathonText" style={fontStyles.body}>
            If I were asked my proudest moment, it would be my journey to completing the LA Marathon. Ask me about it!
          </p>
          <StaticImage
          className="hiddenMarathonPhoto"
          id="marathon"
          alt="A picture of me and my family after finishing the marathon"
          src="../images/IMG_4242.png"
          // onMouseOver={mouseOverImage}
          />
      </Layout>
    )
  }

export default AboutPage
