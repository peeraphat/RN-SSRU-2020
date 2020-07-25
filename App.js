import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import ListData from './Components/ListData'
import Preview from './Components/Preview'
import User from './Components/User'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const mainStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ListData" component={ListData} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
  )
}

const userStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Main') {
              iconName = focused ? 'ios-list-box' : 'ios-list'
            } else if (route.name === 'Me') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Main" component={mainStack} />
        <Tab.Screen name="Me" component={userStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
