import { StyleSheet, View, Text, Button, Image } from "react-native";
import React from "react";

export default function Home({ navigation }: any) {
  const handleFindMovies = () => {
    navigation.navigate("Find Movies");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png"}}
      />

      <Text style={styles.text}>Watch Movies and Series</Text>

      <View style={styles.button}>
        <Button title="Find Movies" onPress={handleFindMovies} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F171E",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  logo: {
    width: "100%",
    height: 150,
  },
  button: {
    width: 200
  }
});