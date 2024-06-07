import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/general/Header';
import Colors from '../../themes/Colors';
import css from '../../themes/Css';
import Images from '../../themes/Images';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import Icons from '../../themes/Icons';

function PaymentHistory(props) {
  const PaymentData = [
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
      providerName: 'Esther Howard',
    },
    {
      productImage: Images.homeoffer3,
      name: 'Rent Audi A6 (Blue)',
      price: '£805',
      date: '15 Feb 2024 to 19 Feb 2024',
      providerName: 'Esther Howard',
    },
  ];
  const paymentrender = ({item}) => {
    return (
      <View style={style.mainContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={style.imageView}>
            <Image
              source={item?.productImage}
              style={{height: normalize(60), width: normalize(60)}}
              resizeMode="contain"
            />
          </View>
          <View style={{}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.productname}>{item?.name}</Text>
              <Text style={style.price}>{item?.price}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: normalize(10),
                // width:'70%',
                // backgroundColor:'red',
                // width:'80%'
              }}>
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

              <View
                style={{
                  backgroundColor: Colors.lightgreen,
                  paddingHorizontal: normalize(8),
                  paddingVertical: normalize(3),
                  borderRadius: normalize(50),
                  // marginRight: normalize(6),
                }}>
                <Text
                  style={{
                    color: '#299D00',
                    fontFamily: Fonts.Roboto_Medium,
                    fontSize: normalize(12),
                  }}>
                  paid
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(10),
              }}>
              <Image
                source={Icons.profileicon}
                style={{height: normalize(12), width: normalize(12)}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: '#949494',
                  fontSize: normalize(12),
                  fontFamily: Fonts.Roboto_Regular,
                }}>
                Provider:{' '}
                <Text style={{fontFamily: Fonts.Roboto_Medium}}>
                  {item?.providerName}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Payment History'}
        enableNotificationButton
        enableMenuButton
      />
      <FlatList
        data={PaymentData}
        renderItem={paymentrender}
        contentContainerStyle={{flex: 1, paddingHorizontal: normalize(10)}}
      />
    </View>
  );
}

export default PaymentHistory;
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
    marginTop: normalize(10),
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
