import { Link } from "react-router-dom";

export function BottomHeader() {
    return (
        <div className='header' >
      <div className='headerStyle' >
          <div className='headerText'>
          <h2  className="headerTitle" >
              Glory Carrier Evangelistic Ministries
              </h2>
          <div className="headerParagraph" ><p style={{margin:'auto', width:'50%'}}>
          Glory carrier evangelistic ministries (G-CEM) is a gospel ministry where we put the word of God in action, not just speak it.</p>
                 </div> 
          <Link to='/about'><button style={{margin:'50px 0 0 0', width:'200px'}}>Learn More</button></Link>
              </div>
     
              </div>
              </div>
    )
  }