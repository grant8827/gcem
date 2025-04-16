import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React  from 'react'
import Drawer from 'react-modern-drawer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/logo.jpg'
import { Link,  } from 'react-router-dom'
import '../App.css'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
function NavDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const closeDrawer = () => {
        setIsOpen(false)
    }


const barsIcon = {
    fontSize: '30px',
    color: 'var(--primary-color)'
}



    return (
        <div>
            <button style={{backgroundColor: 'transparent'}} onClick={toggleDrawer}><FontAwesomeIcon style={barsIcon} icon={faBars} /></button>
            <Drawer
                style={{width: '200px',
                     height: '100%', backgroundColor: 'var(--secondary-color)', 
                     color: 'var(--primary-color)'}}
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className='drawerLinks'>
                    <img className='drawerNavImage' src={logo} alt='logo'/>
                    <ul className='drawerListLink'>
                    <li onClick={closeDrawer}><Link  to='/'>Home</Link></li>
                    <li onClick={closeDrawer}><Link  to='/about'>About</Link></li>
                    <li onClick={closeDrawer}><Link  to='/services'>Services</Link></li>
                    <li onClick={closeDrawer}><Link  to='/contact'>Contact</Link></li>
            </ul>

                </div>
            </Drawer>  
        </div>
    )
}
export default NavDrawer