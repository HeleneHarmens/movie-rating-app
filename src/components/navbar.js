import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

class Navigationbar extends React.Component {

    render() {

        return (
            <>
                <header className="App-header">
                    <h1 className="topNavTitle">Movie Rating Application</h1>
                </header>
                <Navbar bg="dark" variant="dark">
                    
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink exact activeClassName="active" className="btn nav" activeStyle={{ color: 'white' }} to="/">Home</NavLink>
                        <NavLink exact activeClassName="active" className="btn nav" activeStyle={{ color: 'white' }} to="/titles">Movie Overview</NavLink>
                    </Nav>

                    <Navbar.Text>
                        - Helene H. Harmens
                    </Navbar.Text>  
                </Navbar>
            </>
        )
    }
}

export default Navigationbar;
