import React, {useEffect} from 'react';
import {Feed} from '../components/feed';
import {LogoutButton} from '../components/logout-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Profile} from '../components/profile';
import {Upload} from '../components/upload';

const Tab = createMaterialBottomTabNavigator();

const FeedPage = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Feed',
      headerRight: () => <LogoutButton />,
    });
  }, []);
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'rgb(221, 244, 244)'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Feed');
          },
        })}
      />

      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          title: 'Add',
          tabBarIcon: ({color}) => (
            <AntDesign name="camera" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Upload');
          },
        })}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={27} color={'black'} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default FeedPage;
