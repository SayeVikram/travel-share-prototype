import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../Screens/AuthScreen';
import SampleScreen from '../Screens/SampleScreen';
import SignupScreen from '../Screens/SignupScreen';


const Stack = createNativeStackNavigator();

const ContentStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName= "Bes">
            <Stack.Screen name="Bes" component={SampleScreen} />
            <Stack.Screen name="Auth" component={AuthStack}/>
    </Stack.Navigator>
)

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName= "Auth">
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Content" component={ContentStack} />
    </Stack.Navigator>
)


const Login = ({isSignedIn}) => {

    return(
        
        <View className="flex-1">
       {isSignedIn ? <ContentStack/> : <AuthStack />}
       </View>

    )
}

export default Login;