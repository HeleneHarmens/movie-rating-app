import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './movieoverview.css';
import Navigationbar from "../components/navbar"

const API = 'http://localhost:3000/';
const DATA = 'data';

class MovieOverview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
      componentDidMount() {
        fetch(API + DATA)
          .then(response => response.json())
          .then(data => this.setState({ data: data }));
      }

    render() {

        const { data } = this.state;

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <p>Titles</p>

                <ul>
                    {data.map(dat =>
                    <li key={dat.objectID}>
                        {dat.title}
                    </li>
                    )}
                </ul>                
                
            </React.Fragment >
        )
    }
}

export default MovieOverview;
