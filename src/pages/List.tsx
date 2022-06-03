import { StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";
import { renderItem } from "../components/renderCard";

export default function List() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    api.get("/movies/priority/4").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: ApiInterface) => item.imdbId}
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
