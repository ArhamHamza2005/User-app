import React from "react";
import { View, Text, ImageBackground, StyleSheet,TouchableOpacity, Button } from "react-native";

function Dashboard({ navigation }) {
  const image = {
  };
  return (
    <View style={styles.View}>
      <Text style={styles.text}>Welcome </Text>
      <ImageBackground source={image} style={styles.ImageBackground} />
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PickUp")}
            >
            <Text style={styles.buttonText}>Pickup </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 300,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom:20

  },
  button: {
    backgroundColor: "darkgreen",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
  },
});
