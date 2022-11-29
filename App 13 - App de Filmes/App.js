import React, { Component } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

import api from './src/services/api';
import Filme from './src/Pages/Filme';
import Sinopse from './src/Pages/Sinopse';
import Home from './src/Pages/Home'


const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sinopse" component={Sinopse} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
