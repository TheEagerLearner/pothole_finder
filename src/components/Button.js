import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

const Button = ({title,style,onPress}) => {

    return(
        
        <TouchableOpacity 
            style={[stylesheet.container,style]}
            onPress={onPress}
        >
            <Text style={{
                fontSize:18,
                color:'#FFF4CF'
            }}>{title}</Text>
        </TouchableOpacity>

    );
}

const stylesheet = StyleSheet.create({
    container:{
        padding:10,
        borderWidth:0,
        borderRadius:3,
        elevation:2,
        backgroundColor:'#FFB200',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:30

    }
});

export default Button;