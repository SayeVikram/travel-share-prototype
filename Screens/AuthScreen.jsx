import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';



const AuthScreen = ({navigation}) => {
    return(
        <View>
            <Text>This is authScreen</Text>
            <Button title='Clcik for signup instead' onPress={() => (navigation.navigate('Signup'))}/>
        </View>
    )
}

export default AuthScreen