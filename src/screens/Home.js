import React from "react";
import {View,StyleSheet,Dimensions} from 'react-native';

//for maps
import MapView from 'react-native-maps';

const Home = () => {

    return(
        <View style={stylesheet.container}>
            <MapView style={stylesheet.map} />
        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});


export default Home;