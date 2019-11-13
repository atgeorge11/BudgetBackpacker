import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import formatDate from './formatDate';

export default FlightConnectionItem = props => (
    <View style={styles.container}>
        <View style={styles.connectionInfo}>
            <View style={styles.subLine}>
                <Text style={styles.subLine1}>Departure: {props.item.departure.airport}</Text>
                <Text>{formatDate(props.item.departure.time)}</Text>
            </View>
            <View style={styles.subLine}>
                <Text style={styles.subLine1}>Arrival: {props.item.arrival.airport}</Text>
                <Text>{formatDate(props.item.arrival.time)}</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        borderRadius: 10,
        marginLeft: 50,
        marginRight: 10,
        marginTop: 5
    },
    connectionInfo: {
        margin: 10
    },
    subLine: {
        flexDirection: "row",
    },
    subLine1: {
        fontWeight: "bold"
    }
})