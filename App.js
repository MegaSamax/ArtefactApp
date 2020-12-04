import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* List Icon */}

      {/* Open / Completed Task Counters */}
      <View>
        <Text>Open</Text>
        <Text>Completed</Text>
      </View>

      {/* Add Task Icon */}

      {/* Generate Task Button */}

      {/* Current Task Title */}
      <View>
        <Text>TASK</Text>
      </View>

      {/* Current Task Content */}

      {/* Complete Task Button */}

      <StatusBar style="auto" />
    </View>
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
