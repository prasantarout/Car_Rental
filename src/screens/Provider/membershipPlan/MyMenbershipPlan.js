import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {Colors, Fonts, Icons, Images} from '../../../themes/Theme';
import Header from '../../../components/general/Header';
import normalize from '../../../utils/helpers/dimen';
import Button from '../../../components/micro/Button';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';
import SafeView from '../../../components/general/SafeView';

const width = Dimensions.get('screen').width;
const containerWidth = width - normalize(120);
const features = [
  'Lorem ipsum dolor sit amet consectetur. Vivamus magna amet tempus sem ornare morbi.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur.',
];
const MyMenbershipPlan = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={[css.f1, css.bgWhite]}>
        <Header
          enableLightTheme
          enableBackButton
          headerBlackText={'Membership plan'}
          enableNotificationButton
          enableMenuButton
        />

        <SafeView marginHorizontal={normalize(10)}>
          <View style={styles.cardContainer}>
            <Image source={Images.bgMembershipCard} style={styles.cardImage} />
            <View style={styles.dataContainer}>
              <Image
                style={styles.cardIcon}
                source={Icons.membershipCardIcon}
              />
              <Text style={styles.activePlanText}>Premium plans</Text>
              <View style={styles.line} />
              <Text style={styles.daysCountText}>10 days left</Text>
              <Text style={styles.descText}>
                Lorem ipsum dolor sit amet consectetur. Amet proin vel gravida
                molestie
              </Text>
              <Button
                title={'Renew £149'}
                onPress={() => {}}
                style={{width: containerWidth}}
              />
            </View>
          </View>
          <View style={[css.my50]}>
            <Text style={styles.featureText}>Features:</Text>
            {features.map(val => (
              <FeatureRow text={val} />
            ))}
            <Button
              title={'View more plans'}
              onPress={() => {
                navigation.navigate('MembershipPlan');
              }}
              style={[css.mt20]}
            />
          </View>
        </SafeView>
      </View>
    </>
  );
};

const FeatureRow = ({text}) => {
  return (
    <View style={styles.featureRowContainer}>
      <Image source={Icons.tickMarkIcon} style={styles.featureRowIcon} />
      <Text style={styles.featureRowText}>{text}</Text>
    </View>
  );
};

export default MyMenbershipPlan;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: Colors.pink,
    shadowOpacity: 1,
    shadowOffset: {height: 10},
    shadowRadius: 10,
    height: width,
    width: '100%',
  },
  cardImage: {
    height: width,
    width: width,
    resizeMode: 'contain',
    position: 'absolute',
  },
  cardIcon: {
    height: normalize(80),
    width: normalize(80),
    resizeMode: 'contain',
    marginBottom: normalize(10),
  },
  activePlanText: {
    color: Colors.white,
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Medium,
    textTransform: 'capitalize',
  },
  line: {
    width: normalize(40),
    height: 1,
    backgroundColor: Colors.pink,
    marginVertical: normalize(20),
  },
  daysCountText: {
    color: Colors.white,
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    textTransform: 'capitalize',
  },
  descText: {
    color: Colors.white,
    fontSize: normalize(11),
    fontFamily: Fonts.Roboto_Regular,
    textAlign: 'center',
    marginVertical: normalize(20),
  },
  featuresContainer: {
    marginTop: normalize(50),
  },
  featureText: {
    fontSize: normalize(14),
    marginBottom: normalize(4),
    fontFamily: Fonts.Roboto_Bold,
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
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: containerWidth,
  },
});
