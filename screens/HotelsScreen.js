import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HotelsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Coming Soon</Text>
      </View>
    </View>
  )
}

HotelsScreen.navigationOptions = {
  title: 'BudgetBackpacker',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1
  },
  subContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1
  },
  text: {
    marginTop: 200,
    textAlign: "center",
    color: "lightblue",
    fontSize: 20,
    fontWeight: "bold"
  }
})
