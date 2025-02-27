
import { CSSProperties } from 'react';
import QRCode from '../assets/images/paymentImg.jpg';
const paymetPage: CSSProperties = {
    width: '100%', 
    justifyContent: 'center', 
    margin: 'auto', 
    padding: '80px 0 0 0', 
    textAlign: 'center', 
    position: 'relative', 
    bottom: '50px'
};
const QRCodeImg: CSSProperties = {
    width: '50%',
    height: '60%',
}

function payment() {
  return (
    <div style={ paymetPage } >

<h2 className='aboutTitle'>Tithes and Offering</h2>
<p style={{margin: '0 0 20px 0'}}>Please use the QR code below to make a payment PayPal</p>

<img style={QRCodeImg} src={QRCode }alt="paypal" />
    </div>
  )
}

export default payment