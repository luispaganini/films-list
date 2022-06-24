import { StyleSheet, View, FlatList, TextInput, Pressable, Keyboard, ActivityIndicator, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { IApiInterface } from "../interfaces/IApiInterface";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item} from "../components/ImageCard"; 
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { FindMovieStyle as styles } from "../styles/FindMovieStyle";

export default function FindMovie({navigation} : INavigationInterface) {
  const [movies, setMovies]:any = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isFirstAccess, setFirstAcess] = useState<boolean>(true);


  const handleNavigate = (imdbId: string) => {
    const params = { imdbId };
    navigation.navigate("Inspect_Movie", params);
  };

  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = "black";
    
    return (
      <Item
        item={item}
        onPress={() => handleNavigate(item.imdbId)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
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
            <Text style={styles.text}>Your Welcome to Films-list.</Text>
            <Text style={styles.text}>Have fun!</Text>
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
    }).finally(() => {
      setLoading(false);
    });
    setFirstAcess(false);
  }
}