import React from 'react';
import { Button, View, Picker, StyleSheet } from 'react-native';

export default class PricePicker extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: "0"
        }
    }

    render () {
        return (
            <View style={styles.container}>
            <View style={styles.subContainer}>
                <Picker
                    selectedValue={this.state.value}
                    onValueChange={item => {this.setState({value: item})}}>
                    <Picker.Item label="$50" value="$50" />
                    <Picker.Item label="$100" value="$100" />
                    <Picker.Item label="$150" value="$150" />
                    <Picker.Item label="$200" value="$200" />
                    <Picker.Item label="$250" value="$250" />
                    <Picker.Item label="$300" value="$300" />
                    <Picker.Item label="$350" value="$350" />
                    <Picker.Item label="$400" value="$400" />
                    <Picker.Item label="$450" value="$450" />
                    <Picker.Item label="$500" value="$500" />
                    <Picker.Item label="$600" value="$600" />
                    <Picker.Item label="$700" value="$700" />
                    <Picker.Item label="$800" value="$800" />
                    <Picker.Item label="$900" value="$900" />
                    <Picker.Item label="$1000" value="$1000" />
                    <Picker.Item label="$1100" value="$1100" />
                    <Picker.Item label="$1200" value="$1200" />
                    <Picker.Item label="$1300" value="$1300" />
                    <Picker.Item label="$1400" value="$1400" />
                    <Picker.Item label="$1500" value="$1500" />
                    <Picker.Item label="$1600" value="$1600" />
                    <Picker.Item label="$1700" value="$1700" />
                    <Picker.Item label="$1800" value="$1800" />
                    <Picker.Item label="$1900" value="$1900" />
                    <Picker.Item label="$2000" value="$2000" />
                    <Picker.Item label="$2500" value="$2500" />
                    <Picker.Item label="$3000" value="$3000" />
                    <Picker.Item label="$3500" value="$3500" />
                    <Picker.Item label="$4000" value="$4000" />
                </Picker>
                <Button
                    onPress={() => this.props.submitPrice(this.state.value)}
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
        marginTop: 200
    }
})