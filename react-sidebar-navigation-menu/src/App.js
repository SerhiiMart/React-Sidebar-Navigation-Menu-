import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
