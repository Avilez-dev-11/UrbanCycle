import React from 'react';
import { Pressable, Text, StyleSheet, Alert, View, Vibration } from 'react-native';
import { reportHazard } from '../services/api'; // Assuming you have an API service file
import Icon from 'react-native-vector-icons/MaterialIcons'; // Install this package for icons

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default function HazardButton() {
    const handlePress = async () => {
    // Trigger a vibration for feedback
    Vibration.vibrate(100);

    try {
      // Example hazard data
      const hazardData = {
        description: 'Pothole on Main Street',
        location: { latitude: 40.7128, longitude: -74.0060 },
        timestamp: new Date().toISOString(),
      };

      // Send hazard report to backend API
      const response = await reportHazard(hazardData);

      // Provide feedback to the user
      if (response.status === 'success') {
        Alert.alert('Success', 'Thank you for reporting this hazard!');
      } else {
        Alert.alert('Error', 'Failed to report the hazard.');
      }
    } catch (error) {
      console.error('Error reporting hazard:', error);
      Alert.alert('Error', 'An error occurred while reporting the hazard.');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.7 : 1 },
        ]}
        onPress={handlePress}
      >
        <Icon name="report-problem" size={24} color="white" />
        <Text style={styles.buttonText}>Report Hazard</Text>
      </Pressable>
    </View>
  );
}
