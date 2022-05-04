import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { ItemInterface } from '../interfaces/ItemInterface';

const data = [
  {
    id: 1,
    title: "High Priority",
    color: "#FF3636"
  },
  {
    id: 2,
    title: "Medium Priority",
    color: "#FFF73C"
  },
  {
    id: 3,
    title: "Low Priority",
    color: "#75FF44"
  },
  {
    id: 4,
    title: "All Priorities",
    color: "#2C80FF"
  },
]

const Item = ({ item, onPress, backgroundColor, textColor }: ItemInterface) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(item.color), backgroundColor]}>
    <Text style={[styles.text, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SelectPriority({ navigation }: any) {
  const handleList = () => {
    navigation.navigate("My List");
  };

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = 'black';

    return (
      <Item
        item={item}
        onPress={handleList}
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
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      paddingTop: 30
    },
    text: {
      fontWeight: 'bold',
      paddingTop: 10,
      color: "#000000",
      fontSize: 21,
      textAlign: 'center',
    }
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