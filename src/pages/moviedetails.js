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
        };
      }
      componentDidMount() {
        const { match: { params } } = this.props;
        fetch(API + DATA + params.id)
          .then(response => response.json())
          .then(data => this.setState({ info: data }));
      }

    render() {
        
        const { info } = this.state;

        return (
            <React.Fragment>
                <Navigationbar></Navigationbar>

                {/* TODO: Make into a component! */}
                <div className="Details d-flex flex-row h-100">
                    <div className="list-group-item d-flex justify-content-left w-100">
                        {/* MOVIE POSTER IMAGE */}
                        <div id="posterDetails">
                            <img src={info.posterurl} alt="Posterimage"></img>
                        </div>
                        {/* MOVIE INFO */}
                        {/* TODO: 
                            - Use function to get average of ratings
                            - Create function to divide genres and actors by comma
                        */}
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

export default MovieDetails;
