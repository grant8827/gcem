
import { CSSProperties } from 'react';
import QRCode from '../assets/images/paymentImg.jpg';
import cashapp from '../assets/images/cash app.jpeg';
import zelle from '../assets/images/zelle.jpeg';
const paymetPage: CSSProperties = {
    width: '100%', 
    justifyContent: 'space-around', 
    margin: 'auto', 
    padding: '80px 0 0 0', 
    textAlign: 'center', 
   
};
const QRCodeImg: CSSProperties = {
    width: '30%',
    height: '30%',
    gap: '20px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    justifyContent: 'space-around',
}

function payment() {
  return (
    <div style={ paymetPage } >
<div>
  <h2 className='aboutTitle'>Tithes and Offering</h2>
<p style={{margin: '0 0 20px 0'}}>At Glory Carrier Evangelistic Ministries, every seed sown helps us fulfill the Great Commission—spreading the Gospel, reaching the lost, and transforming lives by the power of Jesus Christ. <br/>Please use the QR code below to make a payment PayPal</p>
</div>

<div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around', margin: 'auto', textAlign: 'center', gap: '20px'}}>
<img style={QRCodeImg} src={QRCode }alt="paypal" />
<img style={QRCodeImg} src={cashapp }alt="cashapp" />
<img style={QRCodeImg} src={zelle }alt="zelle" />
</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
  )
}

export default payment