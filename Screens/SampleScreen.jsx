import React from 'react';
import { Text, View, Image } from "react-native";
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { supabase } from '../lib/supabase';
import { Alert } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';



const SampleScreen = ({navigation}) => {

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if(error){
            Alert.alert(error)
        }
        else{
            navigation.dispatch(
                                CommonActions.reset(
                                    {
                                        index: 0,
                                        routes: [{ name: 'Auth' }],
                                    }
                                )
                            )
        }
    }

    return(
        <View>
            <Button title='CLICK TO SGIRN OUT' onPress={() => signOut()}/>
        </View>
    )
}

export default SampleScreen