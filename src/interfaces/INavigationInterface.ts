import { NavigationProp, RouteProp, Router } from "@react-navigation/native";

export interface INavigationInterface {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>
}