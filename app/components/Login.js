import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, 
  Text, 
  View
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }


go=()=>{
  if(this.state.email==""){
    alert("Email should not be empty")
  }
  else if(this.state.password=="svce"){
    this.setState({login:true})
    this.props.navigation.navigate("Boiler");
  }
  else{
    alert("Incorrect Password")
  }
}



  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("./unitx.png")} />
            <Text style={styles.subtext}>Unit-X</Text>
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                style={styles.textss}
                placeholder="Email/Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                
              />
            </View>
            <View style={styles.window}>
              <TextInput style={styles.textss}
              
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={()=>this.go()}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  textss:{
    color:"white"
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
