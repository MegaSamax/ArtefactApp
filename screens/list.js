import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

const List = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Task List</Text>
    </View>
  );
};

export default List;
