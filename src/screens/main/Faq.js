import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/general/Header';
import SafeView from '../../components/general/SafeView';
import css from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Accordian from '../../components/general/Accordian';
import Fonts from '../../themes/Fonts';

function Faq(props) {
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

  const toggleAccordian = index => {
    const newAccordianStates = [...accordianStates];
    newAccordianStates[index] = !newAccordianStates[index];
    setAccordianStates(newAccordianStates);
  };

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
    <SafeAreaView style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        headerBlackText={'FAQs'}
        enableBackButton
        textTransform={'none'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView marginHorizontal={normalize(10)}>
        <FlatList
          data={faqData}
          keyExtractor={item => item._id}
          renderItem={renderAccordian}
          contentContainerStyle={{marginTop: normalize(20)}}
        />
      </SafeView>
    </SafeAreaView>
  );
}

export default Faq;
const style = StyleSheet.create({
  AccText: {
    color: '#060606',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    textTransform: 'capitalize',
  },
});
