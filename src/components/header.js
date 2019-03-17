import React from 'react';
import {Text,View} from 'react-native';

const Header=()=>{
    const {textStyle,viewStyle}=styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>My First App</Text>
        </View>
    );
};

const styles={
    viewStyle:{
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        height:70
        
    },
    textStyle:{
        fontSize:20,
        color:'white'
    }
};

export default Header;