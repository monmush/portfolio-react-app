import React from 'react'
import Slider from "react-slick";

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

const Skills = () => {
    return(
        <div class = "Skills">
            <div class="Background">
            <h1 className="Heading">Skills</h1>
            
            <h1>technical skills</h1>
            
            <Slider {...settings} className="Slider">
                <div>
                    <h2>Front-end Technologies</h2>
                    <span><i class="fab fa-html5"></i></span>
                    <span><i class="fab fa-css3-alt"></i></span>
                    <span><i class="fab fa-js"></i></span>
                    <span><i class="fab fa-sass"></i></span>
                    <span><i class="fab fa-react"></i></span>
                </div>
                <div>
                    <h2>Back-end Technologies</h2>
                    <span><i class="fab fa-node"></i></span>
                    <span><i class="fab fa-php"></i></span>
                </div>
                <div className="Flex">
                    <div>
                        <h2>Prototyping</h2>
                        <span><i class="fab fa-adobe"></i></span>
                    </div>
                    <div>
                        <h2>Version Control</h2>
                        <span><i class="fab fa-github"></i></span>
                    </div>
                    
                </div>
            
            </Slider>
            </div>
            
        </div>
    )
}

export default Skills;
