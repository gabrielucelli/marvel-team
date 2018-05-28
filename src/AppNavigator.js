import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import WelcomeContainer from './containers/WelcomeContainer'
import TeamProfileContainer from './containers/TeamProfileContainer'
import TeamSelectorContainer from './containers/TeamSelectorContainer'

import { createStackNavigator, 
  createBottomTabNavigator, 
  createSwitchNavigator } from 'react-navigation';

const bottomNav =  createBottomTabNavigator({
  TeamSelector: TeamSelectorContainer,
  TeamProfile: TeamProfileContainer
});

export const AppNavigator = createSwitchNavigator(
  {
    Welcome : WelcomeContainer,
    BottomNav : bottomNav
  },
  {
    initialRouteName: 'Welcome'
  }
);