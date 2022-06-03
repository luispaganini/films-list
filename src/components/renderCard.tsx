import { Linking } from "react-native";
import { ApiInterface } from "../interfaces/ApiInterface";
import { Item } from "./ImageCard";

export const renderItem = ({ item }: any) => {
  const backgroundColor: string = "#9C9C9C";
  const color: string = 'black';

  return (
      <Item
      item={item}
      onPress={() => executeItem(item.priorityLevel, item.trailer)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
      />
  );
};

function executeItem(priority : number, trailer: string) {
  if (priority > 0 && priority < 4)
    Linking.openURL(trailer);
}