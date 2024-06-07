import React, {useState} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import css from '../../themes/Css';
import Header from '../../components/general/Header';
import SafeView from '../../components/general/SafeView';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import TextInputItem from '../../components/form/TextinputItem';
import Icons from '../../themes/Icons';
import Accordian from '../../components/general/Accordian';

function HelpCenter(props) {
  const [search, setsearch] = useState('');

  const toggleAccordian = index => {
    const newAccordianStates = [...accordianStates];
    newAccordianStates[index] = !newAccordianStates[index];
    setAccordianStates(newAccordianStates);
  };
  const faqData = [
    {
      _id: '65bfc6d1110e376908714ecd',
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
    },
    {
      _id: '65c0ef0c7dd158326b0fb695',
      question: 'Lorem ipsum dolor sit amet consec?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
    },
    {
      _id: '65c32f71eee168ddc5ac164b',
      question: 'Lorem ipsum dolor sit amet consec?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
    },
    {
      _id: '65cc8280cbf2dface2a7cd09',
      question: 'Lorem ipsum dolor sit amet consec?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
    },
  ];
  const [accordianStates, setAccordianStates] = useState(
    Array(faqData?.length).fill(false),
  );
  const renderAccordian = ({item, index}) => {
    return (
      <Accordian
        title={item?.question}
        info={item?.answer}
        onPress={() => toggleAccordian(index)}
        isOpen={accordianStates[index]}
        style={[css.mb10, css.w100]}
        titleStyle={style.AccText}
      />
    );
  };
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableBackButton
        enableLightTheme
        headerBlackText={'help centre'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView marginHorizontal={normalize(10)}>
        <Text style={style.AllText}>How can we help you?</Text>
        <View style={style.container}>
          <TextInputItem
            borderRadius={normalize(30)}
            isleftimage={true}
            leftimageicon={Icons.search}
            placeholder={'Search '}
            value={search}
            onChangeText={val => setsearch(val)}
            marginTop={0}
            // messgaeScreen={true}
            // isrightimage={true}
          />
        </View>
        <Text style={[style.AllText, {marginTop: normalize(40)}]}>
          Popular topic
        </Text>
        <FlatList
          data={faqData}
          keyExtractor={item => item._id}
          renderItem={renderAccordian}
          contentContainerStyle={{marginTop: normalize(20)}}
        />
      </SafeView>
    </View>
  );
}

export default HelpCenter;
const style = StyleSheet.create({
  AccText: {
    color: '#060606',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    textTransform: 'capitalize',
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(15),
  },
  AllText: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
    textTransform: 'capitalize',
    marginTop: Platform.OS === 'ios' ? normalize(15) : normalize(0),
  },
});
