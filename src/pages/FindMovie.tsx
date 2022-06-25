import { View, FlatList, TextInput, Pressable, Keyboard, ActivityIndicator, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { IApiInterface } from "../interfaces/IApiInterface";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item} from "../components/ImageCard"; 
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { FindMovieStyle as styles } from "../styles/FindMovieStyle";
import i18n from 'i18n-js';
import { ItemType } from "../interfaces/IItemType";

export default function FindMovie({navigation} : INavigationInterface) {
  i18n.translations = {
    en: { welcome: "Your Welcome to Films-list.", haveFun: "Have fun!"},
    ptbr: { welcome: "Seja Bem vindo ao Films-list.", haveFun: "Se divirta!"},
    default: {welcome: "Your Welcome to Films-list.", haveFun: "Have fun!"}
  };

  const [movies, setMovies] = useState<Array<IApiInterface>>([]);
  const [searchMovie, setSearchMovie] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isFirstAccess, setFirstAcess] = useState<boolean>(true);

  const handleNavigate = (imdbId: string) => {
    const params = { imdbId };
    navigation.navigate("Inspect_Movie", params);
  };

  const renderItem = ({ item }: ItemType) => {
    const backgroundColor: string = "#9C9C9C";
    
    return (
      <Item
        item={item}
        onPress={() => handleNavigate(item.imdbId)}
        backgroundColor={{ backgroundColor }}
      />
    );
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            value={searchMovie}
            onChangeText={setSearchMovie}
            placeholder="Search by movie"
            onSubmitEditing={findMovieHandler} />
          <Pressable onPress={findMovieHandler}>
            <Icon name={"search"} size={25} color={"#494949"} />
          </Pressable>
        </View>
        { isFirstAccess ? (
          <View>
            <Text style={styles.text}>{i18n.t('welcome')}</Text>
            <Text style={styles.text}>{i18n.t('haveFun')}</Text>
          </View>
        ): (

          <View>
            <ActivityIndicator style={styles.loading} size="large" color="#00ff00" animating={isLoading} />

            <FlatList
              data={movies}
              renderItem={renderItem}
              keyExtractor={(item: IApiInterface) => item.imdbId} />

          </View>
        )} 
      </SafeAreaView>
  );

  function findMovieHandler() {
    Keyboard.dismiss;
    setLoading(true);
    api.get(`/movie/name?name=${searchMovie}`).then((response) => {
      setMovies(response.data);
    }).catch((e) => {
      console.log(e);
    })
    .finally(() => {
      setLoading(false);
    });
    setFirstAcess(false);
  }
}