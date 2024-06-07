import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import css from '../../../themes/Css';
import Colors from '../../../themes/Colors';
import Header from '../../../components/general/Header';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import SafeView from '../../../components/general/SafeView';

function ConsumerRideDetails() {
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        enableNotificationButton
        enableMenuButton
      />
      <SafeView>
        <View style={css.px10}>
          <Text style={[styles.headingText1, {marginVertical: normalize(10)}]}>
            The Ride Is Starting Soon!
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam
            pretium. Imperdiet faucibus feugiat vitae id at.
          </Text>
          <View style={styles.line} />
          <Text style={[styles.headingText1]}>Assigned car details</Text>
          <View style={[css.mt15, css.aic, css.row]}>
            <Image
              source={Images.cardetails}
              style={{
                height: normalize(90),
                width: normalize(100),
                borderRadius: normalize(10),
              }}
              // resizeMode='contain'
            />
            <View style={[css.w100, css.ml10]}>
              <View style={[styles.rowView, {marginVertical: normalize(5)}]}>
                <Text style={styles.yearText}>SUV</Text>
                <Image
                  source={Icons.next}
                  style={styles.nextImage}
                  resizeMode="contain"
                />
                <Text style={styles.yearText}>2024</Text>
              </View>
              <View style={[css.row, css.aic]}>
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
                  style={[styles.milage2]}
                  resizeMode="contain"
                />
                <Text style={styles.kmText}>Insurance included</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              css.aic,
              css.p10,
              css.w100,
              css.my15,
              css.row,
              styles.dataContainer,
            ]}>
            <View style={css.w30}>
              <Text style={styles.TextHeading}>Car Number</Text>
              <Text style={styles.TextValue}>8D22A1245</Text>
            </View>
            <Text style={styles.division}>|</Text>
            <View style={css.w40}>
              <Text style={styles.TextHeading}>Registration Number</Text>
              <Text style={styles.TextValue}>123456789</Text>
            </View>
          </View>
          <Text style={[styles.headingText1]}>Consumer Details</Text>
          <View style={styles.providerview}>
            <Image source={Images.drawerprofile} style={styles.providerImage} />
            <View style={styles.subview}>
              <Text style={styles.providerName}>Esther Howard</Text>

              <Text style={styles.totaltrip}>Email: info@email.com</Text>
              <Text style={styles.totaltrip}>Pnone: 1707487572</Text>
              <Text style={styles.totaltrip}>Driving license: 5982366</Text>
            </View>
          </View>

          <View style={[styles.pickTimeView]}>
            <Text style={[styles.headingText1]}>Booking Details</Text>
            <View style={[styles.pickTimeSubView, {height: normalize(70)}]}>
              <View style={[styles.imageTextView, css.col]}>
                <Text style={styles.timetext}>Total Price</Text>
                <Text style={styles.totalPrice}>£153</Text>
              </View>
              <View style={styles.statusTextContainer}>
                <Text style={styles.statusText}>Paid</Text>
              </View>
            </View>
            <View style={[styles.imageTextView, {marginTop: normalize(15)}]}>
              <Text style={styles.pickdateTime}>Pick-up Date & Time</Text>
            </View>
            <View style={styles.pickTimeSubView}>
              <View style={styles.imageTextView}>
                <Image source={Icons.Calender} style={styles.timeImage} />
                <Text style={[styles.timetext, css.ml4]}>25th dec,2024</Text>
              </View>
              <Text style={styles.division}>|</Text>
              <View style={styles.imageTextView}>
                <Image source={Icons.clock} style={styles.timeImage} />
                <Text style={[styles.timetext, css.ml4]}>12:00 pm</Text>
              </View>
            </View>
            <View style={[styles.imageTextView, {marginTop: normalize(15)}]}>
              <Text style={[styles.pickdateTime]}>Drop-off Date & Time</Text>
            </View>
            <View style={styles.pickTimeSubView}>
              <View style={styles.imageTextView}>
                <Image source={Icons.Calender} style={styles.timeImage} />
                <Text style={[styles.timetext, css.ml4]}>25th dec,2024</Text>
              </View>
              <Text style={styles.division}>|</Text>
              <View style={styles.imageTextView}>
                <Image source={Icons.clock} style={styles.timeImage} />
                <Text style={[styles.timetext, css.ml4]}>12:00 pm</Text>
              </View>
            </View>
            <View style={[styles.imageTextView, {marginTop: normalize(15)}]}>
              <Text style={[styles.pickdateTime]}>Pick-up Location</Text>
            </View>
            <View style={styles.pickTimeSubView}>
              <View style={styles.imageTextView}>
                <Text style={styles.timetext}>25th dec,2024</Text>
              </View>
            </View>
            <View style={[styles.imageTextView, {marginTop: normalize(15)}]}>
              <Text style={[styles.pickdateTime]}>Drop-off Location</Text>
            </View>
            <View style={styles.pickTimeSubView}>
              <View style={styles.imageTextView}>
                <Text style={styles.timetext}>25th dec,2024</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeView>
    </View>
  );
}

export default ConsumerRideDetails;

const styles = StyleSheet.create({
  dataContainer: {
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
    paddingVertical: normalize(15),
  },
  ratingFeedback: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalize(15),
  },
  reviewDes: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    textAlign: 'center',
    marginTop: normalize(10),
  },
  feedbackdescription: {
    color: '#949494',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
    marginTop: normalize(5),
  },
  feedbackView: {
    width: '100%',
    borderWidth: normalize(1),
    borderColor: '#F2F2F2',
    borderRadius: normalize(10),
    marginTop: normalize(10),
    padding: normalize(10),
  },
  priceOffer: {
    color: 'white',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  totalPrice: {
    color: Colors.pink,
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
    // marginTop: normalize(15),
    paddingVertical: normalize(15),
  },
  pickdateTime: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(11),
  },
  timeImage: {height: normalize(12), width: normalize(12)},
  timetext: {
    color: '#B1B1B1',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginLeft: normalize(5),
  },
  imageTextView: {flexDirection: 'row', alignItems: 'center'},
  pickTimeSubView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: normalize(5),
    flexDirection: 'row',
    height: normalize(50),
    paddingHorizontal: normalize(15),
    justifyContent: 'space-between',
    marginTop: normalize(15),
    alignItems: 'center',
  },
  pickTimeView: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(10),
    marginVertical: normalize(15),
  },

  subview: {marginLeft: normalize(10), paddingVertical: normalize(8)},
  providerview: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    flexDirection: 'row',
    padding: normalize(10),
    marginVertical: normalize(12),
    alignItems: 'center',
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
  division: {color: '#E5E5E5', fontSize: normalize(20)},
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
  milage2: {
    height: normalize(11),
    width: normalize(11),
    tintColor: '#949494',
  },
  ratingText: {
    marginLeft: normalize(5),
    color: '#FFC700',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  nextImage: {
    height: normalize(8),
    width: normalize(8),
    marginHorizontal: normalize(10),
  },
  yearText: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
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
  borderbottom: {borderBottomWidth: normalize(1), borderBottomColor: '#ECECEC'},
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
  statusTextContainer: {
    paddingHorizontal: normalize(10),
    backgroundColor: Colors.lightgreen,
    borderRadius: normalize(10),
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: Colors.green,
    fontSize: normalize(12),
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.lightPink,
    marginVertical: normalize(10),
  },
});
