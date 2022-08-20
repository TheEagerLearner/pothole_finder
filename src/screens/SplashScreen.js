import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';

const SplashScreen = ({navigation}) => {


    setTimeout(()=>{
        navigation.navigate("Home");
    },3000);

    return(
        <View style={stylesheet.container}>

            <Image 
                style={stylesheet.background_image}
                source={require('./../Images/pothole.jpg')}    
            />
            <Text
                style={{
                    position:'absolute',
                    top:40,
                    fontSize:42,
                    fontWeight:'bold'
                }}
            >
                Pothole Finder
            </Text>

        </View>
    );
}

const stylesheet = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
        
    },
    background_image:{
        
        
    }

});

export default SplashScreen;