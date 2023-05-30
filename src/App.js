import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import Journals from './components/Journals'
import SingleJournal from './components/SingleJournal'
import NewJournal from './components/NewJournal';
import UpdateJournal from './components/UpdateJournal'


function App() {
  
  
  return (
    <div className="App">
      <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/new' element={<NewJournal/>}/>
        <Route path='/:id' element={<SingleJournal/>}/>
        <Route path='/:id/edit' element={<UpdateJournal/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
