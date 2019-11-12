import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, View, Text, TextInput } from 'react-native';
import amadeusAPI from '../config/amadeusAPI';
import FlightForm from '../Forms/FlightForm';

export default class FlightsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: "Gweeb"
    }
  }

  searchFlightInfo (params) {
    amadeusAPI.getFlightInfoAsync(params)
    .then((result) => {
      this.setState({
        flightInfo: JSON.stringify(result)
      })
    })
  }

  render () {
    return (
      <View>
        <FlightForm searchFlights={this.searchFlightInfo.bind(this)}/>
        <Text>{this.state.flightInfo}</Text>
      </View>
      )
  }


}

FlightsScreen.navigationOptions = {
  title: 'app.json',
};
