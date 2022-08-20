import React,{useState} from "react";
import {View,StyleSheet,Dimensions} from 'react-native';
import Button from "../components/Button";


//for maps
import MapView from 'react-native-maps';

const Home = () => {

    const map_data = [
        {
            latitude: 15.390489,
            longitude: 73.817258,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        {
            latitude: 15.291907,
            longitude: 73.969079,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        {
            latitude: 15.496667,
            longitude: 73.836670,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }

    ];

    const [region, setRegion] = useState(map_data[0]);

    return(
        <View style={stylesheet.container}>
            <MapView 
                style={stylesheet.map} 
                region={region}
            />

            <View style={stylesheet.buttonlist}>
                <Button 
                    title={"Vasco"}
                    onPress={()=>{
                        setRegion(map_data[0])
                    }}
                />
                
                <Button 
                    title={"Margao"}
                    onPress={()=>{
                        setRegion(map_data[1])
                    }}
                />
                <Button 
                    title={"Panaji"}
                    onPress={()=>{
                        setRegion(map_data[2])
                    }}
                />
            </View>
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
    buttonlist:{
        position:"absolute",
        width:'100%',
        flexDirection:"row",
        bottom:10,
        justifyContent:"space-evenly"

    }
});


export default Home;