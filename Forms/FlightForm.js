import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import DatePicker from './Helpers/DatePicker';
import NumberPicker from './Helpers/NumberPicker';
import PricePicker from './Helpers/PricePicker';
import formatDate from './Helpers/formatDate';
import { whileStatement } from '@babel/types';

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
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.h1}>City of Departure</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="City of Departure"
                        onChangeText={text => this.setState({origin: text})}
                        value={this.state.origin}
                    ></TextInput>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.h1}>City of Arrival</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="City of Arrival"
                        onChangeText={text => this.setState({destination: text})}
                        value={this.state.destination}
                    ></TextInput>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.h1}>Departure Date</Text>
                    <TouchableOpacity
                        onPress={this.openDateModal.bind(this)}
                        style={styles.inputField}
                    >
                        <Text>{formatDate(this.state.departureDate.toString())}</Text>
                    </TouchableOpacity>
                        <Modal
                            visible={this.state.dateModalVisible}
                            animationType={'slide'}
                            onRequestClose={() => this.closeDateModal()}
                        >
                    <DatePicker submitDate={this.submitDate.bind(this)}/>
                </Modal>     
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.h1}>Passengers</Text>
                    <View style={styles.passengersField}>
                        <View style={styles.flex1}>
                            <Text style={styles.h2}>Adults</Text>
                        </View>
                        <View style={styles.flex2}>
                            <TouchableOpacity onPress={() => this.openNumberModal("adults")}>
                                <Text style={styles.passengersInputText}>{this.state.adults}</Text>
                            </TouchableOpacity>
                            <Modal
                                visible={this.state.adultsModalVisible}
                                animationType={'slide'}
                                onRequestClose={() => this.closeNumberModal("adults")}
                            >
                                <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="adults" />
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.passengersField}>
                        <View style={styles.flex1}>
                            <Text style={styles.h2}>Children</Text>
                        </View>
                        <View style={styles.flex2}>
                            <TouchableOpacity onPress={() => this.openNumberModal("children")}>
                                <Text style={styles.passengersInputText}>{this.state.children}</Text>
                            </TouchableOpacity>
                            <Modal
                                visible={this.state.childrenModalVisible}
                                animationType={'slide'}
                                onRequestClose={() => this.closeNumberModal("children")}
                            >
                                <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="children" />
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.passengersField}>
                        <View style={styles.flex1}>
                            <Text style={styles.h2}>Infants</Text>
                        </View>
                        <View style={styles.flex2}>
                            <TouchableOpacity onPress={() => this.openNumberModal("infants")}>
                                <Text style={styles.passengersInputText}>{this.state.infants}</Text>
                            </TouchableOpacity>
                            <Modal
                                visible={this.state.infantsModalVisible}
                                animationType={'slide'}
                                onRequestClose={() => this.closeNumberModal("infants")}
                            >
                                <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="infants" />
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.passengersField}>
                        <View style={styles.flex1}>
                            <Text style={styles.h2}>Seniors</Text>
                        </View>
                        <View style={styles.flex2}>
                            <TouchableOpacity onPress={() => this.openNumberModal("seniors")}>
                                <Text style={styles.passengersInputText}>{this.state.seniors}</Text>
                            </TouchableOpacity>
                            <Modal
                                visible={this.state.seniorsModalVisible}
                                animationType={'slide'}
                                onRequestClose={() => this.closeNumberModal("seniors")}
                            >
                                <NumberPicker submitNumber={this.submitNumber.bind(this)} passenger="seniors" />
                            </Modal>
                        </View>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.maxPrice}>
                        <View style={styles.flex1}>
                            <Text style={styles.h1}>Max Price</Text>
                        </View>
                        <View style={styles.flex2}>
                            <TouchableOpacity onPress={() => this.openPriceModal()}>
                                <Text style={styles.maxPriceInput}>{this.state.maxPrice}</Text>
                            </TouchableOpacity>
                            <Modal
                                visible={this.state.priceModalVisible}
                                animationType={"slide"}
                                onRequestClose={() => this.closePriceModal()}
                            >
                                <PricePicker submitPrice={this.submitPrice.bind(this)}/>
                            </Modal>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.searchFlights(this.state)}>
                    <View style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Press to Search for Flights</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "whitesmoke"
    },
    subContainer: {
        padding: 10,
        backgroundColor: "whitesmoke"
    },
    h1: {
        fontSize: 20,
        color: "#35A8FF",
        fontWeight: "bold",
    },
    h2: {
        fontSize: 15,
        color: "#35A8FF",
        fontWeight: "bold"
    },
    inputField: {
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: "white",
        borderRadius: 5
    },
    passengersField: {
        flexDirection: "row",
        padding: 5,
        paddingLeft: 15
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        backgroundColor: "white",
        borderRadius: 5
    },
    passengersInputText: {
        textAlign: "center",
    },
    maxPrice: {
        flexDirection: "row",
        paddingBottom: 20
    },
    maxPriceInput: {
        textAlign: "center",
        fontSize: 18
    },
    submitButton: {
        padding: 10,
        backgroundColor: "#35A8FF",
        borderRadius: 10
    },
    submitButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }

})