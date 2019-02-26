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
                        <RevealL hide={!isInView}>
                        Hi, so I guess this page is all about me. As you probably know, my name is Minh (not "mean"). I come from Vietnam. And I am about to graduate from South-Eastern Finland University of Applied Sciences.
                        </RevealL>
                        
                        <RevealR onClick={this.clickedHandler} hide={!isInView}>
                        Tell me something about you Minh, what is your favorite music?
                        </RevealR>
                        
                        <RevealL hide={!isInView} style={styleDiv} hide={this.state.isClicked}>
                        Hm, this might surprise you, but I used to be an amateur rapper in Vietnam with more than 1 million plays in total on SoundCloud. Here is one of my favorite track 
                        </RevealL>

                        <RevealR hide={!isInView} onClick={this.clickedHandler} >
                        Awesome, What about sports? Do you play any?
                        </RevealR>

                        <RevealL hide={!isInView}>
                        I am a fan of Football since I was in grade 3. My favorite club is Chelsea FC.  Throughout secondary and high school, I played several unprofessional football tournaments. And one of them is the XAMK tournament in Mikkeli
                        </RevealL>

                        <RevealR hide={!isInView}>
                        Sounds cool, hey Minh so what are your hobbies? 
                        </RevealR>

                        <RevealL hide={!isInView}>
                        I love cooking.  I can make 600+ pieces of sushi in 2 hours. Yea, 
                        that’s true, I used to work in a sushi restaurant 
                        and I definitely know a thing or two about sushi.   
                        </RevealL>
                        
                        <RevealL hide={!isInView}>
                        My second job is at Hills Dumplings - the restaurant was named one of the best new restaurant in Helsinki 2018 (according to myhelsinki.fi). So mate, I can definitely treat you well with some delicious food :D 
                        </RevealL>

                        <RevealR hide={!isInView}>
                        And I wonder why do you want to become a developer?
                        </RevealR>

                        <RevealL hide={!isInView}>
                        That's an interesting question. To be honest, I don't learn to program just to get to Google, Facebook or some tech giant company. I want to learn programming to build something meaningful that help real people with real problems. It's just that simple :D 
                        </RevealL>

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
