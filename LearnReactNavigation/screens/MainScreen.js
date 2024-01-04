/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, []),
  );

  return (
    <View>
      <Text>id</Text>
      <Button
        title="Deetail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}
function SearchScreen({navigation}) {
  useEffect(() => {
    console.log('search mounted');
    return () => {
      console.log('search unmounted');
    };
  });

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}
function NotificationScreen({navigation}) {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}

function MessageScreen({navigation}) {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}
const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
