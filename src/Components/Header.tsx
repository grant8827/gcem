import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/images/logo2.png';
import NavDrawer from './drawer';

function HeaderNavBar() {
   
  return (
    <div>
        <nav className='navBar'>
            <img className='logostyle' src={logo} alt='logo'/>
            <ul className='navLink' >
              <Link to='/'><li>Home</li></Link>  
              <Link to='/about'><li>About</li></Link>  
                <Link to='/services'><li>Services</li></Link>
               <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <div className='drawerNav'><NavDrawer/></div>
            <Link to='/payment'><button>Tithing & Offering</button></Link>
        </nav>
       
    </div>
  )
}

export default HeaderNavBar

/*export function Headerbody() {
  return (
    <div className='headerStyle' >
        <div className='headerText'>
        <h2>Hello, world</h2>
        <p>Welcome to our Church</p>
            </div>
   
            </div>
  )
}*/
