import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderlessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>헤더가 없네?</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
};

export default HeaderlessScreen;
