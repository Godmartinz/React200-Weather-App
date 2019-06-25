import { connect } from 'react-redux';

function mapStoreToProps(store){
    return {
    cityName: store.searchBar.cityName,
    lat: store.searchBar.lat,
    lon: store.searchBar.lon,
    temp: store.searchBar.temp,
    pressure: store.searchBar.pressure,
    lowTemp: store.searchBar.lowTemp,
    HiTemp: store.searchBar.HiTemp,
    Wind: store.searchBar.Wind,
    Humidity: store.searchBar.Humidity
    }
}