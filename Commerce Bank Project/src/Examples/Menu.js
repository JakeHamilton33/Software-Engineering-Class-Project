import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
 

 
const Menu = () => {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
 
    <Nav variant="pills" >
      <Nav.Item>
        <Link to = "/home" className = "nav-link"> Home </Link> 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item>
        <Link to = "/write" className="nav-link"> Create </Link>
      </Nav.Item>

      <Nav.Item>
        <Link to = "/read" className="nav-link"> Read </Link>
      </Nav.Item>



    </Nav>
       
    );
};

export default Menu;