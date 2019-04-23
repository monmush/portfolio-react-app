import React from 'react';
import '../style/Main.scss';
import {Link} from 'react-router-dom';

const Nav = ()=> { 
    return(
        <div className="Nav">
         <ul>
             <li><Link className="Link" to="/">Home</Link></li>
             <li><Link className="Link" to="/about">About me</Link></li>
             <li><Link className="Link" to="/skills">Skills</Link></li>
             <li><a target="_blank" rel="noopener noreferrer" href="https://novoresume.com/a/monteampdp.1">My resume</a></li>
         </ul>
        </div>
    )
};

export default Nav;