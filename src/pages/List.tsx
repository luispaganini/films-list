import { StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import {IApiInterface } from "../interfaces/IApiInterface";
import { renderItem } from "../components/renderCard";
import { INavigationInterface } from "../interfaces/INavigationInterface";

export default function List({ navigation, route }: INavigationInterface) {
  const [movies, setMovies] = useState([]);
  const { priority }: any = route.params;
  let isMounted = true;
  useEffect(() => {
    setTimeout(() => {
      api.get(`/movies/priority/${priority}`).then((response) => {
        if (isMounted)
          setMovies(response.data);
      });
    }, 500);
    return () => {
      isMounted = false;
      };
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: IApiInterface) => item.imdbId}
      />
    </SafeAreaView>
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
    color: "white",
  }
});
