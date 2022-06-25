import {
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { IApiInterface } from "../interfaces/IApiInterface";
import { INavigationInterface } from "../interfaces/INavigationInterface";
import { InspectMovieStyle as styles } from "../styles/InspectMovieStyle";
import {MovieTuple} from "../interfaces/IMovieTupleType";

type InspectMovieRouteParams = {
  imdbId?: string;
};

export default function InspectMovie({ navigation, route }: INavigationInterface) {
  const [movie, setMovie]: MovieTuple = useState<Array<IApiInterface>>([]);
  const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const LOW = 1;
  const MEDIUM = 2;
  const HIGH = 3;

  const { imdbId }: InspectMovieRouteParams = route.params as InspectMovieRouteParams;

  useEffect(() => {
    api.get(`/movie/${imdbId}`).then((response) => {
      setMovie(response.data);
      setLoading(true);
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
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            sendMovie(movie, priority);
            navigation.navigate("My List");
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View>
          <Image style={styles.logo} source={{ uri: movie.poster }} />
          <Text style={styles.textTitle}>{movie.title}</Text>
          <Text style={styles.text}>{movie.description}</Text>

          <Text style={styles.text}>IMDb: {movie.score}</Text>

          <Text style={styles.textTitle}>Priority</Text>
          <View style={styles.buttons}>
            <Pressable
              style={[styles.button, { backgroundColor: "green" }]}
              onPress={() => {
                movieVerification(LOW);
              }}
            >
              <Text style={styles.textButton}>Low</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: "yellow" }]}
              onPress={() => {
                movieVerification(MEDIUM);
              }}
            >
              <Text style={styles.textButton}>Medium</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: "red" }]}
              onPress={() => {
                movieVerification(HIGH);
              }}
            >
              <Text style={styles.textButton}>High</Text>
            </Pressable>
          </View>
        </View>
      ): (
        <ActivityIndicator style={styles.loading} size="large" color="#00ff00" />
      )}
      
    </ScrollView>
  );
  function sendMovie(movieApi: IApiInterface, priority: number) {
    let movie = {
      title: movieApi.title,
      description: movieApi.description,
      imdbId: movieApi.imdbId,
      score: movieApi.score,
      trailer: movieApi.trailer,
      poster: movieApi.poster,
      backdrop: movieApi.backdrop,
      priorityLevel: priority,
    };

    api.post("/movie", movie)
      .then(() => {
        setIsSuccessfull(true);
        Alert.alert("Add movie", "Movie successfully added");
      })
      .catch((error) => {
        setIsSuccessfull(false);
        Alert.alert("Add movie", error.response.data);
      });
  }
}

