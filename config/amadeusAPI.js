import config from './config';
import formatDate from './formatDate';

async function getFlightInfoAsync(params) {
    let url = "https://test.api.amadeus.com/v1/shopping/flight-offers"
        + "?origin=" + params.origin
        + "&destination=" + params.destination
        + "&departureDate=" + formatDate(params.departureDate)
        + "&adults=" + params.adults
        + "&children=" + params.children
        + "&infants=" + params.infants
        + "&seniors=" + params.seniors
        + "&maxPrice=" + params.maxPrice.substring(1);
        + "&currency=USD"
        + "&max=" + params.max;
     try {
        let response = await fetch(url, {
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