import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import HotelsScreen from '../screens/HotelsScreen';
import FlightsScreen from '../screens/FlightsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

HomeStack.path = '';

const HotelsStack = createStackNavigator(
  {
    Hotels: HotelsScreen,
  },
  config
);

HotelsStack.navigationOptions = {
  tabBarLabel: 'Hotels',
};

HotelsStack.path = '';

const SavedStack = createStackNavigator(
  {
    Saved: SavedScreen,
  },
  config
);

SavedStack.navigationOptions = {
  tabBarLabel: 'Saved',
};

SavedStack.path = '';

const FlightsStack = createStackNavigator(
  {
    Settings: FlightsScreen,
  },
  config
);

FlightsStack.navigationOptions = {
  tabBarLabel: 'Flights',
};

FlightsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FlightsStack,
  HotelsStack,
  SavedStack
});

tabNavigator.path = '';

export default tabNavigator;
