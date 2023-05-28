import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import Journals from './components/Journals'
// import Journal from './components/Journal'



function App() {
  
  
  return (
    <div className="App">
      <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        {/* <Route path='/journals'/> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
