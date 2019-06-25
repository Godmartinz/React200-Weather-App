import { getWeather } from "./actions/searchBarActions.js";

let DefaultState = {
    cityName:"",
    lat:0.00,
    lon:0.00,
    temp:0.00,
    pressure:0,
    lowTemp:0.00,
    hiTemp:0.00,
    Wind:0.00,
    humidity:0
}

export default function SearchBarReducer(state= DefaultState, action){
    const { type, payload } = action;

    switch (type){
        case 'GET_WEATHER':{
            return{
                ...state,
                cityName: payload.data.name,
                lat: payload.coord.lat,
                lon: payload.coord.lon,
                temp:payload.weather.temp,
                pressure:payload.weather.pressure,
                lowTemp:payload.weather.temp_min,
                hiTemp:payload.weather.temp_max,
                wind: payload.wind.speed,
                humidity:payload.weather.humidity
            }
        }

        case 'GET_CITY': {
            const { city } = action.payload;
            return {
                ...state,
                
            }
        }
        default :
        return state;
    }
}