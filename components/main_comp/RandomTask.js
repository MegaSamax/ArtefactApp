import { observer } from "mobx-react";
import React, { useState, useRef } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Dialog from "react-native-dialog";
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

  const renderRightButton = () => {
    const onLastCategory =
      store.currentCategory === store.categories.length - 1;
    const nextCategoryLocked = store.isNextCategoryLocked();

    if (onLastCategory) {
      return <View style={{ width: 40, height: 40 }}></View>;
    }

    if (nextCategoryLocked) {
      return [
        <Image
          resizeMode={"contain"}
          style={{ width: 40, height: 40 }}
          source={require("../../assets/lock.png")}
          tintColor={store.getCategory().cssColour}
          key={Date()}
        />,
        // Display number of Remaining task to complete to Unlock
        <Text style={styles.rightText}>
          {store.categories[store.currentCategory + 1].tasksToUnlock -
            store.completedTasks +
            1}
        </Text>,
      ];
    }

    // Not on last category and next category not locked
    return (
      <TouchableOpacity onPress={store.nextCategory}>
        <Image
          resizeMode={"contain"}
          style={{ width: 40, height: 40 }}
          source={require("../../assets/right-arrow.png")}
          tintColor={store.getCategory().cssColour}
        />
      </TouchableOpacity>
    );
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
    <ImageBackground
      source={require("../../assets/Tank.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#b6dfff",
      }}
    >
      <View style={styles.Container}>
        {/* Slime Name */}
        <Button
          onPress={rename}
          title={store.getCategory().name}
          color={store.getCategory().cssColour}
        />

        {/* Update Category Name ----- ENABLE LATER TESTING */}
        <Dialog.Container visible={visible}>
          <Dialog.Title>Rename Category</Dialog.Title>
          <Dialog.Description>Please choose a new name</Dialog.Description>
          <Dialog.Input
            onChangeText={(val) => {
              setNewName(val);
            }}
          />
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Confirm" onPress={handleConfirm} />
        </Dialog.Container>

        {/* Generate Task Button */}
        <TouchableOpacity
          onPress={store.selectRandomTask}
          activeOpacity={0.5}
          style={styles.questionMark}
        >
          {store.getCurrentTask() ? (
            <View style={{ width: 100, height: 100 }}></View>
          ) : (
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../assets/unnamed.png")}
            />
          )}
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Navigate Categories */}
          {/* Left buttom */}
          {store.currentCategory > 0 ? (
            <TouchableOpacity onPress={store.prevCategory}>
              <Image
                resizeMode={"contain"}
                style={{ width: 40, height: 40 }}
                source={require("../../assets/left-arrow.png")}
                tintColor={store.getCategory().cssColour}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 40, height: 40 }}></View>
          )}

          {/* Slime Gif */}
          {renderSlime()}

          {/* Right buttom */}
          <View style={styles.right}>{renderRightButton()}</View>
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionMark: {
    transform: [{ translateY: 25 }],
  },
  right: {
    textAlign: "center",
  },
  rightText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: store.getCategory().cssColour,
  },
});
