import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import CustomButton from '../../../components/micro/CustomButton';
import Colors from '../../../themes/Colors';
import Input from '../../../components/form/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '../../../components/general/BottomSheet';

const ActiveRides = props => {
  const navigation = useNavigation();
  const [ShareTripModal, setShareTripModal] = useState(false);
  return (
    <KeyboardAwareScrollView
      style={{height: '100%'}}
      showsVerticalScrollIndicator={false}>
      <Text style={[styles.headingText1, {marginVertical: normalize(20)}]}>
        Your ride is starting soon!
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium.
        Imperdiet faucibus feugiat vitae id at nullam vitae etiam venenatis.
        Tortor rhoncus elementum.
      </Text>
      <View style={[styles.borderbottom, , {marginVertical: normalize(20)}]} />
      <Text style={[styles.headingText1]}>Assigned car details</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: normalize(15),
          alignItems: 'center',
        }}>
        <Image
          source={Images.cardetails}
          style={{
            height: normalize(90),
            width: normalize(100),
            borderRadius: normalize(10),
          }}
          // resizeMode='contain'
        />
        <View style={{marginLeft: normalize(10), width: '100%'}}>
          <View style={[styles.rowView, {marginVertical: normalize(5)}]}>
            <Text style={styles.yearText}>SUV</Text>
            <Image
              source={Icons.next}
              style={styles.nextImage}
              resizeMode="contain"
            />
            <Text style={styles.yearText}>2024</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={[styles.headingText1, {width: normalize(130)}]}
              numberOfLines={1}>
              Rent Audi A6 (Blue)
            </Text>
            <View style={styles.ratingView}>
              <Image
                source={Icons.Fillstar}
                style={{height: normalize(15), width: normalize(15)}}
                resizeMode="contain"
              />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>

          <View style={[styles.rowView, {marginVertical: normalize(5)}]}>
            <Image
              source={Icons.milage}
              style={styles.milage}
              resizeMode="contain"
            />
            <Text style={styles.kmText}>250 km/day</Text>
          </View>
          <View style={styles.rowView}>
            <Image
              source={Icons.privacy}
              style={[styles.milage, {tintColor: '#949494'}]}
              resizeMode="contain"
            />
            <Text style={styles.kmText}>Insurance included</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          // css.rowBetween,

          css.aic,
          css.p10,
          css.w100,
          // css.asc,
          css.my15,
          css.row,

          {
            backgroundColor: '#FFFFFF',
            borderRadius: normalize(10),
            elevation: 3,
            shadowColor: '#9E4DB6',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            shadowRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(15),
          },
        ]}>
        <View style={{width: '30%'}}>
          <Text style={styles.TextHeading}>Car Number</Text>
          <Text style={styles.TextValue}>8D22A1245</Text>
        </View>
        <Text style={styles.division}>|</Text>
        <View style={{width: '40%'}}>
          <Text style={styles.TextHeading}>Registration Number</Text>
          <Text style={styles.TextValue}>123456789</Text>
        </View>
      </View>
      <Text style={[styles.headingText1]}>Service provider details</Text>
      <View style={styles.providerview}>
        <Image source={Images.drawerprofile} style={styles.providerImage} />
        <View style={styles.subview}>
          <Text style={styles.providerName}>Esther Howard</Text>

          <Text style={styles.totaltrip}>
            2,719 trips | <Text>Joined Oct 2015</Text>
          </Text>
          <Text style={styles.duration}>Typically responds in 4 minutes</Text>
        </View>
      </View>
      <View style={[styles.pickTimeView]}>
        <View style={styles.imageTextView}>
          <Text style={styles.pickdateTime}>Pick-up Date & Time</Text>
          <Image source={Icons.info} style={styles.info} />
        </View>
        <View style={styles.pickTimeSubView}>
          <View style={styles.imageTextView}>
            <Image source={Icons.Calender} style={styles.timeImage} />
            <Text style={styles.timetext}>25th dec,2024</Text>
          </View>
          <Text style={styles.division}>|</Text>
          <View style={styles.imageTextView}>
            <Image source={Icons.clock} style={styles.timeImage} />
            <Text style={styles.timetext}>12:00 pm</Text>
          </View>
        </View>
        <View style={[styles.imageTextView, {marginTop: normalize(15)}]}>
          <Text style={[styles.pickdateTime]}>Drop-off Date & Time</Text>
          <Image source={Icons.info} style={styles.info} />
        </View>
        <View style={styles.pickTimeSubView}>
          <View style={styles.imageTextView}>
            <Image source={Icons.Calender} style={styles.timeImage} />
            <Text style={styles.timetext}>25th dec,2024</Text>
          </View>
          <Text style={styles.division}>|</Text>
          <View style={styles.imageTextView}>
            <Image source={Icons.clock} style={styles.timeImage} />
            <Text style={styles.timetext}>12:00 pm</Text>
          </View>
        </View>
      </View>
      <View style={[styles.pickTimeView, {marginTop: normalize(15)}]}>
        <Text style={styles.pickdateTime}>Pick-up location</Text>
        <Input
          placeholder="Enter Pick-up location"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
          }}
          style={{backgroundColor: 'white'}}
          containerStyle={[css.mb10]}
        />
        <Text style={styles.pickdateTime}>Drop-off Location</Text>
        <Input
          placeholder="Enter Drop-off location"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
          }}
          style={{backgroundColor: 'white'}}
        />
        <CustomButton
          width={'40%'}
          height={normalize(45)}
          // alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Edit'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            // navigation.navigate('EditProfile');
          }}
        />
        <View style={[styles.thumbnailWrapper, css.centerPanel]}>
          <Image source={Images.map} style={[styles.thumbnail, {}]} />
        </View>
      </View>
      <View style={[styles.payView, {}]}>
        <Text style={styles.priceOffer}>Price for 5 days</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.totalPrice}>£153</Text>
          <CustomButton
            width={'40%'}
            height={normalize(45)}
            // alignSelf={'center'}

            backgroundColor={'#9E4DB6'}
            title={'Pay'}
            textColor={Colors.white}
            borderRadius={normalize(5)}
            textAlign={'center'}
            fontSize={normalize(13)}
            justifyContent={'center'}
            fontFamily={Fonts.Roboto_Medium}
            titlesingle
            onPress={() => {
              navigation.navigate('Payment');
            }}
          />
        </View>
        <Text style={styles.PriceDetails}>View price details</Text>
      </View>
      <View style={styles.cancelshareView}>
        <CustomButton
          width={'80%'}
          height={normalize(45)}
          // alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Cancel'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            navigation.navigate('Cancelride');
          }}
        />
        <TouchableOpacity
          style={styles.shareView}
          onPress={() => {
            setShareTripModal(!ShareTripModal);
          }}>
          <Image
            source={Icons.Share}
            style={{height: normalize(15), width: normalize(15)}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.reportView}>
        <Text style={styles.commonTitle}>Report</Text>
        <Input
          title="Booking ID"
          placeholder="Enter booking ID"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
            marginTop: normalize(30),
          }}
          style={{backgroundColor: 'white'}}
          containerStyle={[css.mb10]}
        />

        <Input
          title="Description"
          placeholder="Input"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
            marginTop: normalize(10),
          }}
          style={{backgroundColor: 'white'}}
          containerStyle={[css.mb10]}
          multiline={true}
        />
        <CustomButton
          width={'40%'}
          height={normalize(45)}
          // alignSelf={'center'}
          marginTop={normalize(10)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Submit'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            // navigation.navigate('EditProfile');
          }}
        />
        <BottomSheet
          isVisible={ShareTripModal}
          titleStyle={{
            color: '#0B0B0B',
            fontFamily: Fonts.Roboto_Bold,
            textAlign: 'center',
            textTransform: 'capitalize',
            marginTop: normalize(35),
          }}
          closebtn={{height: normalize(12), width: normalize(12)}}
          onClose={() => {
            setShareTripModal(!ShareTripModal);
          }}>
          <Image
            source={Icons.ShareTrip}
            style={{
              height: normalize(70),
              width: normalize(70),
              alignSelf: 'center',
              marginTop: normalize(25),
            }}
          />
          <Text style={styles.ShareTripText}>Share the trip via</Text>
          <Text style={styles.reviewDes}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(10),
            }}>
            <CustomButton
              width={'48%'}
              height={normalize(45)}
              // alignSelf={'center'}
              marginTop={normalize(20)}
              marginBottom={normalize(50)}
              // backgroundColor={'#9E4DB6'}
              title={'Whatsapp'}
              textColor={'#9E4DB6'}
              borderWidth={normalize(1)}
              borderColor={'#9E4DB6'}
              borderRadius={normalize(5)}
              textAlign={'center'}
              fontSize={normalize(13)}
              justifyContent={'center'}
              fontFamily={Fonts.Roboto_Medium}
              TextmarginLeft={normalize(5)}
              Rightimage={true}
              Image={Icons.whatsapp}
              titlesingle
              onPress={() => {
                // setShareTripModal(!ShareTripModal);
              }}
            />
            <CustomButton
              width={'48%'}
              height={normalize(45)}
              // alignSelf={'center'}
              marginTop={normalize(20)}
              marginBottom={normalize(50)}
              // backgroundColor={'#9E4DB6'}
              title={'Telegram'}
              textColor={'#9E4DB6'}
              borderWidth={normalize(1)}
              borderColor={'#9E4DB6'}
              borderRadius={normalize(5)}
              textAlign={'center'}
              fontSize={normalize(13)}
              justifyContent={'center'}
              TextmarginLeft={normalize(5)}
              Rightimage={true}
              Image={Icons.telegram}
              fontFamily={Fonts.Roboto_Medium}
              titlesingle
              onPress={() => {
                // setShareTripModal(!ShareTripModal);
              }}
            />
          </View>
        </BottomSheet>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ActiveRides;

const styles = StyleSheet.create({
  reviewDes: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    textAlign: 'center',
    marginTop: normalize(5),
  },
  ShareTripText: {
    color: '#0B0B0B',
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    textAlign: 'center',
    marginTop: normalize(15),
  },
  TextValue: {
    color: '#2F3240',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    marginTop: normalize(5),
  },
  TextHeading: {
    color: '#919191',
    fontSize: normalize(11),
    fontFamily: Fonts.Roboto_Regular,
  },
  cancelshareView: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
  shareView: {
    width: '15%',
    borderWidth: normalize(1),
    alignItems: 'center',
    borderColor: '#9E4DB6',
    justifyContent: 'center',
    height: normalize(45),
    borderRadius: normalize(5),
    marginLeft: normalize(10),
    marginTop: normalize(10),
  },
  reportView: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(20),
    marginBottom: normalize(250),
  },
  commonTitle: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
  },
  priceOffer: {
    color: 'white',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  totalPrice: {
    color: 'white',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(20),
  },
  PriceDetails: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(12),
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
  },
  payView: {
    width: '100%',
    backgroundColor: '#310040',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(10),
    marginTop: normalize(15),
    paddingVertical: normalize(15),
  },
  thumbnailWrapper: {
    height: normalize(200),
    // width: Dimensions.get('screen').width - normalize(20),
    borderRadius: normalize(10),
  },
  thumbnail: {
    height: '100%',
    width: '95%',
    borderRadius: normalize(20),
    // resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageTextView: {flexDirection: 'row', alignItems: 'center'},
  division: {color: '#E5E5E5', fontSize: normalize(20)},
  timeImage: {height: normalize(12), width: normalize(12)},
  timetext: {
    color: '#B1B1B1',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginLeft: normalize(5),
  },
  pickTimeSubView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: normalize(5),
    flexDirection: 'row',
    padding: normalize(15),
    justifyContent: 'space-between',
    marginTop: normalize(15),
  },
  pickTimeView: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(10),
  },
  info: {height: normalize(10), width: normalize(10), marginLeft: normalize(8)},
  pickdateTime: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(11),
  },

  subview: {marginLeft: normalize(10), paddingVertical: normalize(8)},
  providerview: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    flexDirection: 'row',
    padding: normalize(10),
    marginVertical: normalize(12),
  },
  providerImage: {height: normalize(60), width: normalize(60)},
  duration: {
    color: '#6FB64D',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
    marginTop: normalize(5),
  },
  totaltrip: {
    color: '#919191',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
    marginTop: normalize(5),
  },
  providerName: {
    color: '#310040',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(14),
  },
  ratingText: {
    marginLeft: normalize(5),
    color: '#FFC700',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  ratingView: {
    backgroundColor: 'rgb(254,249,230)',
    borderRadius: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(5),
    marginLeft: normalize(15),
  },
  rowView: {flexDirection: 'row', alignItems: 'center'},
  kmText: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
    textTransform: 'capitalize',
    marginLeft: normalize(10),
  },
  milage: {
    height: normalize(11),
    width: normalize(11),
  },
  yearText: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
  },
  nextImage: {
    height: normalize(8),
    width: normalize(8),
    marginHorizontal: normalize(10),
  },
  headingText1: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(15),
    textTransform: 'capitalize',
  },
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  borderbottom: {borderBottomWidth: normalize(1), borderBottomColor: '#ECECEC'},
});
