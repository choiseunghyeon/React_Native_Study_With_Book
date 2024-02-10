import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';
import events from '../lib/events';
import SplashScreen from 'react-native-splash-screen';

const FeedScreen = () => {
  const {noMorePost, onLoadMore, onRefresh, posts, refreshing} = usePosts();

  const postsReady = posts !== null;
  useEffect(() => {
    if (postsReady) {
      SplashScreen.hide();
    }
  }, [postsReady]);
  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !noMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
};

export default FeedScreen;

const renderItem = ({item}) => (
  <PostCard
    createdAt={item.createdAt}
    description={item.description}
    id={item.id}
    user={item.user}
    photoURL={item.photoURL}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});
