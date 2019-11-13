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
      displayForm: true
    }
  }

  searchFlightInfo (params) {
    iapiAPI.getCityCodeAsync(params.origin)
    .then(result => {
      console.log(result);
      params.origin = result;
      return iapiAPI.getCityCodeAsync(params.destination)
    })
    .then(result => {
      console.log(result);
      params.destination = result;
      return amadeusAPI.getFlightInfoAsync(params)
    })
    .then((result) => {
      if (result[1].data[0]) {
        this.switchDisplayForm();
        this.setState({
          flightInfo: result[1].data
        })
      } else {
        Alert.alert(
          "Bad Request",
          "Unable to retrieve data.\n" + result[1].data + " was retrieved.",
        )
      }
    })
    .catch (err => {
      Alert.alert(
        "Bad Request",
        "Encoutnered error: " + err
      )
    });
  }

  switchDisplayForm() {
    this.setState({
      displayForm: !this.state.displayForm
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
        </View>
        <FlightDisplays items={this.state.flightInfo}/>
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
  }
});