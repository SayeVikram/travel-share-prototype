import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import AuthScreen from "../Screens/AuthScreen";
import SignupScreen from "../Screens/SignupScreen";
import SampleScreen from "../Screens/SampleScreen";
import '../global.css';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Appearance
} from 'react-native';
import Login from './Login';
import { supabase } from '../lib/supabase';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';





SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 750,
  fade: true,
});

const Home = () => {

    const [appIsReady, setAppIsReady] = useState(false);
    const [isSignedIn, setSignIn] = useState(null);

      useEffect(() => {
    async function prepare() {
      try {

        
        const { data: { user } } = await supabase.auth.getUser()

        setSignIn(user)
        

        

      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();

  }, []);

    const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


     const CustomStatusBar = ({backgroundColor, barStyle}) => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          barStyle={barStyle}
          backgroundColor={backgroundColor}
        />
      </View>
    );
  };

    return(

        <SafeAreaProvider>
            <SafeAreaView style={{flex:1, backgroundColor:"black", paddingTop: StatusBar.currentHeight}}>
                <StatusBar translucent hidden={false} 
                    barStyle="dark-content"
                    backgroundColor="#000000"
                    />


                <View onLayout={onLayoutRootView} style={{
                    flex: 1,
                    backgroundColor:"white"
                }}>
                    <Login  isSignedIn={isSignedIn} />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>

            
    );
}

export default Home


