const axios= require('axios');


export function getWeather(city){
   return{
        type: "GET_WEATHER",
        payload: new Promise(axios.get(`/weather/${city}`))
    };
};
export function getCity(city){
    return {
        type: 'GET_CITY',
        payload: { city }
    }
}
