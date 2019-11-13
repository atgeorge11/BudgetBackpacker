import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import FlightConnectionItem from './FlightConnectionItem';
import formatDate from './formatDate';
import saveFunctions from '../saveFunctions/saveFunctions';

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

    const [saveScreen, toggleSaveScreen] = useState(false);

    return (
        <View style={styles.container}>
            {/* <Modal
                visible={saveScreen}
                animationType={'slide'}
                onRequestClose={() => toggleSaveScreen(false)}
            >
                <SaveFlight flight={flightRecord} closeModal={() => toggleSaveScreen(false)}/>
            </Modal> */}
            <TouchableOpacity
                onPress={() => {
                    saveFunctions.createRecord(flightRecord, (err) => {
                        if (err) {
                            Alert.alert("Save unsuccessful: " + err);
                        } else {
                            Alert.alert("Saved!");
                        }
                    })
                }}
            >
                <View style={styles.initFlightItem}>
                    <View style={styles.priceAndCarrier}>
                        <Text style={styles.price}>${flightRecord.price}</Text>
                        <Text style={styles.carrier}>{flightRecord.carrierCode}</Text>
                    </View>
                    <View style={styles.lines}>
                        <View style={styles.subLine}>
                            <Text style={styles.subLine1}>Departure: {flightRecord.departure.airport}  </Text>
                            <Text style={styles.subLine2}>{formatDate(flightRecord.departure.time)}</Text>
                        </View>
                        <View style={styles.subLine}>
                            <Text style={styles.subLine1}>Arrival: {flightRecord.arrival.airport}  </Text>
                            <Text style={styles.subLine2}>{formatDate(flightRecord.arrival.time)}</Text>
                        </View>
                    </View>
                </View>
                {flightRecord.connections.map((item, index) => {
                    return (
                        <FlightConnectionItem item={item} key={index}/>
                    )
                })}
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    initFlightItem: {
        backgroundColor: "white",
        borderRadius: 10,
        margin: 10,
        marginBottom: 0
    },
    priceAndCarrier: {
        margin: 10,
        flexDirection: "row",
        alignItems: "stretch"
    },
    price: {
        flex: 1,
        color: "#35A8FF",
        fontSize: 20,
        fontWeight: "bold"
    },
    carrier: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "right"
    },
    lines: {
        margin: 10
    },
    subLine: {
        flexDirection: "row"
    },
    subLine1: {
        fontWeight: "bold"
    }
})