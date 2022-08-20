import React,{useState} from "react";
import {View,StyleSheet,Dimensions} from 'react-native';
import Button from "../components/Button";
import {database} from '../Firebase/firebase';




//for maps
import MapView,{Marker} from 'react-native-maps';
import data from '../Data/data';

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

const Home = () => {

    const [region, setRegion] = useState(map_data[0]);

    const dummy_data = [{

        id:0,
        title:"Pothole",
        coordinates:{
            latitude:15.388855,
            longitude:73.817901
            
        }
    },
    {

        id:1,
        title:"Pothole",
        coordinates:{
            latitude:15.388888,
            longitude:73.817911
            
        }
    }

];

    const [markers,setMarker] = useState([{

        id:0,
        title:"Pothole",
        coordinates:{
            latitude:15.388855,
            longitude:73.817901
            
        }
    }]);


    const ReadData = async (location) => {
        const dbRef = database.ref();
        await dbRef.child("data").child(location).get().then((snapshot) => {
        if (snapshot.exists()) {

            //console.log(snapshot.val());

            setMarker([]);
            var data = [{
                id:1,
                title:"Pothole",
                coordinates:{
                    longitude:snapshot.val().longitude[0],
                    latitude:snapshot.val().latitude[0],
                }
            }];

            for(var i =1 ; i<snapshot.val().longitude.length ; i++)
            {
                //console.log(snapshot.val().longitude[i])
                data = [{
                    id:i+1,
                    title:"Pothole",
                    coordinates:{
                        latitude:snapshot.val().longitude[i],
                        longitude:snapshot.val().latitude[i],
                    }
                    
                },data];    
            }
            setMarker(data)
            console.log(markers);


        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }


    const readDataOffline = (loc_data) => {

        var local_data = [];
        
        for(var i = 0 ; i<loc_data.longitude.length ; i++)
        {
            //console.log(snapshot.val().longitude[i])
        
            local_data.push({
                id:i+1,
                title:"Pothole",
                coordinates:{
                    latitude:loc_data.latitude[i],
                    longitude:loc_data.longitude[i],
                }
                
            });    
        }


        setMarker(local_data)
        console.log("Markers ====> ",markers);
    }
   

    return(
        <View style={stylesheet.container}>
            <MapView 
                style={stylesheet.map} 
                region={region}
            >

          
            {    markers.map(marker => (
                    
                    <Marker 
                        key={marker.id}
                        coordinate={marker.coordinates}
                        title={marker.title}
                    />
                    
                ))
            
            }
          
            </MapView>

            <View style={stylesheet.buttonlist}>
                <Button 
                    title={"Vasco"}
                    onPress={()=>{
                        setRegion(map_data[0]);
                        readDataOffline(data.data.Vasco);
                    }}
                />
                
                <Button 
                    title={"Margao"}
                    onPress={()=>{
                        setRegion(map_data[1]);
                        readDataOffline(data.data.Margao);
                    }}
                />
                <Button 
                    title={"Panaji"}
                    onPress={()=>{
                        setRegion(map_data[2]);
                        readDataOffline(data.data.Panaji);
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