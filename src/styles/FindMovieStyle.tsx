import { StyleSheet } from "react-native";

export const FindMovieStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0F171E",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      color: "white",
      textAlign: "center",
    },
    content: {
      width: "80%",
      height: "80%",
      margin: 8,
      padding: 8,
      backgroundColor: "white",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "space-around",
    },
    searchBar: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      padding: 5,
      justifyContent: "space-between",
      width: "90%",
      borderRadius: 10,
      marginBottom: 15,
      marginTop: 25
    },
    loading: {
      flex: 1,
      flexDirection: "row",
      display:"flex", 
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    }
  });