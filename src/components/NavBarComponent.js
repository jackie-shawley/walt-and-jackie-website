import React, { useState }  from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


function NavBar() {

const [toggle, setToggle] = useState(false)

    return (  
        <div>
            <Navbar sticky='top' expand='md' className='navbar'>
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" style={{ fontFamily:'Fredericka The Great', fontSize: '3rem', color: '#A3956D' }}>Walt &amp; Jackie</Navbar.Brand>
                    <NavbarToggle onClick={() => setToggle(!toggle)} />
                    <Nav>
                        <Nav.Link href='#home' className='nav-link' style={{ color: 'white', paddingRight: 20}}>Home</Nav.Link>
                        {/* <Nav.Link href='#music' className='nav-link' style={{ color: 'white', paddingRight: 20}}>Music</Nav.Link>
                        <Nav.Link href='#contact' className='nav-link' style={{ color: 'white', paddingRight: 20}}>Contact Us</Nav.Link> */}
                    </Nav>
                    
                        
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;