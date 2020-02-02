import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>
                <div className="Home h-100">
                    <h3>See overview over movies <a href="/titles">HERE</a></h3>
                </div >
            </React.Fragment>
        );
    }
}

export default Home;
