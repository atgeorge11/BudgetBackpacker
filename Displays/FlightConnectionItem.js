import React from 'react';
import { Button, View, Text } from 'react-native';
import formatDate from './formatDate';

export default FlightConnectionItem = props => (
    <View>
        <Text>Departure: {props.item.departure.airport}</Text>
        <Text>{formatDate(props.item.departure.time)}</Text>
        <Text>Arrival: {props.item.arrival.airport}</Text>
        <Text>{formatDate(props.item.arrival.time)}</Text>
    </View>
)
