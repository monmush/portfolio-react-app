import React,{Component} from 'react';
import '../style/Main.scss';
import {RevealL,
        RevealR} 
from '../actions/RevealP';
import WhenInView from '../components/WhenInView';


class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            isClicked: true,
            display: 'hidden',
            visibility: 'block'
        }
    }
    
    clickedHandler = () => {
        this.setState({display:'visible'})
        this.setState({isClicked: false})
        
        console.log(this.state.isClicked);
    }
    render(){
        const styleDiv = {
            visibility: this.state.display
        }   
        return(
       

            <div className="Background">
                <h1>This is about page!</h1>
                <WhenInView>
                    {({isInView}) => 
                        <div>
                        <RevealR hide={!isInView}>Aute ea aliquip consectetur esse eu laborum culpa minim ipsum. Ad esse proident consectetur tempor ullamco id aute irure adipisicing culpa. Nostrud mollit mollit laborum eu anim non.</RevealR>
                        <RevealL hide={!isInView}>Aute ea aliquip consectetur esse eu laborum culpa minim ipsum. Ad esse proident consectetur tempor ullamco id aute irure adipisicing culpa. Nostrud mollit mollit laborum eu anim non.</RevealL>
                        
                        
                        </div>
                    }
                </WhenInView>
                <button onClick={this.clickedHandler}>Click me</button>
                <RevealL style={styleDiv} hide={this.state.isClicked}>
                    Deserunt deserunt
                </RevealL>
                
            </div>
        )
    }
}

export default About;
