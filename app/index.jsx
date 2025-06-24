import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useState} from 'react';
import AuthScreen from "../Screens/AuthScreen";
import SignupScreen from "../Screens/SignupScreen";
import SampleScreen from "../Screens/SampleScreen";
import '../global.css';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './Login';



const Home = () => {
    const [isSignedIn, setSignIn] = useState(false);
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
                <StatusBar translucent hidden={false} 
                    barStyle="light-content"
                    backgroundColor="#000000"
                    />


                <View  className="flex-1 bg-black">
                    <Login  isSignedIn={isSignedIn} />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
        
    );
}

export default Home


