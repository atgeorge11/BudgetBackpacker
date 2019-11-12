import React from 'react';
import { Button, View, Text } from 'react-native';
import FlightConnectionItem from './FlightConnectionItem';
import formatDate from './formatDate';

export default FlightItem = props => {
    let flightRecord = {
        price: props.item.offerItems[0].price.total,
        departure: {
            time: props.item.offerItems[0].services[0].segments[0].flightSegment.departure.at,
            airport: props.item.offerItems[0].services[0].segments[0].flightSegment.departure.iataCode
        },
        arrival: {
            time: props.item.offerItems[0].services[0].segments[0].flightSegment.arrival.at,
            airport: props.item.offerItems[0].services[0].segments[0].flightSegment.arrival.iataCode
        },
        carrierCode: props.item.offerItems[0].services[0].segments[0].flightSegment.carrierCode
    }
    let connections = props.item.offerItems[0].services[0].segments.slice(1);
    flightRecord.connections = connections.map(connection => {
        return {
            departure: {
                time: connection.flightSegment.departure.at,
                airport: connection.flightSegment.departure.iataCode
            },
            arrival: {
                time: connection.flightSegment.arrival.at,
                airport: connection.flightSegment.arrival.iataCode
            },
            carrierCode: connection.flightSegment.carrierCode
        }
    })
    return (
        <View>
            <View>
                <Text>{flightRecord.price}</Text>
            </View>
            <View>
                <View>
                    <Text>Departure: {flightRecord.departure.airport}</Text>
                    <Text>{formatDate(flightRecord.departure.time)}</Text>
                </View>
                <View>
                    <Text>Arrival: {flightRecord.arrival.airport}</Text>
                    <Text>{formatDate(flightRecord.arrival.time)}</Text>
                </View>
            </View>
            {flightRecord.connections.map((item, index) => {
                return (
                    <FlightConnectionItem item={item} key={index}/>
                )
            })}
        </View>
    )
}
