import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
      <Button
        title="Detail1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
    </View>
  );
};

export default HomeScreen;
