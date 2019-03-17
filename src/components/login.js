import React from 'react';
import { TextInput, View, ImageBackground ,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { tsConstructorType } from '@babel/types';

const Login = () => {
    tsConstructorType
    return (
        <ImageBackground style={styles.loginform}>
            <View style={styles.container}>
                <Icon
                    name={'ios-person'}
                    size={32}
                    color={'red'}
                    style={styles.inputicon} />
                <TextInput
                    style={styles.input}
                    placeholder={'Username'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>

            <View>
                <Icon
                    name={'ios-lock'}
                    size={32}
                    color={'red'}
                    style={styles.inputicon} />
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.btnEye}> 
                    <Icon name={'ios-eye'} size={26} color={'red'} />
                </TouchableOpacity>

                
            </View>

            <TouchableOpacity style={styles.btnlogin}> 
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            


        </ImageBackground>

    );
};


const styles = {
    loginform: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: null,
        height: null,
    },
    input: {
        //width:1000-55,
        height: 55,
        width: 300,
        borderRadius: 25,
        fontSize: 26,
        paddingLeft: 25,
        backgroundColor: 'blue',
        color: 'white',
        marginHorizontal: 25,
        position:'relative',
        marginVertical:17,
        
        
    },
    inputicon: {
        position:"absolute",
        display:'none',
        top:17,
        paddingLeft:15
    },
    btnEye:{
        position:"absolute",
        display:'none',
        top:17,
        right:15
    },
    btnlogin:{
        width:200,
        height:45,
        borderRadius:25,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:20
    },
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign:'center'
    }
};

export default Login;