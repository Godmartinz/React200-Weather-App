import React from 'react';
import SearchBar from './components/searchBar/searchBar';
import CityInfo from './components/cityInfo/cityInfo';
import SearchHistory from './components/searchHistory/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron"><h1>SDCS Weather App</h1><h5>Always know if you will need an umbrella</h5></div>
        <div className='container'>
          <SearchBar/>
          <div className="container"></div>
          <CityInfo/>
          <SearchHistory/>

        </div>
      </div>
    );
  }
}
