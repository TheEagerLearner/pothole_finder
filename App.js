//required imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import Home from './src/screens/Home';
import SplashScreen from "./src/screens/SplashScreen";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;