import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Navbar from './Navbar';
import AddContact from '../pages/AddContact';
import Update from './Update';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contatti' element={<Contacts />} />
          <Route path='/nuovo-contatto' element={<AddContact />} />
          <Route path='/modifica-contatto/:id' element={<Update/>}/> {/** ROUTE TO DISPLAY THE UPDATE-CONTACT FORM */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
