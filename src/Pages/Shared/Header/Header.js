import React from 'react';
import { Container, Navbar,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import "./Header.css";
const Header = () => {
    return (
        <div>
               <Navbar expand="lg" style={{marginBottom:"15px"}}className="navbar" >
                <Container >
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" >
                        <NavLink className="navlink" to="/home" >Home</NavLink>
                        
                        <NavLink className="navlink" to="/allblogs" >blogs</NavLink>
                       
                      
                        <NavLink className="navlink"  to="/login"  > Log in</NavLink>
                
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;