import React, { CSSProperties } from 'react'
function TvScreen() {
    const tvScreen: CSSProperties = {
        width: '100%',
        height: '20%',
      textAlign: 'center',
       alignItems: 'center',
       alignContent: 'center',
       padding: '10px',
       position: 'relative',
       bottom: '50px',
       display: 'flex',
      flexWrap: 'wrap',
       margin:'20px',
       justifyContent: 'center',
    }
  return (
    
    <div style={tvScreen}>
<iframe className='streamBox'  id="streambox" src="https://streamjamz.tv/peninsilyn?embed=true&amp;hide=1" />
<iframe className='chatBox' id="chatbox" src="https://www6.cbox.ws/box/?boxid=820857&amp;boxtag=Lss8Ew&amp;tid=412&amp;tkey=b3b6abdeb4c062bd13b6c830efc67878"
 width="300PX" height="400px" allowTransparency allow="autoplay" frameBorder="0" 
 scrolling="auto"></iframe>	
    </div>
  )
}

export default TvScreen