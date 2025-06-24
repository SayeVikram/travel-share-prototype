import React, {useState} from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/base';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import "../global.css";



const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <SafeAreaProvider>
        <SafeAreaView style={{flex:1, backgroundColor:"black", paddingTop: StatusBar.currentHeight}}>
        <ScrollView>
        <KeyboardAvoidingView behavior='height'>

        <View className="flex-1 bg-black h-screen justify-center items-center ">
            <Image source={require("../assets/travelshare.png")} style={{width: 200, height: 200}}/>
            
            <Card containerStyle={{backgroundColor: 'black', width: 300, height: 300}} className="flex justify-center items-center">
                <Text className="text-white text-center font-extrabold text-2xl mb-10"> Sign up </Text>
                <TextInput placeholderTextColor={'white'} keyboardType='email-address' enablesReturnKeyAutomatically={true} keyboardAppearance='dark' placeholder='Email' value={email} onChangeText={setEmail} style={styles.input}/>
                <TextInput placeholderTextColor={'white'} keyboardType='email-address' enablesReturnKeyAutomatically={true} keyboardAppearance='dark' placeholder='Password' value={password} onChangeText={setPassword} style={styles.input}/>

                <View style={{backgroundColor: '#333333', width: 100, borderRadius: 10}} className="mb-3 mt-2 ml-12">
                    <Button title='Sign up' color={'white'}/>
                </View>

                <Button title='Sign in?' onPress={() => (navigation.goBack())} />
            </Card>

        </View>

        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 175,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 5,
    color: 'white'
  },
});


export default SignupScreen