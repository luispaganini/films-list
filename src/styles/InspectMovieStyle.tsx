import { StyleSheet } from "react-native";

export const InspectMovieStyle = StyleSheet.create({
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
      textAlign: "justify",
      color: "#ffffff",
    },
    logo: {
      width: "100%",
      height: 180,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 30,
    },
    button: {
      width: 70,
      height: 25,
    },
    textButton: {
      textAlign: "center",
    },
    buttonConfirm: {
      marginBottom: 20,
      marginRight: 10,
      marginLeft: 10,
    },
    loading: {
      display:"flex", 
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginTop: "50%"
    }
  });