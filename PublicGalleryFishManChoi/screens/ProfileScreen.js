import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Profile from '../components/Profile';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId, displayName} = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: displayName,
    });
  }, [displayName, navigation]);
  return <Profile userId={userId} />;
};

export default ProfileScreen;
