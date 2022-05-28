import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ItemInterface } from "../interfaces/ItemInterface";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import { ApiInterface } from "../interfaces/ApiInterface";

// const data = [
//   {
//     id: 1,
//     title: "The Witcher",
//     priority: 1,
//     colorPriority: "#FF3636",
//     img: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png",
//     trailer: "https://youtu.be/tjujvMkqWe4"
//   },  
//   {
//     id: 2,
//     title: "The Witcher",
//     priority: 1,
//     colorPriority: "blue",
//     img: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png",
//     trailer: "https://youtu.be/tjujvMkqWe4"
//   },
//   {
//     id: 3,
//     title: "The Witcher",
//     priority: 1,
//     colorPriority: "yellow",
//     img: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png",
//     trailer: "https://youtu.be/tjujvMkqWe4"
//   },
// ]

const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(item.priorityLevel), backgroundColor]}>
    <View>
      <Image
        style={styles.buttonFacebookStyle}
        source={{uri: item.backdrop}}
      />
    </View>
     
  </TouchableOpacity>
);

export default function List() {
  const [movies, setMovies] = useState([]);
  const handleYoutube = (link: string) => {
    //Linking.openURL(link)
  };
  useEffect(() => {
    api.get("/movies/priority/4").then((response) => {
      setMovies(response.data);
    });
  }, []);

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = 'black';

    return (
      <Item
        item={item}
        onPress={handleYoutube(item.trailer)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: ApiInterface) => item.imdbId}
        extraData={selectedId}
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
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    height: "100%",
    borderRadius: 5,
  }
});

function buttonStyle(priority: number) {
  let color = ""
  switch(priority){
    case 1:
      color = "green"
      break;
    case 2:
      color = "yellow"
      break;
    case 3:
      color = "#FF3636"
      break;
    default:
      color = "black"
  }

  const style = {
    button: {
      width: 250,
      height:100,
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: color
    }
  }
  return style.button;
}
