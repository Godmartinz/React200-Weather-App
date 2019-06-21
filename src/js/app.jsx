import React from 'react';
import { SearchHistory } from './searchHistory';
import { CityInfo } from './cityInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron"><h1>SDCS Weather Application</h1><h5>Always know if you'll need an umbrella!</h5>
        </div>
        <div>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Choose a City" aria-label="city-choice"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
        </div>
        <CityInfo/>
        <SearchHistory/>
      </div>
    );
  }
}
