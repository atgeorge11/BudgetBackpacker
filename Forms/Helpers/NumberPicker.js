import React from 'react';
import { Button, View, Picker } from 'react-native';

export default class NumberPicker extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: "0"
        }
    }

    render () {
        return (
            <View>
                <Picker
                    selectedValue={this.state.value}
                    onValueChange={item => {this.setState({value: item})}}>
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />
                </Picker>
                <Button
                    onPress={() => this.props.submitNumber(this.props.passenger, this.state.value)}
                    title="Submit"
                />
            </View>
        )
    }
}