import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const Item = ({ item, onPress, backgroundColor }: any) => (
<TouchableOpacity onPress={onPress} style={[buttonStyle(item.priorityLevel), backgroundColor]}>
  <View>
    <Image
        style={styles.image}
        source={{uri: item.backdrop}}
    />
  </View>
    
</TouchableOpacity>
);


const styles = StyleSheet.create({
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    height: "100%",
    borderRadius: 5,
  },
});

function buttonStyle(priority?: number) {
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
      marginLeft: 15,
      marginRight: 15,
      borderBottomWidth: 4,
      borderBottomColor: color
    }
  }
  return style.button;
}