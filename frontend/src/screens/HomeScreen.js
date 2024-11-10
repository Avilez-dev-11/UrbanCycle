// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Alert, Button, StyleSheet } from 'react-native';
import HazardButton from '../components/HazardButton';

const HomeScreen = ({ navigation }) => {
  const [hazardPrediction, setHazardPrediction] = useState(null);

  const getHazardPrediction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict_hazard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: [0.5, 0.1, 0.2, 0.3] }),
      });
      const data = await response.json();
      setHazardPrediction(data.hazard_prediction);
      Alert.alert(`Hazard Prediction: ${data.hazard_prediction}`);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch hazard prediction");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to UrbanCycle 🚴‍♂️</Text>
      <HazardButton />
      <Button title="Get Hazard Prediction" onPress={getHazardPrediction} />
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
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