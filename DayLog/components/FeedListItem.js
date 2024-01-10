import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  // 초 단위 계산
  const diff = (now - d.getTime()) / 1000;

  // 1분 미만
  if (diff < 60 * 1) {
    return '방금 전';
  }
  // 3일 미만
  if (diff < 60 * 60 * 24 * 3) {
    // 1시간 전, 3일 전으로 보여줌
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  // PPP - 날짜 / EEE - 요일 / p - 시간
  return format(d, 'PPP EEE p', {locale: ko});
}

function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

const FeedListItem = ({log}) => {
  const {title, body, date} = log;
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.select({
          ios: {backgroundColor: pressed ? '#efefef' : undefined},
        }),
      ]}
      android_ripple={{color: '#ededed'}}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});
export default FeedListItem;
