import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import saveFunctions from '../saveFunctions/saveFunctions';

export default class CreateItinerary extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name: ""
        }
    }

    submitItinerary () {
        saveFunctions.createItinerary(this.state.name);
        this.props.closeModal(this.state.name);
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Itinerary Name:</Text>
                <TextInput
                    placeholder="Itinerary Name"
                    onChangeText={text => this.setState({name: text})}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={this.submitItinerary.bind(this)}
                >
                    <View>
                        <Text>
                            Create Itinerary
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        margin: 30
    }
})