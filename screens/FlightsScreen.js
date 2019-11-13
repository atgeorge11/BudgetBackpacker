import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import amadeusAPI from '../config/amadeusAPI';
import iapiAPI from '../config/iapaAPI';
import FlightForm from '../Forms/FlightForm';
import FlightDisplays from '../Displays/FlightDisplays';

export default class FlightsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: [],
      displayForm: true,
      displayLoading: false
    }
  }

  searchFlightInfo (params) {
    this.switchDisplayForm();
    this.switchDisplayLoading();
    this.setState({
      flightInfo: []
    })
    iapiAPI.getCityCodeAsync(params.origin)
    .then(result => {
      params.origin = result;
      return iapiAPI.getCityCodeAsync(params.destination)
    })
    .then(result => {
      params.destination = result;
      return amadeusAPI.getFlightInfoAsync(params)
    })
    .then((result) => {
      if (result[1].data) {
        this.setState({
          flightInfo: result[1].data,
          displayLoading: false
        })
      } else {
        this.setState({
          flightInfo: "No flights found.",
          displayLoading: false
        })
      }
    })
    .catch (err => {
      this.switchDisplayLoading();
      Alert.alert(
        "Bad Request",
        "Encountered error: " + err
      )
    });
  }

  switchDisplayForm() {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  switchDisplayLoading() {
    console.log(!this.state.displayLoading)
    this.setState({
      displayLoading: !this.state.displayLoading
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.flightFormContainer}>
        <TouchableOpacity
          onPress={this.switchDisplayForm.bind(this)}
          style={styles.flightFormTitle}
        >
          <Text style={styles.flightFormTitleText}>Flight Search</Text>
        </TouchableOpacity>
        {this.state.displayForm ? (<FlightForm searchFlights={this.searchFlightInfo.bind(this)} style={styles.flightForm}/>) : null}
        {this.state.displayLoading ? (<Text style={styles.searching}>Searching...</Text>) : null}
        </View>
        {this.state.flightInfo === "No flights found." ? (<Text style={styles.noResults}>No flights found.</Text>) : <FlightDisplays items={this.state.flightInfo}/>}
      </View>
      )
  }


}

FlightsScreen.navigationOptions = {
  title: 'BudgetBackpacker',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  flightFormContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden"
  },
  flightFormTitle: {
    margin: 15,
  },
  flightFormTitleText: {
    color: "#35A8FF",
    fontSize: 25,
    fontWeight: "bold"
  },
  flightForm: {
    margin: 10
  },
  searching: {
    color: "#35A8FF",
    textAlign: "center",
    margin: 20,
    fontSize: 20
  },
  noResults: {
    color: "#35A8FF",
    textAlign: "center",
    marginTop: 100,
    fontSize: 18
  }
});