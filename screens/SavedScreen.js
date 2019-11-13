import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import saveFunctions from '../saveFunctions/saveFunctions';
import SavedFlightEntry from '../Displays/SavedFlightEntry';
import formatDate from '../Displays/formatDate';

export default class SavedScreen extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      records: []
    }
  }

  componentDidMount () {
    saveFunctions.getRecords((err, records) => {
      if (records) {
        records = records.sort((a, b) => {
          let first = a.departure.time;
          let second= b.departure.time;
          let dateA = formatDate(first).split(" ")[0];
          let dateB = formatDate(second).split(" ")[0];
          dateA = Number(dateA.split("/")[0]) + Number(dateA.split("/")[1]) / 100;
          dateB = Number(dateB.split("/")[0]) + Number(dateB.split("/")[1]) / 100;
          if (dateA !== dateB) {
            return dateA - dateB;
          } else {
            if (formatDate(first).split(" ")[2] !== formatDate(second).split(" ")[2]) {
              if (formatDate(first).split(" ")[2] === "AM") {
                return -1;
              } else {
                return 1;
              }
            }
            let timeA = formatDate(first).split(" ")[1];
            let timeB = formatDate(second).split(" ")[1];
            timeA = Number(timeA.split(":")[0]) + Number(timeA.split(":")[1]) / 100;
            timeB = Number(timeB.split(":")[0]) + Number(timeB.split(":")[1]) / 100;
            return timeA - timeB;
          }

        })
        this.setState({
          records: records
        })
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
      <View style={styles.containerB}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Itinerary
            </Text>
          </View>
          <View style={styles.refresh}>
            <TouchableOpacity
            onPress={() => {
              saveFunctions.getRecords((err, records) => {
                if (records) {
                  this.setState({
                    records: records
                  })
                }
              })
            }}
          >
            <Text style={styles.refreshText}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView>
            {this.state.records.map((record, index) => (
              <SavedFlightEntry item={record} rerender={() => this.componentDidMount()} key={index}/>
            ))}
          </ScrollView>
        </View>

      </View>
      </View>

    )
  }
}

SavedScreen.navigationOptions = {
  title: 'BudgetBackpacker',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  containerB: {
    margin: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10
  },
  header: {
    flexDirection: "row"
  },
  titleContainer: {
    margin: 15,
    flex: 3
  },
  title: {
    color: "lightblue",
    fontSize: 25,
    fontWeight: "bold"
  },
  refresh: {
    backgroundColor: "lightblue",
    flex: 1,
    margin: 15,
    padding: 10,
    borderRadius: 10
  },
  refreshText: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
})