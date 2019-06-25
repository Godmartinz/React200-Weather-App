import React, { Component } from "react";
import { getWeather } from "./searchBarActions";

export default class searchBar extends Component {
  constructor(props){
    super(props);
    
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
  }

  handleCityInput(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getCity(value));
  }

  handleGetWeather(){
    const { dispatch }= this.props;
    const { value }= event.target;
    dispatch(getWeather(value));
  }

  render() {
    return (
      <div className="input-group col-md-12  mb-3">
      
        <input
          type="text"
          className="form-control"
          placeholder="Choose a City"
          aria-label="city-choice"
          onChange={ this.handleCityInput }
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary bg-primary text-white" type="button" onClick={ this.handleGetWeather }>
            Button
          </button>
        </div>
      </div>
    );
  }
}
