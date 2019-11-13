import React from 'react';
import { Button, View, DatePickerIOS, StyleSheet } from 'react-native';

export default class DatePicker extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: new Date()
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        flex: 1,
    },
    subContainer: {
        marginTop: 250
    }
})