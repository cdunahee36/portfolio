import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Biography from './components/Biography';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Personal from './components/Personal';
import Projects from './components/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <Router>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/biography" component={Biography} />
            <Route exact path="/contact" component={Personal}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/email" component={ContactMe}/>
          </Switch>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
