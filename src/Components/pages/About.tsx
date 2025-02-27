import aboutPicture from '../../assets/images/picture1.png'
function About() {
 
  return (
    <div className='aboutPage' >
      <h3 className='aboutTitle'>About Us</h3>
      <div className='aboutStacks'>
      <img className='aboutImage' src={aboutPicture} alt='logo'/>
      <p className='aboutParagraph'>Glory carrier evangelistic ministries (G-CEM) is a gospel ministry where we put the word of God in action, not just speak it. Founders ministers Stavan m Whyte and wife, Hasanea B Whyte, decided if we are gonna answer the call of the lord on our lives, then we would search for the old landmark and walk there in, following God’s path as we lead his people. Via media, we are on small film makers so we we will spread the word through mini films, Stavan aka Stefan Peninsilyn is also a gospel artist and stage play writer and director/ actor so we use all that gift and talent for the glory of God. We own an internet radio, Peninsilyn Gospel Radio.  Peninsilyn.com  so we spread the gospel via radio, we also partner with other Fm band radios, we or located at 1103 Hibiscus Blvd, Melbourne Florida USA.  Email us @ glorycarrierem@gmail.com . We intended to feed the people of God spiritual and physical food, at G-Cem everybody is a somebody and are very important to the body of Christ.  We would love to have you, check us out, let’s worship.</p>

      </div>
      <div className='emptySpace' ></div>
    </div>
  )
}

export default About