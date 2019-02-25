import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from './About';
import Home from './Home';
import Nav from '../components/Nav';
import '../style/Main.scss';

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                <Nav/>   
                <Route path="/" exact component={Home}/>             
                <Route path="/about"  component={About}/>             
            </div>  
          </Router>
        )
    }
}

export default App;