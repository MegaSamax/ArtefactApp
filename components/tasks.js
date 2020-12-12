import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export class Tasks extends React.Component {
  render() {
    return (
      <View key={this.props.keyval}>
        <Text style={{}}>{this.props.val.task}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
