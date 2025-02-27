
import './App.css'
import HeaderNavBar from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Footer from './Components/Footer';
import Contact from './Components/pages/Contact';
import Payment from './Components/payment';
function App() {
 
  return (
    <Router>
      <HeaderNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
