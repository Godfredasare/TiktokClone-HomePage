import { View, Text, Image } from "react-native";
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";
import FriendScreen from "../screens/Friends";
import UploadScreen from "../screens/Upload";
import InboxScreen from "../screens/Inbox";
import ProfileScreen from "../screens/Profile";
import { Entypo, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

import PlusIcon from '../../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
     screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
      tabBarStyle:{
          backgroundColor: '#000'
        }
     }}
    >

    <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="home" size={24} color='white'/>
        )
      }}
     />

    <Tab.Screen 
      name="friends" 
      component={FriendScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Octicons name="people" size={24} color='white'/>
        )
      }}
      />

    <Tab.Screen 
      name="Upload"
      component={UploadScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image 
           source={PlusIcon}
           style={{height:35, resizeMode: 'contain'}}
          />
        )
      }}
      />

    <Tab.Screen
      name="Inbox" 
      component={InboxScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="message-minus-outline" size={24} color='white'/>
        )
      }}
      />

    <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" size={24} color='white'/>
        )
      }}
      />
  </Tab.Navigator>
  );
};

export default BottomNavigation;
