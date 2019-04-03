import React,{Component} from 'react'
import {RevealL,
    RevealR} 
from '../actions/RevealP';
import WhenInView from '../components/WhenInView';
import ParallaxImage from 'react-image-parallax2';




class conversation extends Component{
    styleChangHandler = (n)=>{
        const nameOfClasses = "Group " + n;
        const nameOfGifs = "Gif " + n;
        document.getElementsByClassName(nameOfClasses)[0].style.visibility = "visible";
        document.getElementsByClassName(nameOfGifs)[0].style.visibility = "hidden";  
        
    }
    render(){
        return(
            <WhenInView>
                        {({isInView}) => 
                            <div>
                                <RevealL hide={!isInView}>
                                Hi, so I guess this page is all about me. As you probably know, my name is Minh (not "mean"). I come from Vietnam. And I am about to graduate from South-Eastern Finland University of Applied Sciences.
                                </RevealL>
                                
                                <RevealR hide={!isInView} onClick={()=>this.styleChangHandler("One")} className="Questions">
                                Tell me something about you Minh, what is your favorite music?
                                <img alt="" class="Gif One" src={ require('../assets/images/giphy.gif') } />
                                </RevealR>
                                
                                <div className="Group One">
                                    <RevealL hide={!isInView}  >
                                    Hm, this might surprise you, but I used to be an amateur rapper in Vietnam with more than 1 million plays in total on SoundCloud. Here is one of my favorite track 
                                    </RevealL>
                                    <RevealL hide={!isInView}  >
                                    <iframe title="soundcloud" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298198742&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                                    </RevealL>
    
                                    <RevealR hide={!isInView}  onClick={()=>this.styleChangHandler("Two")} className="Questions" >
                                    Awesome, What about sports? Do you play any?
                                    <img alt="" class="Gif Two" src={ require('../assets/images/giphy.gif') } />
                                    </RevealR>
                                </div>
                                
                                <div className="Group Two">
                                    <RevealL hide={!isInView}  >
                                    I am a fan of Football since I was in grade 3. My favorite club is Chelsea FC.  Throughout secondary and high school, I played several unprofessional football tournaments. And one of them is the XAMK tournament in Mikkeli
                                    </RevealL>
                                    <RevealL hide={!isInView}  >
                                    <ParallaxImage reduceHeight={1/4} alt="" class="Images" src={ require('../assets/images/football.jpg') } />
                                    </RevealL>
    
                                    <RevealR hide={!isInView}  onClick={()=>this.styleChangHandler("Three")} className="Questions">
                                    Sounds cool, hey Minh so what are your hobbies? 
                                    <img alt="" class="Gif Three" src={ require('../assets/images/giphy.gif') } />
                                    </RevealR>
    
                                </div>
                                
                                <div className="Group Three">
                                    <RevealL hide={!isInView} >
                                    I love cooking.  I can make 600+ pieces of sushi in 2 hours. Yea, 
                                    that’s true, I used to work in a sushi restaurant 
                                    and I definitely know a thing or two about sushi.   
                                    </RevealL>
    
                                    <RevealL hide={!isInView} >
                                    <ParallaxImage reduceHeight={1/4} alt="" class="Images" src={ require('../assets/images/dumpling.jpg') } />
                                    </RevealL>
                                    
                                    <RevealL hide={!isInView} >
                                    My second job is at Hills Dumplings - the restaurant was named one of the best new restaurant in Helsinki 2018 (according to myhelsinki.fi). So mate, I can definitely treat you well with some delicious food :D 
                                    </RevealL>
    
                                    <RevealR hide={!isInView}  onClick={()=>this.styleChangHandler("Four")} className="Questions">
                                    And I wonder why do you want to become a developer?
                                    <img alt="" class="Gif Four" src={ require('../assets/images/giphy.gif') } />
                                    </RevealR>
                                </div>
                                
                                <div className="Group Four">
                                    <RevealL hide={!isInView} >
                                    That's an interesting question. To be honest, I don't learn to program just to get to Google, Facebook or some tech giant company. I want to learn programming to build something meaningful that help real people with real problems. It's just that simple :D 
                                    </RevealL>
                                    <div className="Space">

                                    </div>
                                </div>
                            </div>
                            
                        }
                    </WhenInView>
        
        )

    }
}

export default conversation;

