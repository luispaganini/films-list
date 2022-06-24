import { StyleSheet, View, Text, Button, Image, ActivityIndicator } from "react-native";
import React from "react";
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { HomeStyle as styles } from "../styles/HomeStyle";
export default function Home({ navigation }: INavigationInterface) {
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

