import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메시지',
  };
  return nameMap[routeName];
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
