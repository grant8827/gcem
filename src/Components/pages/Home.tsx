import '../../App.css'
import { BottomHeader } from '../Bottom-Header'
import TvScreen from '../Tv-screen'
import InfoCard from '../infoCards'
import Tithes from '../../assets/images/tithes-removebg-preview.png'
import Bible from '../../assets/images/bible.png'
import Youth from '../../assets/images/youth-removebg-preview.png'
import Picture1 from '../../assets/images/pictrue2.png'
import Slideshow from '../Slideshow'
import NoticeBoard from '../Notice-board'
import { Link } from 'react-router-dom'
// import { View } from 'react'

function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div >
        <BottomHeader/>
        <div className='infoCards' >
            {/*card 1*/}
      <InfoCard CardIcons={<img className='cardImage'  src={Tithes} alt='logo'/>} 
      CardTitle={'Tithes & Offering'} CardInfo={'Your tithes and offerings are super important for building the ministry of God.'} 
      CardSpan={<Link to='payment'><button className='cardSpanButton'>Pay Here</button></Link>} />
       {/*card 2*/}
        <InfoCard CardIcons={<img className='cardImage'  src={Bible} alt='logo'/>} 
         CardTitle={'Bible Studies'} CardInfo={'Join us for Bible Studies every Tuesday at 7 pm. We teach the undiluted word of God.'} 
         CardSpan={<button onClick={() => scrollToSection('TvScreen')} className='cardSpanButton'>Join Us</button>}/>
         {/*card 3*/}
        <InfoCard CardIcons={<img className='cardImage'  src={Youth} alt='logo'/>}  
        CardTitle={'Youth Service'} CardInfo={'If you want to be a part of our young people service, join us every Friday at 7 pm.'} 
        CardSpan={<button onClick={() => scrollToSection('TvScreen')}  className='cardSpanButton'>Join Us</button>}/>

        {/*info for video player*/}
        </div>
        <div style={{ width: '100%',justifyContent: 'center', margin: 'auto', textAlign: 'center', position: 'relative', bottom: '50px'}}>
            <h3 style={{margin: '50px 0 10px 0', color:'var(--primary-color)', fontSize: '30px'}}>Live Service </h3>
            <p className='videoinfoparagraph' >Join our live service Sundays at 11 am for Sunday morning service and Tuesdays at 7 pm for bible studies live from the sanctuary.</p>
        </div>
        {/*video screen*/}

        <div id='TvScreen'><TvScreen/></div>

       {/*section 1*/}
    <div className='section1'>
     <div><img className='pictureImage' src={Picture1} alt='logo'/></div>
     <div className='section1Text'>
        <h3 style={{marginBottom: '20px', color:'var(--primary-color)'}}>G-CEM Leaders</h3>
        <p style={{width:'100%',}}>Founders ministers Stavan m Whyte and wife, Hasanea B Whyte, decided if we are gonna answer the call of the lord on our lives, then we would search for the old landmark and walk there in, following God’s path as we lead his people.</p>
<Link to='/about'><button style={{ width:'100px', marginTop: '20px'}}>Learn More</button></Link>
     </div>
    </div>

    <NoticeBoard/>

    {/* selected section 2 */}
        <div className='section2'>
     
     <div className='section2Text'>
        <h3 style={{marginBottom: '20px', color:'var(--primary-color)'}}>Glory Carrier Evangelistic Ministeries</h3>
        <p style={{width:'100%'}}>We are not just a church, we give God glory in many different ways, including games, books, movies, music, audio drama, and a radio station. following God’s path as we lead his people. Via media, we are on small film makers, so we will spread the word through mini films, Stavan aka Stefan Peninsilyn is also a gospel artist, stage play writer, director/ actor, so we use all that gift and talent for the glory of God.</p>
    <button onClick={() => {window.location.href = 'https://glorycarriergospelcardgame.com/'}} style={{ width:'100px', margin: '20px 0 20px 0 '}}>Learn More</button>
     </div>
     <div className='slideshow'><Slideshow/></div>
    </div>



    {/*selected section 3*/}
    
    </div>
  )
}

export default Home