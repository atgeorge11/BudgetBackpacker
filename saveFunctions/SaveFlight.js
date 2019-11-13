import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import saveFunctions from '../saveFunctions/saveFunctions';
import CreateItinerary from './CreateItinerary';

export default class SaveFlight extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            itineraries: [],
            selectedItinerary: null,
            newItineraryModalOpen: false
        }
    }

    componentDidMount () {
        saveFunctions.getItineraries((err, itineraries) => {
            if (err) {
                throw err;
            } else {
                this.setState({
                    itineraries: itineraries
                })
            }
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Select an Itinerary:</Text>
                    <View>
                        {this.state.itineraries.map((itinerary, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => selectItinerary(itinerary)}
                                    key={index}
                                >
                                    <View>
                                        <Text>{itinerary}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                newItineraryModalOpen: true
                            })
                        }}
                    >
                        <View>
                            <Text>Create New Itinerary</Text>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        visible={this.state.newItineraryModalOpen}
                        animationType={'slide'}
                        onRequestClose={() => {
                            this.setState({
                                newItineraryModalOpen: false
                            })
                        }}
                    >
                        <CreateItinerary closeModal={(itinerary) => {
                            let itineraries = this.state.itineraries;
                            itineraries.push(itinerary);
                            this.setState({
                                newItineraryModalOpen: false,
                                itineraries: itineraries
                            })
                        }}/>
                    </Modal>
                </View>
                <View>
                    <TouchableOpacity
                        // onPress={() => saveFunctions.createRecord(props.flight, selectedItinerary)}
                        onPress={this.props.closeModal}
                    >
                        <View>
                            <Text>Save Flight</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    }
})