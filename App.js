import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Ionicons from './node_modules/react-native-vector-icons/Ionicons';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import BottomTabView from './src/components/screens/BottomTabView';
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';
import LoginScreen from './src/components/screens/LoginScreen';
import SignUpScreen from './src/components/screens/SignUpScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  // const BottomTabView = () => {
  //   return (
  //     <Tab.Navigator
  //       screenOptions={({ route }) => ({
  //         tabBarHideOnKeyboard: true,
  //         headerShown: false,
  //         showIcon: true,
  //         tabBarStyle: {
  //           height: 50,
  //           backgroundColor: 'black',
  //         },
  //       })}>
  //       <Tab.Screen name="Home" component={Home} options={{
  //         tabBarLabel: 'Home',
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="home" color={color} size={size} />
  //         ),
  //       }} />
  //       <Tab.Screen name="Search" component={Search} options={{
  //         tabBarLabel: 'Search',
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="search" color={color} size={size} />
  //         ),
  //       }} />
  //       <Tab.Screen name="Reels" component={Reels} options={{
  //         tabBarLabel: 'Reels',
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="add-circle-outline" color={color} size={size} />
  //         ),
  //       }} />
  //       <Tab.Screen name="Activity" component={Activity} options={{
  //         tabBarLabel: 'Activity',
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="ios-heart-outline" color={color} size={size} />
  //         ),
  //       }} />
  //       <Tab.Screen name="Profile" component={Profile} options={{
  //         tabBarLabel: 'Profile',
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="person-circle-outline" color={color} size={size} />
  //         ),
  //       }} />
  //     </Tab.Navigator>
  //   );

  // };

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="BottomTabView" component={BottomTabView} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
