import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking, Image, Button, Modal, TextInput, Pressable, Keyboard } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InspectMovie from "./InspectMovie";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item} from "../components/ImageCard"; 


export default function FindMovie() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("tt0073196");
  const [searchMovie, setSearchMovie] = useState("");
  

  const handleModal = (imdbId: string) => {
    setModalVisible(true);
    setSelectedId(imdbId);
  };

  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = 'black';

    return (
      <Item
        item={item}
        onPress={() => handleModal(item.imdbId)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput value={searchMovie} onChangeText={setSearchMovie} placeholder="Search by movie" onSubmitEditing={findMovieHandler}/>
        <Pressable onPress={findMovieHandler}>
          <Icon name={"search"} size={25} color={"#494949"} />
        </Pressable>
      </View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: ApiInterface) => item.imdbId}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this callback runs when device "back" button is pressed
          setModalVisible(!modalVisible);
        }}
        >
          <InspectMovie imdbId={selectedId}/>
      </Modal>
    </SafeAreaView>
  );

  function findMovieHandler() {
    Keyboard.dismiss;
    api.get(`/movie/name?name=${searchMovie}`).then((response) => {
      setMovies(response.data);
      console.log(response.data)
    });
  }
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
  },
  content: {
    width: "80%",
    height: "80%",
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
  },
  searchBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    width: "90%",
    borderRadius: 10,
    marginBottom: 15
  }
});

