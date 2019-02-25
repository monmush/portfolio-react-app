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
                <h1 className="Heading">About me</h1>
                <WhenInView>
                    {({isInView}) => 
                        <div>
                        <RevealR hide={!isInView}>
                            Hmm, so I guess this page is all about me.
                            As you probably know, my name is Minh. I’m a 
                            last-year student from South-Eastern Finland UAS. </RevealR>
                        <RevealL hide={!isInView}>Wanna know about some of my talents?</RevealL>
                        <RevealR hide={!isInView}>
                        I can make 600+ pieces of maki in 2 hours. Yea, 
                        that’s true, I used to work in a sushi restaurant 
                        and I definitely know a thing or two about sushi
                        </RevealR>
                        <RevealR hide={!isInView}>
                        And guess what, my second job is at Hill Dumplings - top 
                        10 best new restaurant in Helsinki. So mate, I can
                        definitely treat you well with some delicious food :D 
                        </RevealR>
                        <RevealR hide={!isInView}>
                        </RevealR>
                        
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
