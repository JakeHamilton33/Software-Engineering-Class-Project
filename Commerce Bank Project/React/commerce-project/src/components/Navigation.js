import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

 
const Menu = () => {

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
      <div>
        <span style={{display: "inline", width: "auto", margin:"auto"}}>
        <h1>Commerce Bank Open Source Projects</h1>
        <Nav className="justify-content-center" variant="pills">
          <Nav.Item>
            <Link to = "/allProjects" onClick={() => window.location.href="/allProjects"} className = "nav-link"> Projects </Link> 
          </Nav.Item>
          <Nav.Item>
            <Link to = "/submitProject" onClick={() => window.location.href="/submitProject"} className="nav-link"> Submit Project Application </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to = "/" style={{color: 'red'}} onClick={() => {

              sessionStorage.removeItem('token');
              sessionStorage.removeItem('userName');
              window.location.reload(false);}
              } className ="nav-link"> Logout </Link>
          </Nav.Item>
        </Nav>
        </span>
      </div>
    );
};
export default Menu;