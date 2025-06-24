import React from 'react';
import { Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const SignupScreen = ({navigation}) => {
    return(
        <View className="flex-1 bg-black h-screen justify-center">
            <Text className="text-red-500 text-center">This is signup</Text>
            <Button title='click for sign in instead' onPress={() => (navigation.goBack())}/>
        </View>
    )
}

export default SignupScreen