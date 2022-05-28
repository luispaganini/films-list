import { Image, StyleSheet, View, Text, ScrollView, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";


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

  const sendMovieLow = () => {
    sendMovie(movie, LOW);
    navigation.navigate("My List");
  };  
  const sendMovieMedium = () => {
    sendMovie(movie, MEDIUM);
    navigation.navigate("My List");
  };
  const sendMovieHigh = () => {
    sendMovie(movie, HIGH);
    navigation.navigate("My List");
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
          <Pressable style={styles.button} onPress={sendMovieLow}>
            <Text style={styles.textButton}>Low</Text>
          </Pressable>        
          <Pressable style={styles.button2} onPress={sendMovieMedium}>
            <Text style={styles.textButton}>Medium</Text>
          </Pressable>
          <Pressable style={styles.button3} onPress={sendMovieHigh}>
            <Text style={styles.textButton}>High</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

async function sendMovie(movieApi: ApiInterface, priority: number) {
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
  let createdMovie = await api.post("/movie", movie);
  if (createdMovie.status === 201) {
    console.log("Created!", createdMovie.data.model);
  } else {
    console.log("Error!", "This movie already exists.");
  }
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
    backgroundColor: "green"
  },  
  button2: {
    width: 70,
    height: 25,
    backgroundColor: "yellow"
  },
  button3: {
    width: 70,
    height: 25,
    backgroundColor: "red"
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
