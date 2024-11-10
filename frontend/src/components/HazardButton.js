import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'Red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={() => Alert.alert('Thank you for reporting this hazard!')}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
}
