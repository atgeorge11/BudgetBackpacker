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
                Alert.alert("Delete", "Delete this event?", [
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
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: "lightblue",
        borderRadius: 10,
        flexDirection: "row"
    },
    info: {
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        flex: 8
    },
    airline: {
        flex: 1,
        margin: 10
    },
    airlineText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    line1: {

    },
    line1Text: {
        fontSize: 18,
        fontWeight: "bold",
    },
    line2: {
        marginLeft: 20
    },
    line2Text: {
        fontSize: 15,
        fontWeight: "bold"
    }

})