import React from 'react';
import { Button, View, Text } from 'react-native';

export default FlightConnectionItem = props => (
    <View>
        <Text>{props.item.departure.airport + " " 
            + props.item.departure.time + "-" 
            + props.item.arrival.airport + " "
            + props.item.arrival.time}
        </Text>  
    </View>
)
