import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import FindMovie from "./pages/FindMovie";
import Home from "./pages/Home";
import List from "./pages/List";
import SelectPriority from "./pages/SelectPriority";
import InspectMovie from "./pages/InspectMovie";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackFind = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Find_Movies" component={FindMovie} />
    <Stack.Screen name="Inspect_Movie" component={InspectMovie} />
  </Stack.Navigator>
);

const StackMyList = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Priority" component={SelectPriority} />
    <Stack.Screen name="My_List" component={List} />
  </Stack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }): any => ({
          tabBarIcon: (color: string, size: number) => {
            let iconName: string = "";
            size = 25;
            color = "#3C3C3C";
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Find Movies":
                iconName = "plus";
                break;
              case "My List":
                iconName = "list";
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "red",
            style: {
              backgroundColor: "#3C3C3C",
            },
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Find Movies" component={StackFind} />
        <Tab.Screen name="My List" component={StackMyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}