import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrolledToBottom, ListHeaderComponent}) => {
  const onScroll = e => {
    if (!onScrolledToBottom) {
      return;
    }
    /*
      contentSize.height - FlatList 내부의 전체 크기
      layoutMeasurement.height - 화면에 나타난 FlatList의 실제 크기
      contentOffset.y는 스크롤 맨 위에서는 0, 맨 아래에서는 contenttSize.height - layoutMeasurement.height를 계산한 값
      contentSize.height - layoutMeasurement.height - contentOffset.y가 0에 가까워진다면 스크롤이 바닥에 가까워지는 것
    */
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    // 아이템 개수가 적어 스크롤이 되는지 여부
    const isScrollable = contentSize.height > layoutMeasurement.height;
    if (distanceFromBottom < 72 && isScrollable) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
export default FeedList;
