import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Images from '../../themes/Images';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from '../../themes/Icons';
import css from '../../themes/Css';
import Header from '../../components/general/Header';
import HomeOffer from '../../components/general/HomeOffer';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';

function MyFavourite(props) {
  const navigation = useNavigation();
  const [offerdata, setofferdata] = useState([
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
  ]);
  function renderItem({item, index}) {
    return (
      <View style={style.mainContainer}>
        <View style={style.subView}>
          <View style={style.rowView}>
            <View style={style.availableView}>
              <Text style={style.available}>Available</Text>
            </View>
            <TouchableOpacity>
              <Image source={Icons.Fav} style={style.favIcon} />
            </TouchableOpacity>
          </View>
          <Image source={item?.icon} style={style.mainImage} />
          <Text style={style.productname}>{item?.name}</Text>
          <View style={style.insuranceView}>
            <Image source={Icons.insurance} style={style.insuranceImage} />
            <Text style={style.insuranceText}>{'Insurance Included'}</Text>
          </View>
          <View style={style.kmView}>
            <Image source={Icons.milage} style={style.kmImage} />
            <Text style={style.kmText}>{item?.milage}</Text>
          </View>
          <View style={style.priceView}>
            <Text style={style.price}>
              {'£' + item?.price + '/ '}
              <Text style={style.day}>Day</Text>
            </Text>
            <TouchableOpacity
              onPress={() => item?.onPress(item)}
              style={style.reserveView}>
              <Text style={style.reserve}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'My favourite'}
        enableNotificationButton
        enableMenuButton
      />

      <HomeOffer
        toplefttxt={'Similar Vehicle'}
        data={offerdata}
        margintopview={normalize(5)}
        marginbottomview={normalize(5)}
        onPress={data => {
          navigation.navigate('CarDetails');
        }}
        width={'100%'}
        flatlistbottom={normalize(0)}
      />

      {/* <FlatList
        data={offerdata}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: normalize(35),
          width: '92%',
          alignSelf: 'center',
        }}
      /> */}
    </View>
  );
}

export default MyFavourite;
const style = StyleSheet.create({
  insuranceView: {
    flexDirection: 'row',
    marginTop: normalize(8),
    alignItems: 'center',
  },
  insuranceImage: {
    width: normalize(12),
    height: normalize(12),
    resizeMode: 'contain',
  },
  insuranceText: {
    color: Colors.txtcolor,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
    marginLeft: normalize(3),
  },
  kmView: {
    flexDirection: 'row',
    marginTop: normalize(8),
    alignItems: 'center',
  },
  kmImage: {
    width: normalize(12),
    height: normalize(12),
    resizeMode: 'contain',
  },
  kmText: {
    color: Colors.txtcolor,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
    marginLeft: normalize(3),
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(15),
  },
  price: {
    color: Colors.txtblack,
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(13),
  },
  day: {
    fontSize: normalize(9),
    color: '#1A202C',
    fontFamily: Fonts.Roboto_Bold,
  },
  reserveView: {
    paddingHorizontal: normalize(6),
    paddingVertical: normalize(3),
    backgroundColor: Colors.pink,
    borderRadius: normalize(6),
  },
  reserve: {
    color: Colors.white,
    fontSize: normalize(10),
    fontFamily: Fonts.Roboto_Medium,
  },
  productname: {
    color: Colors.txtblack,
    fontSize: normalize(10.5),
    fontFamily: Fonts.Roboto_Bold,
    marginTop: normalize(10),
  },
  mainImage: {
    width: normalize(90),
    height: normalize(65),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: normalize(2),
  },
  favIcon: {
    width: normalize(12),
    height: normalize(12),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: normalize(2),
  },
  available: {
    color: Colors.green,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(9),
  },
  availableView: {
    backgroundColor: Colors.lightgreen,
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(3),
    borderRadius: normalize(50),
    marginRight: normalize(6),
  },
  mainContainer: {
    width: '48%',
    backgroundColor: '#F6F6F6',
    height: normalize(214),
    borderRadius: normalize(10),
    paddingHorizontal: normalize(6),
    paddingTop: normalize(6),
    marginBottom: normalize(15),
  },
  subView: {
    width: '100%',
    height: normalize(95),
    backgroundColor: Colors.white,
    borderRadius: normalize(5),
  },
  rowView: {
    flexDirection: 'row',
    paddingTop: normalize(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10),
  },
});
