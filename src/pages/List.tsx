import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina em desenvolvimento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});
