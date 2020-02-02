import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './movieoverview.css';
import Navigationbar from "../components/navbar"

const API = 'http://localhost:3000/';
const DATA = 'data';
const TITLES = '/titles/'

class MovieOverview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          info: [],
        };
      }
      componentDidMount() {
        fetch(API + DATA)
          .then(response => response.json())
          .then(data => this.setState({ info: data }));
      }

    render() {

        const { info } = this.state;
        

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="Overview d-flex flex-row " id="genres">
 
                <ul className="w-100">
                    {info.map(movie =>
                    <li key={movie.id} className="list-group-item d-flex justify-content-left">
                        <div id="poster">
                            <img src={movie.posterurl} alt="Posterimage"></img>
                        </div>
                        
                        <div>
                            <h3><a href={TITLES + movie.id}>{movie.title} ({movie.year})</a></h3>
                            <h5>Rating: <b>{getAvg(movie.ratings)}</b></h5>
                        </div>
                        
                    </li>
                    )}
                </ul> 
                </div>
                               
                
            </React.Fragment >
        )
    }
}

function getAvg(ratings) {
    var avg = ratings.reduce( (a,b) => a + b) / ratings.length;
    return avg.toFixed(2);
}

function hello() {
    return console.log("Helo!");
}

export default MovieOverview;
