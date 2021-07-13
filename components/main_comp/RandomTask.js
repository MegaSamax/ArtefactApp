import { observer } from "mobx-react";
import React, { useState, useRef } from "react";
import { Text, Button, View, StyleSheet, Alert, Image } from "react-native";
// import Dialog from "react-native-dialog";
import { store } from "../../store.js";

export const RandomTask = observer(() => {
  // Pop up Window Name Change Variables
  const [newName, setNewName] = useState("");
  const [visible, setVisible] = useState(false);
  const rename = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    setVisible(false);

    if (newName !== "") {
      store.updateCategoryName(newName);
    }
  };

  // Render Correct Slime Colour
  const renderSlime = () => {
    switch (store.getCategory().colour) {
      case "Blue":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-blue.gif")}
          />
        );
        break;
      case "Yellow":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-yellow.gif")}
          />
        );
        break;
      case "Red":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-red.gif")}
          />
        );
        break;
      case "Green":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-green.gif")}
          />
        );
        break;
      case "Orange":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-orange.gif")}
          />
        );
        break;
      case "Purple":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-purple.gif")}
          />
        );
        break;
      case "White":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-white.gif")}
          />
        );
        break;
      case "Black":
        return (
          <Image
            resizeMode={"contain"}
            style={{ width: 150, height: 150 }}
            source={require("../../assets/slime-idle-black.gif")}
          />
        );
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.Button}>
      {/* Slime Name */}
      <Button
        onPress={rename}
        title={store.getCategory().name}
        color={store.getCategory().cssColour}
      />

      {/* Update Category Name */}
      {/* <Dialog.Container visible={visible}>
        <Dialog.Title>Rename Category</Dialog.Title>
        <Dialog.Description>Please choose a new name</Dialog.Description>
        <Dialog.Input
          onChangeText={(val) => {
            setNewName(val);
          }}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Confirm" onPress={handleConfirm} />
      </Dialog.Container> */}

      {/* <Image
        resizeMode={"contain"}
        style={{ width: 150, height: 150 }}
        source={store.getCategory().image}
      /> */}

      {renderSlime()}

      {/* Navigate Categories */}
      {/* Left buttom */}
      <Button onPress={store.prevCategory} title="<" color="#D1603D" />
      {/* Right buttom */}
      <Button onPress={store.nextCategory} title=">" color="#D1603D" />

      {/* Generate Task Button */}
      <Button
        onPress={store.selectRandomTask}
        title="Random Task"
        color="#D1603D"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
