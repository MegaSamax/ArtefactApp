import React from 'react';
import { Button, StyleSheet, Text, View, Platform, StatusBar, } from 'react-native';

export default function App() {
  const onPressTaskList = () => console.log("Temp Function");
  const onPressAddTask = () => console.log("Temp Function");
  
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }} 
    >
      {/* List Icon */}
      <View style={styles.container}>
        <Button  
          onPress={onPressTaskList}
          title='List'
          color='#D1603D'
        />
      </View>

      {/* Open / Completed Task Counters */}
      <View style={styles.container}>
        <Text>Open</Text>
      </View>

      <View style={styles.container}>
        <Text>Complete</Text>
      </View>

      {/* Add Task Icon */}
      <View style={styles.container}>
        <Button  
        onPress={onPressAddTask}
        title='Add'
        color='#D1603D'
        />
      </View>


    </View>
  );

}

{/* Generate Task Button */}

{/* Current Task Title */}

{/* Current Task Content */}

{/* Complete Task Button */}

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: 15,
  height: 5,
  margin: 2,
  alignItems: "center",
}
});
