import { Alert, Linking, Pressable, View } from "react-native";
import { Item } from "./ImageCard";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";
import api from "../services/api";

export const renderItem = ({ item }: any) => {
  const backgroundColor: string = "#9C9C9C";
  const color: string = 'black';

  return (
    <View style={styles.card}>
      <Item
      item={item}
      onPress={() => executeItem(item.priorityLevel, item.trailer)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
      />
      <Pressable onPress={() => removeCard(item.imdbId)}>
        <Icon name="trash-o" size={35} color="white" style={styles.trash} />
      </Pressable>
    </View>
      
  );
};

function executeItem(priority : number, trailer: string) {
  if (priority > 0 && priority < 4)
    Linking.openURL(trailer);
}

function removeCard(imdbId: string) {
  Alert.alert(
    "Removing card",
    "Are you sure to remove this card?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          api.delete((`/movie/${imdbId}`))
        },
      },
    ]
  )
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  trash: {
    marginRight: 10
  }
});