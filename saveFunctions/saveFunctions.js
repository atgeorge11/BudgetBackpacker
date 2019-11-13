// import AsyncStorage from '@react-native-community/async-storage'
import { Alert, AsyncStorage } from 'react-native';

// const getItineraries = (callback) => {
//     AsyncStorage.getItem("itineraries")
//     .then((value) => {
//         if (value === undefined) {
//             Alert.alert("Value === undefined")
//             AsyncStorage.setItem("itineraries", "[]")
//             .then (() => {
//                 callback(null, []);
//             })
//             .catch (err => {
//                 Alert.alert("Error saving to storage: " + err);
//                 callback(err, null);
//             })
//         } else {
//             callback(null, JSON.parse(value));
//         }
//     })
//     .catch ((err) => {
//         Alert.alert(err);
//         callback(err, null);
//     })
// }

// const getItinerary = (itinerary) => {
//     AsyncStorage.getItem(itinerary)
//     .then (value => {
//         if (value) {
//             return JSON.parse(value);
//         } else {
//             return null;
//         }
//     })
//     .catch (err => {
//         Alert.alert("Error retrieving from storage: " + err);
//     })
// }

// const createItinerary = (itinerary) => {
//     AsyncStorage.setItem("itineraries", JSON.stringify(itinerary));
//     getItineraries((err, itineraries) => {
//         if (err) {
//             Alert.alert("Error accessing storage: " + err);
//             return;
//         }
//         itineraries = JSON.parse(itineraries);
//         itineraries.push(itinerary);
//         AsyncStorage.setItem("itineraries", JSON.stringify(itineraries))
//         .then (() => {
//             Alert.alert("Saved");
//         })
//         .catch(err => {
//             Alert.alert("Error saving to storage: " + err);
//         })
//     })
// }

const getRecords = (callback) => {
    AsyncStorage.getItem("items")
    .then ((items) => {
        if (items === undefined) {
            callback(null, null);
        } else {
            items = JSON.parse(items);
            callback(null, items);
        }
    })
    .catch ((err) => {
        callback(err, null);
    })
}

const createRecord = (record, callback) => {
    getRecords ((err, records) => {
        if (err) {
            callback(err);
        } else {
            let firstRecord = {
                departure: {
                    time: record.departure.time,
                    airport: record.departure.airport
                },
                arrival: {
                    time: record.arrival.time,
                    airport: record.arrival.airport
                },
                carrierCode: record.carrierCode
            };
            if (records) {
                firstRecord.id = records.length;
                records.push(firstRecord);
            } else {
                firstRecord.id = 0;
                records = [firstRecord];
            }
            for (let i = 0; i < record.connections.length; i++) {
                records.push({
                    departure: {
                        time: record.connections[i].departure.time,
                        airport: record.connections[i].departure.airport
                    },
                    arrival: {
                        time: record.connections[i].arrival.time,
                        airport: record.connections[i].arrival.airport
                    },
                    carrierCode: record.carrierCode,
                    id: firstRecord.id + 1 + i
                })
            }
            records = JSON.stringify(records);
            AsyncStorage.setItem("items", records)
            .then (() => {
                callback(null);
            })
            .catch (err => {
                callback(err);
            })
        }
    })
}

const deleteRecord = (id, callback) => {
    getRecords ((err, records) => {
        if (err) {
            callback(err);
        } else {
            for (let i = 0; i < records.length; i++) {
                if (records[i].id === id) {
                    records.splice(i, 1);
                    AsyncStorage.setItem("items", JSON.stringify(records))
                    .then (() => {
                        callback(null);
                    })
                    .catch (err => {
                        callback(err);
                    }) 
                }
            }
        }
    })
}

export default saveFunctions = {
    getRecords: getRecords,
    createRecord: createRecord,
    deleteRecord: deleteRecord
}