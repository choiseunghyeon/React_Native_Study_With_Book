import {
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useContext(SearchContext);
  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={onChangeText}
        placeholder="검색어를 입력하세요"
        autoFocus
      />
      <Pressable
        onPress={() => onChangeText('')}
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
export default SearchHeader;
