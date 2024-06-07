import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import css from '../../themes/Css';
import Header from '../../components/general/Header';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';

function TermsCondition(props) {
  return (
    <SafeAreaView style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Terms And Conditions'}
        enableNotificationButton
        enableMenuButton
      />
      <ScrollView marginHorizontal={normalize(10)}>
        <Text style={style.AllText}>
          Lorem ipsum dolor sit amet consectetur?
        </Text>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet consectetur. Euismod sed tincidunt blandit
          erat adipiscing nibh turpis velit integer. Tempor volutpat nibh orci
          ullamcorper hendrerit. Urna dictumst auctor sapien tellus. Habitant ut
          tempus in ornare volutpat massa amet sed commodo. Sed tellus sed lacus
          in. Malesuada parturient amet amet non vel. Elit nec ultrices eros in
          ultricies. Justo ipsum phasellus aliquam in tortor nec nunc
          consectetur
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TermsCondition;

const style = StyleSheet.create({
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginTop: normalize(15),
  },
  AllText: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    textTransform: 'capitalize',
    marginTop: Platform.OS === 'ios' ? normalize(15) : normalize(0),
  },
});
