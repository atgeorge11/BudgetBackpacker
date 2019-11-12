import React from 'react';
import { Button, View, DatePickerIOS } from 'react-native';

export default class DatePicker extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: new Date()
        }
    }

    render () {
        return (
            <View>
                <DatePickerIOS
                    date={this.state.value}
                    onDateChange={date => this.setState({value: date})}
                    mode="date"
                />
                <Button
                    onPress={() => this.props.submitDate(this.state.value)}
                    title="Submit"
                />
            </View>
        )
    }
}