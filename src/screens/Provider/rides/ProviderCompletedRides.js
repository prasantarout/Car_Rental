import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/general/Header';
import css from '../../../themes/Css';
import Images from '../../../themes/Images';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';
import Icons from '../../../themes/Icons';
import {useNavigation} from '@react-navigation/native';

function ProviderCompletedRides() {
  const navigation = useNavigation();
  const RideList = [
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
    },
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
    },
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
    },
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
    },
  ];

  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Completed Rides'}
        enableNotificationButton
        enableMenuButton
      />
      <FlatList
        data={RideList}
        renderItem={({item}) => (
          <RideCard item={item} navigation={navigation} />
        )}
        contentContainerStyle={{flex: 1, paddingHorizontal: normalize(10)}}
      />
    </View>
  );
}

const RideCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={style.mainContainer}
      onPress={() => navigation?.navigate('ProviderCompletedRidesDetails')}>
      <View style={[css.row, css.w100]}>
        <View style={style.imageView}>
          <Image
            source={item?.productImage}
            style={{height: normalize(60), width: normalize(60)}}
            resizeMode="contain"
          />
        </View>
        <View style={[css.ml10, css.jcc]}>
          <Text style={style.productname}>{item?.name}</Text>
          <Text style={style.price}>
            {item?.price}
            <Text style={{fontSize: normalize(10)}}>/Day</Text>
          </Text>

          <View style={[css.row, css.jcsb, css.aic, css.mt10]}>
            <Image
              source={Icons.Calender}
              style={{height: normalize(12), width: normalize(12)}}
              resizeMode="contain"
            />
            <Text
              style={{
                color: '#949494',
                fontFamily: Fonts.Roboto_Regular,
                fontSize: normalize(11),
              }}>
              {item?.date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProviderCompletedRides;

const style = StyleSheet.create({
  price: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(14),
    marginTop: normalize(10),
  },
  productname: {
    color: '#0B0B0B',
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
  },
  imageView: {
    alignItems: 'center',
    borderWidth: normalize(1),
    borderColor: '#F2F2F2',
    borderRadius: normalize(10),
    padding: normalize(10),
  },
  mainContainer: {
    // flexWrap:'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%',
    flexDirection: 'row',
    padding: normalize(10),
    justifyContent: 'space-between',
    marginTop: normalize(15),
  },
});
