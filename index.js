import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';
import Login from './src/components/login';
const App=()=>(
    <Login />
);

AppRegistry.registerComponent('nativeapp',()=>App);