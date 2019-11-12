import React from 'react';
import { Button, View, Text, TextInput, DatePickerIOS, Picker, Modal } from 'react-native';
import DatePicker from './Helpers/DatePicker';
import NumberPicker from './Helpers/NumberPicker';
import PricePicker from './Helpers/PricePicker';

export default class FlightForm extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            origin: "",
            destination: "",
            departureDate: new Date(),
            returnDate: "",
            adults: "0",
            children: "0",
            infants: "0",
            seniors: "0",
            maxPrice: "$0",

            dateModalVisible: false,
            adultsModalVisible: false,
            childrenModalVisible: false,
            infantsModalVisible: false,
            seniorsModalVisible: false,
            priceModalVisible: false
        }
    }

    openDateModal() {
        this.setState({dateModalVisible: true});
    }

    closeDateModal() {
        this.setState({dateModalVisible: false})
    }

    openNumberModal(passenger) {
        if (passenger === "adults") {
            this.setState({adultsModalVisible: true});
        } else if (passenger === "children") {
            this.setState({childrenModalVisible: true});
        } else if (passenger === "infants") {
            this.setState({infantsModalVisible: true});
        } else if (passenger === "seniors") {
            this.setState({seniorsModalVisible: true});
        }
    }

    closeNumberModal(passenger) {
        if (passenger === "adults") {
            this.setState({adultsModalVisible: false});
        } else if (passenger === "children") {
            this.setState({childrenModalVisible: false});
        } else if (passenger === "infants") {
            this.setState({infantsModalVisible: false});
        } else if (passenger === "seniors") {
            this.setState({seniorsModalVisible: false});
        }
    }

    openPriceModal() {
        this.setState({
            priceModalVisible: true
        })
    }

    closePriceModal() {
        this.setState({
            priceModalVisible: false
        })
    }
    
    submitDate(date) {
        this.closeDateModal();
        this.setState({
            departureDate: date
        })
    }

    submitNumber(passenger, value) {
        this.closeNumberModal(passenger);
        if (passenger === "adults") {
            this.setState({
                adults: value
            })
        } else if (passenger === "children") {
            this.setState({
                children: value
            })
        } else if (passenger === "infants") {
            this.setState({
                infants: value
            })
        } else if (passenger === "seniors") {
            this.setState({
                seniors: value
            })
        }
    }

    submitPrice(value) {
        this.closePriceModal();
        this.setState({
            maxPrice: value
        })
    }

    render () {
        return (
            <View>
                <View>
                    <Text>City of Departure</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="City of Departure"
                        onChangeText={text => this.setState({origin: text})}
                        value={this.state.origin}
                    ></TextInput>
                    <Text>City of Arrival</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="City of Arrival"
                        onChangeText={text => this.setState({destination: text})}
                        value={this.state.destination}
                    ></TextInput>
                </View>
                <View>
                    <Text>Departure Date</Text>
                    <Text>{this.state.departureDate.toString()}</Text>
                    <Modal
                        visible={this.state.dateModalVisible}
                        animationType={'slide'}
                        onRequestClose={() => this.closeDateModal()}
                    >
                        <DatePicker submitDate={this.submitDate.bind(this)}/>
                    </Modal>
                    <Button
                        title="Change"
                        onPress={this.openDateModal.bind(this)}
                    ></Button>
                </View>
                <View>
                    <View>
                        <Text>Adult Passengers</Text>
                        <Text>{this.state.adults}</Text>
                        <Modal
                            visible={this.state.adultsModalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeNumberModal("adults")}
                        >
                            <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="adults" />
                        </Modal>
                        <Button
                            title="Change"
                            onPress={() => this.openNumberModal("adults")}
                        />
                    </View>
                    <View>
                        <Text>Child Passengers</Text>
                        <Text>{this.state.children}</Text>
                        <Modal
                            visible={this.state.childrenModalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeNumberModal("children")}
                        >
                            <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="children" />
                        </Modal>
                        <Button
                            title="Change"
                            onPress={() => this.openNumberModal("children")}
                        />
                    </View>
                    <View>
                        <Text>Infant Passengers</Text>
                        <Text>{this.state.infants}</Text>
                        <Modal
                            visible={this.state.infantsModalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeNumberModal("infants")}
                        >
                            <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="infants" />
                        </Modal>
                        <Button
                            title="Change"
                            onPress={() => this.openNumberModal("infants")}
                        />
                    </View>
                    <View>
                        <Text>Senior Passengers</Text>
                        <Text>{this.state.seniors}</Text>
                        <Modal
                            visible={this.state.seniorsModalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeNumberModal("seniors")}
                        >
                            <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="seniors" />
                        </Modal>
                        <Button
                            title="Change"
                            onPress={() => this.openNumberModal("seniors")}
                        />
                    </View>
                </View>
                <View>
                    <Text>Max Price</Text>
                    <Text>{this.state.maxPrice}</Text>
                    <Modal
                        visible={this.state.priceModalVisible}
                        animationType={"slide"}
                        onRequestClose={() => this.closePriceModal()}
                    >
                        <PricePicker submitPrice={this.submitPrice.bind(this)}/>
                    </Modal>
                    <Button
                        title="Change"
                        onPress={() => this.openPriceModal()}
                    />
                </View>
                <Button
                    title="Click to Search for Flights"
                    onPress={() => this.props.searchFlights(this.state)}
                />
            </View>
        )
    }
}