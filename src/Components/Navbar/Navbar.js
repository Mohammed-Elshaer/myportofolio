import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection,Logo,LogoText,ListItem,UlList} from './Navbarstyle.js';



function Navbar(props) {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText> Profile</LogoText>
                </Logo>
               
                <UlList>
                    <ListItem><Link className='Anchor' to="/">Home</Link></ListItem>
                    <ListItem><Link className='Anchor' to="/Work">Work</Link></ListItem>
                    <ListItem><Link className='Anchor' to="/Portfolio">Resume</Link></ListItem>
                    <ListItem><Link className='Anchor' to="/Profile">About</Link></ListItem>
                    <ListItem><Link className='Anchor' to="/contact">Contact</Link></ListItem>
                </UlList>
            </div>
        </NavbarSection>
    );
}

export default Navbar;