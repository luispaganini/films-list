import { StyleSheet, View, Text, Button, Image, ActivityIndicator } from "react-native";
import React from "react";
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { HomeStyle as styles } from "../styles/HomeStyle";
import i18n from 'i18n-js';

export default function Home({ navigation }: INavigationInterface) {
  i18n.translations = {
    en: { welcome: "Watch movies and series", button: "Find Movies"},
    ptbr: { welcome: "Assista filmes e séries", button: "Encontrar Filmes"},
    default: {welcome: "Watch movies and series", button: "Find Movies"}
  };
  const handleFindMovies = () => {
    navigation.navigate("Find Movies");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png"}}
      />

      <Text style={styles.text}>{i18n.t('welcome')}</Text>

      <View style={styles.button}>
        <Button title={i18n.t('button')} onPress={handleFindMovies} />
      </View>
    </View>
  );
}

