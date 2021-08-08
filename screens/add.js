import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";

import { store } from "../store.js";

const Add = ({ navigation }) => {
  // Switch Toggle States
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [text, setText] = useState("");

  const addTask = () => {
    store.addTask(text, isEnabled);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View styles={styles.content}>
          {/* Header */}
          <Button
            /* Back to Previous Screen */
            title="Discard"
            onPress={() => {
              navigation.goBack();
            }}
            color={store.getCategory().cssColour}
          />
        </View>
        <View styles={styles.content}>
          {/* Confirmation Button */}
          <Button
            title="Save"
            // onPressIn={addTask}
            onPress={() => {
              store.addTask(text, isEnabled);
              navigation.goBack();
            }}
            color={store.getCategory().cssColour}
          />
        </View>
      </View>

      {/* Title */}
      <Text style={[styles.title, styles.border]}>Add Task</Text>

      {/* Text Input */}
      <TextInput
        placeholder="Enter task here"
        underlineColorAndroid="transparent"
        onChangeText={(newText) => setText(newText)}
        value={text}
        multiline
        numberOfLines={25}
        style={[
          styles.border,
          {
            height: 200,
          },
        ]}
      ></TextInput>

      {/* Urgent Task Switch Button */}
      <View style={styles.urgent}>
        <Text styles={styles.content}>Urgent? </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          styles={styles.content}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  border: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#b6dfff",
    padding: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  content: {
    flex: 1,
  },
  urgent: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
    padding: 10,
  },
});

export default Add;
