import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useState} from 'react';
import AuthScreen from "../Screens/AuthScreen";
import SignupScreen from "../Screens/SignupScreen";
import SampleScreen from "../Screens/SampleScreen";
import '../global.css';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
)

const ContentStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bes" component={SampleScreen} />
    </Stack.Navigator>
)


const Home = () => {
    const [session, setSession] = useState(true)

    return(
        
        session ? <AuthStack/> : <ContentStack/>
        
    )
}

export default Home


