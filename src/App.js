import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NewJournal from './components/NewJournal';
import UpdateJournal from './components/UpdateJournal'
import SingleJournal from './components/SingleJournal';


function App() {
  
  
  return (
    <div className="App">
   
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
