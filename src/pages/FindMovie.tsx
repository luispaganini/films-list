import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import {SearchBar} from 'react-native-elements';


export default function FindMovie() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      {/* <SearchBar
      platform=""
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      /> */}
      <Text>Funcionando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F171E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});

