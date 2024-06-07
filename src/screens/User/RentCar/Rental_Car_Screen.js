import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts, Icons, Images} from '../../../themes/Theme';
import Header from '../../../components/general/Header';
import TextInputItem from '../../../components/form/TextinputItem';
import HomeOffer from '../../../components/general/HomeOffer';
import normalize from '../../../utils/helpers/dimen';
import {useSelector} from 'react-redux';
import Button from '../../../components/micro/Button';
import {useNavigation} from '@react-navigation/native';

const Rental_Car_Screen = props => {
  const [search, setsearch] = useState('');
  const RentItem = [
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

  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}>
      <Header
        enableLightTheme
        headerBlackText={'Rent A Car'}
        enableNotificationButton
        enableMenuButton
      />
      {authType === 'user' ? (
        <View style={styles.container}>
          <View style={{width: '80%'}}>
            <TextInputItem
              borderRadius={normalize(30)}
              isleftimage={true}
              leftimageicon={Icons.search}
              placeholder={'Search by vehicle model/brand'}
              value={search}
              onChangeText={val => setsearch(val)}
              marginTop={0}
              // isrightimage={true}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Image source={Icons.filter} style={styles.iconFilter} />
          </TouchableOpacity>
        </View>
      ) : (
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
      )}
      <HomeOffer
        topsection={true}
        // toplefttxt={'Similar Vehicle'}
        data={RentItem}
        margintopview={authType === 'user' ? normalize(5) : 0}
        marginbottomview={normalize(5)}
        onPress={data => {
          authType === 'user'
            ? navigation.navigate('CarDetails')
            : navigation.navigate('MyVehicleDetails');
        }}
        width={'92%'}
        flatlistbottom={normalize(80)}
        buttonLabel={authType === 'user' ? 'Reserve' : 'View'}
      />
    </View>
  );
};

export default Rental_Car_Screen;

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
