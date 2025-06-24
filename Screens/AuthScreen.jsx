import React from 'react';
import { Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import '../global.css';


const AuthScreen = ({navigation}) => {
    return(
        <View className="bg-black h-screen flex-1 justify-center">
            <Text className="font-extrabold text-2xl text-center text-red-500">This is Sign in authorization</Text>
            <Button title='click for signup instead' onPress={() => (navigation.navigate('Signup'))}/>
        </View>
    )
}

export default AuthScreen