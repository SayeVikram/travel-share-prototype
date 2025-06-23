import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';



const SignupScreen = ({navigation}) => {
    return(
        <View>
            <Text>This is signup</Text>
            <Button title='Clcik for sign in instead' onPress={() => (navigation.goBack())}/>
        </View>
    )
}

export default SignupScreen