import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Navbar from './Navbar';
import AddContact from '../pages/AddContact'
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatti' element={<Contacts />} />
          <Route path='/nuovo-contatto' element={<AddContact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
