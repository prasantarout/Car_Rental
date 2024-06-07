import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../../../themes/Theme';
import Header from '../../../components/general/Header';
import HomeOffer from '../../../components/general/HomeOffer';
import normalize from '../../../utils/helpers/dimen';
import Button from '../../../components/micro/Button';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';

const VehicleList = [
  {
    icon: Images.homeoffer1,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
  {
    icon: Images.homeoffer2,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
  {
    icon: Images.homeoffer3,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
  {
    icon: Images.homeoffer4,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
  {
    icon: Images.homeoffer3,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
  {
    icon: Images.homeoffer4,
    isavaible: true,
    name: 'Lexus nX - 300',
    insurence: true,
    milage: '250 Km/Day',
    price: '72.00',
  },
];

const MyVehicle = props => {
  const navigation = useNavigation();

  return (
    <>
      <View style={[css.f1, css.w100, css.bgWhite]}>
        <Header
          enableLightTheme
          headerBlackText={'My vehicle'}
          enableNotificationButton
          enableMenuButton
        />
        <View style={styles.registerVehicleContainer}>
          <Text style={styles.registerVehicleText}>Register a new vehicle</Text>
          <Button
            title={'Add New'}
            onPress={() => {
              navigation?.navigate('AddNewCar', {
                headerShown: true,
                screenName: 'Add New Car',
              });
            }}
          />
        </View>
        <HomeOffer
          topsection={true}
          // toplefttxt={'Similar Vehicle'}
          data={VehicleList}
          margintopview={0}
          marginbottomview={normalize(5)}
          onPress={data => {
            navigation.navigate('MyVehicleDetails');
          }}
          width={'92%'}
          flatlistbottom={normalize(80)}
          buttonLabel={'View'}
        />
      </View>
    </>
  );
};

export default MyVehicle;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(10),
  },
  filterBtn: {
    width: normalize(50),
    height: normalize(50),
    borderWidth: 1.5,
    borderRadius: normalize(25),
    borderColor: Colors.bordercolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFilter: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
  registerVehicleText: {
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.placeholder,
  },
  registerVehicleContainer: {
    width: '92%',
    flexDirection: 'row',
    padding: normalize(8),
    borderRadius: normalize(8),
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.placeholder,
    marginTop: normalize(8),
  },
});
