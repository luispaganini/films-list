import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking } from "react-native";
import React, { useState } from "react";
import { ItemInterface } from "../interfaces/ItemInterface";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    title: "The Witcher",
    priority: 1,
    colorPriority: "#FF3636",
    img: "https://t.ctcdn.com.br/JK5USDhY3V3j0f6DtXxLt9UVPJs=/512x288/smart/filters:format(webp)/i575643.png",
    trailer: "https://youtu.be/tjujvMkqWe4"
  },
]

const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(item.color), backgroundColor]}>
      {/* <Image
        source={{uri: item.img}}
      /> */}
  </TouchableOpacity>
);

export default function List() {
  const handleYoutube = (link: string) => {
    Linking.openURL(link)
  };

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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
});

function buttonStyle(color: string) {
  const style = {
    button: {
      width: 250,
      height:60,
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: color
    }
  }
  return style.button;
}
