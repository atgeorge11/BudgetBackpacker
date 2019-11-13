import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import saveFunctions from '../saveFunctions/saveFunctions';
import formatDate from './formatDate';

export default SavedFlightEntry = props => {
    let formattedDeparture = formatDate(props.item.departure.time);
    let formattedArrival = formatDate(props.item.arrival.time);
    let [departDate, departTime, departAMPM] = formattedDeparture.split(" ");
    let [arrivalDate, arrivalTime, arrivalAMPM] = formattedArrival.split(" ");
    return (
        <TouchableOpacity
            onPress={() => {
                Alert.alert("Delete this event?", null, [
                    {text: "Cancel", style: "cancel"},
                    {text: "Okay", onPress: () => {
                        saveFunctions.deleteRecord(props.item.id, (err) => {
                            if (err) Alert.alert("There was an error: " + err);
                            props.rerender();
                        });
                    }}
                ])
            }}
        >
        <View style={styles.container}>
        <Text style={styles.dateText}>{departDate}</Text>
        <View style={styles.subContainer}>
            <View style={styles.airline}>

                <Text style={styles.airlineText}>{props.item.carrierCode}</Text>
            </View>
            <View style={styles.info}>
                <View style={styles.line1}>
                    <Text style={styles.line1Text}>
                        Depart {departTime} {departAMPM} from {props.item.departure.airport}
                    </Text>
                </View>
                <View style={styles.line2}>
                    <Text style={styles.line2Text}>
                        Arrive {arrivalTime} {arrivalAMPM} at {props.item.arrival.airport}
                    </Text>
                </View>
            </View>
        </View>
        </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: "#35A8FF",
        borderRadius: 10,
    },
    subContainer: {
        flexDirection: "row"
    },
    info: {
        margin: 10,
        padding: 10,
        paddingLeft: 2,
        backgroundColor: "white",
        borderRadius: 10,
        flex: 8
    },
    airline: {
        flex: 1,
        margin: 10,
        marginRight: 2
    },
    airlineText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    dateText: {
        paddingTop: 5,
        paddingLeft: 5,
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    line1: {
        marginLeft: 10
    },
    line2: {
        marginLeft: 10
    },
    line1Text: {
        fontSize: 15,
        fontWeight: "bold",
    },
    line2Text: {
        fontSize: 12,
        fontWeight: "bold"
    }

})