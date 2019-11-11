import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
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
    Links: LinksScreen,
  },
  config
);

HotelsStack.navigationOptions = {
  tabBarLabel: 'Hotels',
};

HotelsStack.path = '';

const SightsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SightsStack.navigationOptions = {
  tabBarLabel: 'Sights',
};

SightsStack.path = '';

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
  SightsStack
});

tabNavigator.path = '';

export default tabNavigator;
