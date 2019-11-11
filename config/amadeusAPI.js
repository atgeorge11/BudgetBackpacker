import config from './config';

async function getFlightInfoAsync() {
    try {
        let response = await fetch("https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + config.API_TOKEN
            }
        })
        let responseJson = await response.json();
        return [null, responseJson];
    } catch (err) {
        return [err, null]
    }
}

let amadeusAPI = {
    getFlightInfoAsync: getFlightInfoAsync
}

export default amadeusAPI;