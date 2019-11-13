import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import {
  SrcOverComposition,
} from 'react-native-image-filter-kit';
import LinearGradient from 'react-native-linear-gradient';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BudgetBackpacker</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
            style={{
              width: "100%",
              height: "100%",
            }}
            // source={{uri: "https://travelphotos.s3.us-east-2.amazonaws.com/amsterdam-netherlands-canal.jpg"}}
            source={{uri: "https://travelphotos.s3.us-east-2.amazonaws.com/Hagia-Spohia_ExpatExplore_505556230.gif"}}
          >
            {/* <LinearGradient
              colors={["white", "lightblue"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >

            </LinearGradient> */}
          </ImageBackground>
      </View>
    </View>
  );
}

// HomeScreen.navigationOptions = {
//   header: null,
// };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: "column"
  },
  subContainer: {
    flex: 1
  },
  imageContainer: {
    flex: 2
  },
  titleContainer: {
    margin: 80,
    marginTop: 80,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#35A8FF",
    margin: 10,
    textAlign: "center"
  }

});
