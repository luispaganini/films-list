import { FlatList, ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import {IApiInterface } from "../interfaces/IApiInterface";
import { renderItem } from "../components/renderCard";
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { ListStyles as styles } from "../styles/ListStyles"; 
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

type ListRouteParams = {
  priority?: string;
};
// Set the locale once at the beginning of your app.
//i18n.locale = Localization.locale;

export default function List({ route }: INavigationInterface) {
  i18n.translations = {
    en: { noMovie: "You don't have any movies on your list." },
    ptbr: { noMovie: "Você não tem nenhum filme em sua lista." },
    default: {noMovie: "You don't have any movies on your list."}
  };
  const [movies, setMovies] = useState([]);
  const { priority }: ListRouteParams = route.params as ListRouteParams;
  const [isLoading, setLoading] = useState<boolean>(false);
  let isMounted = true;
  useEffect(() => {
    setTimeout(() => {
      api.get(`/movies/priority/${priority}`).then((response) => {
        if (isMounted)
          setMovies(response.data);
      }).finally(() => {
        setLoading(true);
      });
    }, 500);
    return () => {
      isMounted = false;
      };
  });

  return (
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item: IApiInterface) => item.imdbId}
        />
        ): (
          <ActivityIndicator size="large" color="#00ff00" />
        )}

        {!(movies.length > 0) && (isLoading) ? (
          <Text style={styles.text}>{i18n.t('noMovie')}</Text>
        ): (
          <View></View>
        )}
        
      </SafeAreaView>
  );
}
