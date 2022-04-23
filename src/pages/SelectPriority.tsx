import { View, Text, StyleSheet, Button, Pressable} from 'react-native'
import React from 'react'

export default function SelectPriority({ navigation }: any) {
    const handleAbout = () => {
        navigation.navigate("My List");
      };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleAbout} >
          <Text style={styles.text}>High Priority</Text>
      </Pressable>          
      <Pressable style={styles.button2} onPress={handleAbout} >
          <Text style={styles.text}>Medium Priority</Text>
      </Pressable>         
      <Pressable style={styles.button3} onPress={handleAbout} >
          <Text style={styles.text}>Low Priority</Text>
      </Pressable>  
      <Pressable style={styles.button4} onPress={handleAbout} >
          <Text style={styles.text}>All Priorities</Text>
      </Pressable>   
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0F171E",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontWeight: 'bold',
      paddingTop: 10,
      color: "#000000",
      fontSize: 21,
      textAlign: 'center',
    },
    logo: {
      width: "100%",
      height: 150,
    },
    button: {
      width: 250,
      height:60,
      backgroundColor: "#9C9C9C",
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: "#FF3636"
    },
    button2: {
      width: 250,
      height:60,
      backgroundColor: "#9C9C9C",
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: "#FFF73C"
    },
    button3: {
      width: 250,
      height:60,
      backgroundColor: "#9C9C9C",
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: "#75FF44"
    },
    button4: {
      width: 250,
      height:60,
      backgroundColor: "#9C9C9C",
      marginBottom: 10,
      borderBottomWidth: 4,
      borderBottomColor: "#2C80FF"
    }
});