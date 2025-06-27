import { Platform, Alert, Text, View, Image, TextInput, StyleSheet, Button, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import {PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { supabase } from "../lib/supabase";
import { CommonActions } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

const icons = {
    Landing : {
        focused: require("../assets/icons8-art-focused.png"),
        default: require("../assets/icons8-art-default.png")
    },

    Profile: {
        focused: require("../assets/icons8-profile-focused.png"),
        default: require("../assets/icons8-profile-default.png")
    },
}


function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const iconSource = isFocused
          ? icons[route.name]?.focused
          : icons[route.name]?.default;


        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center", justifyContent:"center" }}
          >
            {iconSource && (
              <Image
                source={iconSource}
                style={{ width: 20, height: 20, marginBottom: 4 }}
                resizeMode="contain"
              />
            )}

            <Text style={{ color: isFocused ? colors.primary : "white" , fontSize:10}}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

function SampleScreen() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1, backgroundColor:"black", paddingTop: StatusBar.currentHeight}}>
            <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{headerShown: false}}
            >
            <Tab.Screen name="Landing" component={LandingScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default SampleScreen;


const LandingScreen = ({navigation}) => {

    

    return(
        <View>
            <Text>IGFEWYGYEW</Text>
        </View>
    )
}




const ProfileScreen = ({navigation}) => {

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

