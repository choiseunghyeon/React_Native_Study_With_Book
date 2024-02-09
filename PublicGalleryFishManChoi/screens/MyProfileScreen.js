import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useUserContext} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import Profile from '../components/Profile';
const MyProfileScreen = () => {
  const {user} = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: user.displayName});
  }, [navigation, user.displayName]);
  return <Profile userId={user.id} />;
};

export default MyProfileScreen;
