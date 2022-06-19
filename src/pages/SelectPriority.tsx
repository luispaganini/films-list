import { Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { ItemInterface } from '../interfaces/ItemInterface';
import { colorPriority } from '../components/colorPriorities/ColorPriorityData'; 

const Item = ({ item, onPress, backgroundColor, textColor }: ItemInterface) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(item.color), backgroundColor]}>
    <Text style={[styles.text, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SelectPriority({ navigation }: any) {
  const handleList = (priority: number) => {
    const params  = { priority };
    navigation.navigate("My_List", params);
  };

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: any) => {
    const backgroundColor: string = "#9C9C9C";
    const color: string = 'black';

    return (
      <Item
        item={item}
        onPress={() => handleList(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={colorPriority}
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