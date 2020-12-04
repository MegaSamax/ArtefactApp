import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const onPressTaskList = () => console.log("Temp Function");

  return (
    <View >
      {/* List Icon */}
      <View> 
        <Button styles = {StyleSheet.listButton} 
          onPress={onPressTaskList}
          title='List'
          color='#D1603D'
        />
      </View>

      {/* Open / Completed Task Counters */}
      <View style={styles.container}>
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

  listButton: { 
   
    alignItems: 'center',
    justifyContent: 'center',
  }
});
