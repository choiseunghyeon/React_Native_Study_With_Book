import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <FlatList
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
export default TodoList;
