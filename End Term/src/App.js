
import './App.css';
import Form from './components/Contact'
import Lists from './components/Lists'
import Thank from './components/Thank'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>  
          <Route path='/' element={<Home />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/thank' element={<Thank />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/lists' element={<Lists />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;