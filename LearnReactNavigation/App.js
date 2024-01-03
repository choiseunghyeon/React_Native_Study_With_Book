/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function SearchScreen({navigation}) {
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
const App = () => {
  return (
    <NavigationContainer>
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
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
