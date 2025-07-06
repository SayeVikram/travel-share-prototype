import React, {useState} from 'react';
import { Alert, Text, View, Image, TextInput, StyleSheet, Button, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Card } from '@rneui/base';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import "../global.css";
import { supabase } from '../lib/supabase';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const AuthScreen = ({navigation}) => {

    async function signInWithEmail() {
    setLoading(true)
    const { data: { session }, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(session){
        navigation.dispatch(
                    CommonActions.reset(
                        {
                            index: 0,
                            routes: [{ name: 'Content' }],
                        }
                    )
                )
    }

    if (error) Alert.alert(error.message)
    setLoading(false)
  }


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return(
        <SafeAreaProvider>
        <SafeAreaView style={{flex:1, backgroundColor:"white", paddingTop: StatusBar.currentHeight}} >
        <ScrollView>
        <KeyboardAvoidingView behavior='height'>


        <View style={{
            flex:1,
            backgroundColor:"white",
            height:"100vh",
            justifyContent:'center',
            alignItems:'center',
            marginTop:50
        }}>
            <Image source={require("../assets/travelshare.png")} style={{width: 200, height: 200}}/>
            
            <Card containerStyle={{backgroundColor: 'white', width: 300, height: 300}} className="flex justify-center items-center">
                <Text className="text-black text-center font-extrabold text-2xl mb-5"> Sign in </Text>
                
                    <TextInput placeholderTextColor={'black'} keyboardType='email-address' enablesReturnKeyAutomatically={true} keyboardAppearance='dark' placeholder='Email' value={email} onChangeText={setEmail} style={styles.input}/>
                    
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TextInput secureTextEntry={!showPassword}  placeholderTextColor={'black'} keyboardType='email-address' enablesReturnKeyAutomatically={true} keyboardAppearance='dark' placeholder='Password' value={password} onChangeText={setPassword} style={styles.input}/>
                        <MaterialCommunityIcons size={18}  color="#aaa" name={showPassword ? 'eye-off' : 'eye'} onPress={() => toggleShowPassword()}/>
                    </View>
                <View style={{backgroundColor: '#333333', width: 100, borderRadius: 10}} className="mb-3 mt-2 ml-14">
                    <Button disabled={loading} title='Sign in' color={'white'} onPress={() => signInWithEmail()}/>
                </View>

                <Button title='Sign up?' onPress={() => (navigation.navigate('Signup'))}/>
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
    color: 'black'
  },
});




export default AuthScreen