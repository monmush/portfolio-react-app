import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './About';
import Home from './Home';
import Nav from '../components/Nav';
import '../style/Main.scss';
import Skills from './Skills';
import ScrollToTop from 'react-router-scroll-top';
import Social from '../components/Social';

class App extends Component{
    render(){
        return(
            <Router>
                <ScrollToTop>
                    <div className="App">
                        <Nav/>
                        <Social/>
                        <Route path="/" exact component={Home}/>             
                        <Route path="/about"  component={About}/> 
                        <Route path="/skills"  component={Skills}/>             
                    </div> 
                </ScrollToTop>
           
          </Router>
        )
    }
}

export default App;