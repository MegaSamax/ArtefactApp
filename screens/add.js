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
    <View>
      {/* Header */}
      {/* Back to Previous Screen */}
      <Button
        title="Discard"
        onPress={() => {
          navigation.goBack();
        }}
        color={store.getCategory().cssColour}
      />

      {/* Title */}
      <Text>Add Task</Text>

      {/* Body */}
      {/* Urgent Task Switch Button */}
      <Text>Urgent? </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      {/* Text Input */}
      <TextInput
        placeholder="Enter task here"
        underlineColorAndroid="transparent"
        onChangeText={(newText) => setText(newText)}
        value={text}
      ></TextInput>

      {/* Confirmation Button */}
      <Button title="Save" onPress={addTask} color={store.getCategory().cssColour}/>
    </View>
  );
};

export default Add;
