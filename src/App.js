import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import NewJournal from './components/NewJournal';
import UpdateJournal from './components/UpdateJournal'
import ShowPage from './pages/ShowPage';


function App() {
  
  
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <img src='https://i.ibb.co/CPXd37m/diary-logo.png' width='100vmin' height='100vmin'/> */}
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/new' element={<NewJournal/>}/>
        <Route path='/:id' element={<ShowPage/>}/>
        <Route path='/:id/edit' element={<UpdateJournal/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
