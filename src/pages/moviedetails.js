import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './moviedetails.css';
import Navigationbar from "../components/navbar"

const API = 'http://localhost:3000/';
const DATA = 'data/';

class MovieDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          info: [],
          genreslist: [],
        };
      }
      componentDidMount() {
        const { match: { params } } = this.props;
        fetch(API + DATA + params.id)
          .then(response => response.json())
          .then(data => this.setState({ info: data }));

        fetch(API + DATA + params.id)
          .then(response => response.json())
          .then(data => this.setState({ genreslist: data }));
      }

    render() {
        
        const { info, genreslist } = this.state;

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>
                <div className="Details d-flex flex-row h-100" id="genres">
                    <div className="list-group-item d-flex justify-content-left w-100">
                    <div id="posterDetails">
                            <img src={info.posterurl} alt="Posterimage"></img>
                        </div>
                        
                        <div id="movieDetails">
                            <h2><b>{info.title} ({info.year})</b></h2>
                            <h5><b>Rating:</b> {info.ratings}</h5>
                            <h6><b>Genre:</b> {info.genres}</h6><br/>
                            <p>{info.storyline}</p>
                            <p><b>Actors:</b> {info.actors}</p>

                        </div>
                    </div>
                        
                </div>
                               
                
            </React.Fragment >
        )
    }
}

function getAvg(ratings) {
    var avg = ratings.reduce( (a,b) => a + b) / ratings.length;
    return avg.toFixed(2);
}

export default MovieDetails;
