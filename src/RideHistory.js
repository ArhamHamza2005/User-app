import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getingRides } from "../config/fireBase";

function RideHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    allRides();
  }, []);

  const allRides = async () => {
    const rides = await getingRides();
    setHistory(rides);
    console.log(rides, "<=rides");
  };

  if (!history) {
    return (
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 100,
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.View}>
      {history.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <Text style={styles.title}>PickUp : {item.pickUpLocationName}</Text>
            <Text style={styles.subtitle}>
              Destenation : {item.destenationLocationName}
            </Text>
            <Text style={styles.subtitle}>vehicle : {item.carType}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  View: {
  },
  container: {
    backgroundColor: "darkgreen",
    borderWidth: 2,
    borderRadius: 10,
    margin: 12,
    padding: 3,
    height:"90%"
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default RideHistory;
