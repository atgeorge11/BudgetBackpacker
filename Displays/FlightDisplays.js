import React from 'react';
import { Button, View, Text, ScrollView} from 'react-native';
import FlightItem from './FlightItem';

export default FlightDisplays = props => (
    <View>
    <ScrollView>
        {props.items.map((item, index) => {
            return (
                <FlightItem item={item} key={index}/>
            )
        })}
    </ScrollView>
        {/* <Text>{"ITEMS: " + JSON.stringify(props.items)}</Text> */}
    </View>

)