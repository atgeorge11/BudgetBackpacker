import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import amadeusAPI from '../config/amadeusAPI';
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
    amadeusAPI.getFlightInfoAsync(params)
    .then((result) => {
      this.switchDisplayForm();
      this.setState({
        flightInfo: result[1].data
      })
    })
  }

  switchDisplayForm() {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  render () {
    return (
      <View>
        <TouchableOpacity
          onPress={this.switchDisplayForm.bind(this)}
        >
          <Text>Search for a Flight</Text>
        </TouchableOpacity>
        {this.state.displayForm ? (<FlightForm searchFlights={this.searchFlightInfo.bind(this)}/>) : null}
        <FlightDisplays items={this.state.flightInfo}/>
        {/* <Text>{"INFO: " + JSON.stringify(this.state.flightInfo)}</Text> */}
      </View>
      )
  }


}

FlightsScreen.navigationOptions = {
  title: 'app.json',
};
