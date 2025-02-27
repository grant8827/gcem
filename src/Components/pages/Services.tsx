import ServiceCards from '../ServiceCards'
import picture6 from '../../assets/images/picture6.png'
import Image1 from '../../assets/images/bgImage.jpg'
import Image2 from '../../assets/images/bible.png'
import Image3 from '../../assets/images/baptism.png'
import '../../App.css'
function Services() {
  return (
    <div className='ContactPage'> 
    <h3 className='aboutTitle'>Services</h3>
    <div className='servicePage'>
    
      <ServiceCards 
      Img={Image1} 
      CardTitle='Sunday Morning Divine Service' 
      CardInfo='Join us for sunday morning divine service 11 am. We teach the undiluted word of God.'
      />
       <ServiceCards 
      Img={Image2} 
      CardTitle='Bible Studies' 
      CardInfo='Join us for Bible Studies every Tuesday at 7 pm. We teach the undiluted word of God.'
      />
       <ServiceCards 
      Img={Image3} 
      CardTitle='Baptism' 
      CardInfo='Join us for Bible Studies every Tuesday at 7 pm. We teach the undiluted word of God.'
      />
       <ServiceCards 
      Img={picture6} 
      CardTitle='Baby Christening' 
      CardInfo='Join us for Bible Studies every Tuesday at 7 pm. We teach the undiluted word of God.'
      />
      
    </div>
    <div className='emptySpace' ></div>
    </div>
  )
}

export default Services