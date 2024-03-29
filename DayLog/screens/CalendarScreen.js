import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import LogContext from '../contexts/LogContext';
import CalendarView from '../components/CalendarView';
import {format} from 'date-fns';
import FeedList from '../components/FeedList';

const CalendarScreen = () => {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  console.log(markedDates);
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectedDate={setSelectedDate}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});
export default CalendarScreen;
