import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '../../../node_modules/react-native-vector-icons/FontAwesome';
import Feather from '../../../node_modules/react-native-vector-icons/Feather';
import Ionic from '../../../node_modules/react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import BottomTabView from '../screenComponents/BottomTabView';

const Home = ({ navigation }) => {
  return (
    <View style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100%'
    }}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome name="home" style={{ fontSize: 24, color: 'white' }} />
        <Text
          style={{
            color: 'white',
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Spectrum
        </Text>
        <Feather name="navigation" style={{ fontSize: 24, color: 'white' }} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Ionic
            name="reload-circle"
            style={{ fontSize: 60, opacity: 0.2, color: 'white' }}
          />
        </View>
      </ScrollView>
      <BottomTabView />
    </View>
  );
};

export default Home;
