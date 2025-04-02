import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatti' element={<Contacts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
