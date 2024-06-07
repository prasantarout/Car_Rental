import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import Colors from '../../themes/Colors';
import normalize from '../../utils/helpers/dimen';

const CustomCalender = props => {
  const getCurrentMonth = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return {month, year};
  };
  const getMarked = () => {
    const {month, year} = getCurrentMonth();
    let marked = {};

    const periods = [
      {
        start: 5,
        end: 10,
        color: '#f5edf8',
        darkColor: '#f5edf8',
      },
      {
        start: 13,
        end: 18,
        color: '#f5edf8',
        darkColor: '#f5edf8',
      },
      {
        start: 19,
        end: 25,
        color: '#f5edf8',
        darkColor: '#f5edf8',
      },
    ];

    periods.forEach(period => {
      for (let i = period.start; i <= period.end; i++) {
        let day = i.toString().padStart(2, '0');
        marked[`${year}-${month}-${day}`] = {
          startingDay: i === period.start,
          endingDay: i === period.end,
          color: period.color,
          textColor: '#000',
          disabled: false,

          ...(i >= period.start || i <= period.end
            ? {color: period.darkColor, textColor: Colors.pink}
            : {}),
        };
      }
    });

    return marked;
  };

  const {month, year} = getCurrentMonth();
  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        current={`${year}-${month}-01`}
        markingType={'period'}
        markedDates={getMarked()}
        style={{
          margin: 12,
          backgroundColor: Colors.white,
          borderRadius: normalize(10),
          elevation: 3,
          shadowColor: '#9E4DB6',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 0.1,
          shadowRadius: 10,
          // borderWidth: 4,
          // borderColor: 'rgba(100, 100, 100, 0.2)'
        }}
        theme={{
          calendarBackground: props?.calendarBackground,
          //   dayTextColor: '#fff',
          //   textDisabledColor: '#444',
          monthTextColor: '#888',
        }}
      />
    </SafeAreaView>
  );
};

export default CustomCalender;

const styles = StyleSheet.create({});
