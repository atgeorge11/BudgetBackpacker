import React, { useState, useEffect } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
  SrcOverComposition,
} from 'react-native-image-filter-kit';
import LinearGradient from 'react-native-linear-gradient';


export default function HomeScreen() {
  const [firstPic] = useState(new Animated.Value(0));
  const [secondPic] = useState(new Animated.Value(0));
  const [thirdPic] = useState(new Animated.Value(0));
  const [fourthPic] = useState(new Animated.Value(0));

  const opacities = [1, firstPic, secondPic, thirdPic, fourthPic]

  const urls = [
    "https://travelphotos.s3.us-east-2.amazonaws.com/amsterdam-netherlands-canal.jpg",
    "https://travelphotos.s3.us-east-2.amazonaws.com/Hagia-Spohia_ExpatExplore_505556230.gif",
    "https://travelphotos.s3.us-east-2.amazonaws.com/great-wall-hiking-tours.jpg",
    "https://travelphotos.s3.us-east-2.amazonaws.com/a-voir-absolument.jpg",
    "https://travelphotos.s3.us-east-2.amazonaws.com/maxresdefault-1.jpg"
  ]

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(2000),
        Animated.timing(
          firstPic,
          {
            toValue: 1,
            duration: 2500
          }
        ),
        Animated.delay(2000),
        Animated.timing(
          secondPic,
          {
            toValue: 1,
            duration: 2500
          }
        ),
        Animated.delay(2000),
        Animated.timing(
          thirdPic,
          {
            toValue: 1,
            duration: 2500
          }
        ),
        Animated.delay(2000),
        Animated.timing(
          fourthPic,
          {
            toValue: 1,
            duration: 2500
          }
        ),
        Animated.parallel([
          Animated.timing(
            firstPic,
            {
              toValue: 0,
              duration: 1
            }
          ),
          Animated.timing(
            secondPic,
            {
              toValue: 0,
              duration: 1
            }
          ),
          Animated.timing(
            thirdPic,
            {
              toValue: 0,
              duration: 1
            }
          ),
        ]),
        Animated.delay(2000),
        Animated.timing(
          fourthPic,
          {
            toValue: 0,
            duration: 2500
          }
        )
      ])
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BudgetBackpacker</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {urls.map ((url, index) => (
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: opacities[index]
            }}
            source={{uri: url}}
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

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
