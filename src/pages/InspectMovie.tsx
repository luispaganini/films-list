import { Image, StyleSheet, View, Text, ScrollView, Pressable, Button } from "react-native";
import React, { useState } from "react";


export default function InspectMovie({ navigation }: any) {
  const handleMyList = () => {
    navigation.navigate("My List");
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{uri: "https://sm.ign.com/t/ign_br/screenshot/default/the-witcher-netflix-09_j82n.h960.jpg"}}
        />
        <Text style={styles.textTitle}>The Witcher</Text>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        
        <Text style={styles.text}>IMDb: 9.3</Text>

        <Text style={styles.textTitle}>Priority</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Low</Text>
          </Pressable>        
          <Pressable style={styles.button2}>
            <Text style={styles.textButton}>Medium</Text>
          </Pressable>
          <Pressable style={styles.button3}>
            <Text style={styles.textButton}>High</Text>
          </Pressable>
        </View>
        <View style={styles.buttonConfirm}>
          <Button title="Add To List" onPress={handleMyList} />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F171E",
  },
  textTitle: {
    fontSize: 22,
    color: "#ffffff",
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign:"justify",
    color: "#ffffff",
  },
  logo: {
    width: "100%",
    height: 180,
  },
  buttons: {
    display: "flex",
    flexDirection:"row",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    width: 70,
    height: 25,
    backgroundColor: "green"
  },  
  button2: {
    width: 70,
    height: 25,
    backgroundColor: "yellow"
  },
  button3: {
    width: 70,
    height: 25,
    backgroundColor: "red"
  },
  textButton: {
    textAlign: "center"
  },
  buttonConfirm: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
  }
});
