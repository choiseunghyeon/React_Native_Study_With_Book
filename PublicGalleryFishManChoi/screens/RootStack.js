import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import MainTab from './MainTab';
import {useUserContext} from '../contexts/UserContext';
import {subscribeAuth} from '../lib/auth';
import {getUser} from '../lib/users';
import UploadScreen from './UploadScreen';
import ModifyScreen from './ModifyScreen';
import SettingScreen from './SettingScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {user, setUser} = useUserContext();

  useEffect(() => {
    const unsubscribe = subscribeAuth(async curuentUser => {
      unsubscribe();
      console.log(curuentUser);
      if (!curuentUser) {
        SplashScreen.hide();
        return;
      }
      const profile = await getUser(curuentUser.uid);
      if (!profile) {
        return;
      }
      setUser(profile);
    });
  }, [setUser]);
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen
            name="Modify"
            component={ModifyScreen}
            options={{title: '설명 수정', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{title: '설정', headerBackTitle: '뒤로가기'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
