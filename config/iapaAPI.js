async function getCityCode(city) {
    let apiCode = "7b627e-7822d1";
    let url = "http://aviation-edge.com/v2/public/autocomplete?key=7b627e-7822d1&city=" + city;
    try{
        let response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + apiCode
            }
        })
        let responseJson = await response.json();
        let cityCode = responseJson.cities[0].codeIataCity;
        return cityCode

    } catch (err) {
        return null;
    }
}

let iapaAPI = {
    getCityCodeAsync: getCityCode
}

export default iapaAPI;