import { Image, StyleSheet, View, Text, ScrollView, Pressable, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";
import { setStatusBarBackgroundColor } from "expo-status-bar";


export default function InspectMovie({ navigation }: any) {
  const [movie, setMovie]: any = useState([]);
  const LOW = 1;
  const MEDIUM = 2;
  const HIGH = 3;

  useEffect(() => {
    api.get("/movie/tt0077766").then((response) => {
      setMovie(response.data);
    });
  }, []);

  const movieVerification = (priority: number) => {
    Alert.alert(
      "Adding movie",
      "Are you sure to add this movie to your movies list?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => {
          sendMovie(movie, priority);
          navigation.navigate("My List");
        } }
      ]
    );
  };  

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{uri: movie.poster}}
        />
        <Text style={styles.textTitle}>{movie.title}</Text>
        <Text style={styles.text}>{movie.description}</Text>
        
        <Text style={styles.text}>IMDb: {movie.score}</Text>

        <Text style={styles.textTitle}>Priority</Text>
        <View style={styles.buttons}>
          <Pressable style={[styles.button, {backgroundColor: "green"}]}
             onPress={() => {movieVerification(LOW)}}>
            <Text style={styles.textButton}>Low</Text>
          </Pressable>        
          <Pressable style={[styles.button, {backgroundColor: "yellow"}]}
             onPress={() => {movieVerification(MEDIUM)}}>
            <Text style={styles.textButton}>Medium</Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: "red"}]}
             onPress={() => {movieVerification(HIGH)}}>
            <Text style={styles.textButton}>High</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

function sendMovie(movieApi: ApiInterface, priority: number) {
  let movie = {
    title: movieApi.title,
    description: movieApi.description,
    imdbId: movieApi.imdbId,
    score: movieApi.score,
    trailer: movieApi.trailer,
    poster: movieApi.poster,
    backdrop: movieApi.backdrop,
    priorityLevel: priority
  }

  api.post("/movie", movie).then(() => {
    Alert.alert("Add movie", "Movie successfully added");
  }).catch((error) => {
    Alert.alert("Add movie", error.response.data);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F171E",
  },
  textTitle: {
    fontSize: 22,
    color: "#ffffff",
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign:"justify",
    color: "#ffffff",
  },
  logo: {
    width: "100%",
    height: 180,
  },
  buttons: {
    display: "flex",
    flexDirection:"row",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    width: 70,
    height: 25,
  },
  textButton: {
    textAlign: "center"
  },
  buttonConfirm: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
  }
});
