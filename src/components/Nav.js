import React from 'react';
import '../style/Main.scss';
import {Link} from 'react-router-dom';

const Nav = ()=> { 
    return(
        <div className="Nav">
         <ul> 
             <li><Link className="Link" to="/">Home</Link></li>
             <li><Link className="Link" to="/about">About</Link></li>
             <li><Link className="Link" to="/">Skills</Link></li>
             <li><Link className="Link" to="/">Projects</Link></li>
             <li><Link className="Link" to="/">Resume</Link></li>
         </ul>
        </div>
    )
};

export default Nav;