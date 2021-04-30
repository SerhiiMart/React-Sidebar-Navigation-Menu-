import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import ContactUs from './Components/Pages/Contact-us';
import SignUp from './Components/Pages/Sign-up';
import Marketing from './Components/Pages/Marketing';
import Consulting from './Components/Pages/Consulting';
import Development from './Components/Pages/Development';
import Design from './Components/Pages/Design';
import Home from './Components/Pages/Home';




function App() {
  return (
    <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/services" exact component={Services} />
         <Route path="/producs" exact component={Products} />
         <Route path="/contact-us" exact component={ContactUs} />
         <Route path="/sign-up" exact component={SignUp} />
         <Route path="/marketing" exact component={Marketing} />
         <Route path="/consulting" exact component={Consulting} />
         <Route path="/development" exact component={Development} />
         <Route path="/design" exact component={Design} />
       </Switch>
    </Router>
  );
}

export default App;
