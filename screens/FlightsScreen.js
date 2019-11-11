import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, View, Text } from 'react-native';
import amadeusAPI from '../config/amadeusAPI';

export default class FlightsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: "Gweeb"
    }
  }

  setFlightInfo () {
    amadeusAPI.getFlightInfoAsync()
    .then((result) => {
      this.setState({
        flightInfo: JSON.stringify(result)
      })
    })
  }

  render () {
    return (
      <View>
        <Button
          title="Click for Flight Info"
          onPress={this.setFlightInfo.bind(this)}
        ></Button>
        <Text>{this.state.flightInfo}</Text>
      </View>
      )
  }


}

FlightsScreen.navigationOptions = {
  title: 'app.json',
};
