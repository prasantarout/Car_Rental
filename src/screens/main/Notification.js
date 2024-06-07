import React from 'react';
import {FlatList, Text, View} from 'react-native';
import css from '../../themes/Css';
import Header from '../../components/general/Header';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';

function Notification(props) {
  const unreadData = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.',
      time: '09:20pm',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.',
      time: '09:20pm',
    },
  ];
  const UnreadRender = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          borderWidth: normalize(1),
          borderColor: '#F2F2F2',
          paddingVertical: normalize(20),
          marginTop: normalize(15),
          borderRadius: normalize(15),
          paddingHorizontal: normalize(12),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#060606',
              fontFamily: Fonts.Roboto_Medium,
              fontSize: normalize(12),
            }}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: '#9E4DB6',
              fontFamily: Fonts.Roboto_Medium,
              fontSize: normalize(10),
            }}>
            {item?.time}
          </Text>
        </View>
        <Text
          style={{
            color: '#949494',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
            marginTop: normalize(5),
          }}>
          {item?.description}
        </Text>
      </View>
    );
  };
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Notification'}
        enableMenuButton
      />
      <View style={{marginHorizontal: normalize(10)}}>
        <Text
          style={{
            color: '#9E4DB6',
            fontSize: normalize(16),
            fontFamily: Fonts.Roboto_Bold,
            textTransform: 'capitalize',
            marginTop: normalize(15),
          }}>
          Unread notification
        </Text>
        <FlatList data={unreadData} renderItem={UnreadRender} />
      </View>
    </View>
  );
}

export default Notification;
