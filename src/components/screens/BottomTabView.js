import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Ionicons from '../../../node_modules/react-native-vector-icons/Ionicons';
import Search from './Search';
import Reels from './Reels';
import Activity from './Activity';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const BottomTabView = (navigation) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                showIcon: true,
                tabBarStyle: {
                    height: 50,
                    backgroundColor: 'black',
                },
            })}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Reels" component={Reels} options={{
                tabBarLabel: 'Reels',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="add-circle-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Activity" component={Activity} options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-heart-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );

};

export default BottomTabView;