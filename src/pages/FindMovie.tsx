import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking, Image, Button, Modal, TextInput, Pressable, Keyboard } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ItemInterface } from "../interfaces/ItemInterface";
import { SafeAreaView } from "react-native-safe-area-context";
import InspectMovie from "./InspectMovie";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(), backgroundColor]}>
    <View>
      <Image
        style={styles.image}
        source={{uri: item.backdrop}}
      />
    </View>
     
  </TouchableOpacity>
);

export default function FindMovie() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");

  const handleYoutube = () => {
    return (
      <View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this callback runs when device "back" button is pressed
          setModalVisible(!modalVisible);
        }}
        >
          <InspectMovie></InspectMovie>
        </Modal>
      </View>
    );
    
    //Linking.openURL("https://youtu.be/tjujvMkqWe4")
  };


  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = 'black';

    return (
      <Item
        item={item}
        onPress={handleYoutube}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput value={searchMovie} onChangeText={setSearchMovie} placeholder="Search by movie" onSubmitEditing={Keyboard.dismiss}/>
        <Pressable onPress={findMovieHandler} onPressOut={Keyboard.dismiss}>
          <Icon name={"search"} size={25} color={"#494949"} />
        </Pressable>
      </View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: ApiInterface) => item.imdbId}
        extraData={selectedId}
      />
    </SafeAreaView>
  );

  function findMovieHandler() {
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
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    height: "100%",
    borderRadius: 5,
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

function buttonStyle() {
  const style = {
    button: {
      width: 250,
      height:100,
      marginBottom: 10,
    }
  }
  return style.button;
}

