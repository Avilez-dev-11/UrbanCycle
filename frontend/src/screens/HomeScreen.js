// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HazardButton from '../components/HazardButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to UrbanCycle 🚴‍♂️</Text>
      <HazardButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});

export default HomeScreen;