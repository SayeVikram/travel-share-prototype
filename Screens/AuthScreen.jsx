import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import '../global.css';


const AuthScreen = ({navigation}) => {
    return(
        <View>
            <Text className="font-extrabold text-2xl text-center text-red-500">This is auth</Text>
            <Button title='Clcik for signup instead' onPress={() => (navigation.navigate('Signup'))}/>
        </View>
    )
}

export default AuthScreen