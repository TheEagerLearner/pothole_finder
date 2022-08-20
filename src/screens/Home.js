import React from "react";
import {View,StyleSheet,Text} from 'react-native';

const Home = () => {

    return(
        <View style={stylesheet.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});


export default Home;