import React from 'react';
import {Container} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './Navbar.css';

const NavigationBar = props => {
    const SiteLinks = props.SiteLinks;
    const LinksList = SiteLinks.map((link , index)=> {
        return (
            index === 0 ? (
                <li> <NavLink exact to={link.url}> {link.text} </NavLink> </li>
              ): (
                <li> <NavLink to={link.url}> {link.text} </NavLink></li>
              )
        )
    })
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
            <Container>
            <Navbar.Brand href="#home"> {props.Brand} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    {LinksList}
                  </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

function MapStateToProps(state)  {
    return {
        SiteLinks: state.SiteLinks,
        Brand: state.LogoName,
    }
  }
  
  export default connect(MapStateToProps)(NavigationBar);