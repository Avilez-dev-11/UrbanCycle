// src/App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;