import { Text, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { ItemInterface } from '../interfaces/IItemInterface';
import { colorPriority } from '../components/colorPriorities/ColorPriorityData'; 
import { INavigationInterface } from '../interfaces/INavigationInterface';
import { SelectPriorityStyle as styles } from '../styles/SelectPriorityStyle';

const Item = ({ item, onPress, backgroundColor, textColor }: ItemInterface) => (
  <TouchableOpacity onPress={onPress} style={[buttonStyle(item.color), backgroundColor]}>
    <Text style={[styles.text, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SelectPriority({ navigation }: INavigationInterface) {
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