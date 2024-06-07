import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';
import Button from '../../../components/micro/Button';
import Icons from '../../../themes/Icons';
import Colors from '../../../themes/Colors';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';

const MembershipPlanCard = ({type, price, periodType, features = []}) => {
  const navigation = useNavigation();
  return (
    <View style={[css.br10, css.p15, style.mainContainer]}>
      <View style={style.typeContainer}>
        <Text style={style.typeText}>{type}</Text>
      </View>
      <View style={style.priceContainer}>
        <Text style={style.priceText}>
          £{periodType === 'Monthly' ? price : price * 12}
        </Text>
        <Text style={style.periodTypeText}>
          {periodType === 'Monthly' ? '/month' : '/year'}
        </Text>
      </View>
      <View style={style.line} />
      <Text style={style.featureText}>Features:</Text>
      {features.map(val => (
        <FeatureRow text={val} />
      ))}
      <View style={[css.mt20, css.mb20]}>
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate('MembershipPlanPayment');
          }}
        />
      </View>
    </View>
  );
};

const FeatureRow = ({text}) => {
  return (
    <View style={style.featureRowContainer}>
      <Image source={Icons.tickMarkIcon} style={style.featureRowIcon} />
      <Text style={style.featureRowText}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    borderWidth: normalize(1),
    borderColor: Colors.cardBg,
    width: '100%',
    marginBottom: normalize(10),
    shadowColor: 'red',
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {height: 4, width: 4},
  },
  typeContainer: {
    backgroundColor: Colors.lightPink,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(75),
  },
  typeText: {
    color: Colors.pink,
    fontFamily: Fonts.Roboto_Bold,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: normalize(4),
  },
  priceText: {
    color: Colors.pink,
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(20),
  },
  periodTypeText: {
    color: Colors.pink,
    marginBottom: normalize(4),
    fontFamily: Fonts.Roboto_Regular,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.lightPink,
    marginVertical: normalize(10),
  },
  featureText: {
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
    marginBottom: normalize(4),
  },
  featureRowContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: normalize(4),
  },
  featureRowIcon: {
    height: normalize(18),
    width: normalize(18),
    resizeMode: 'contain',
  },
  featureRowText: {
    marginLeft: normalize(10),
    fontFamily: Fonts.Roboto_Regular,
    textTransform: 'capitalize',
    fontSize: normalize(12),
    color: Colors.txtcolor,
    lineHeight: normalize(16),
  },
});

export default MembershipPlanCard;
