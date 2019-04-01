import React,{Component} from 'react';
import Conversation from '../components/Conversation';



class About extends Component{
    
    render(){
        return(
            <div className="Aboutme">
            
            <div className="Background">
                <h1 className="Heading">About me</h1>
                <Conversation/>
            </div>
            </div>
            
        )
    }
        
}

export default About;
