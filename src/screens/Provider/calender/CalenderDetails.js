import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/general/Header';
import css from '../../../themes/Css';
import Colors from '../../../themes/Colors';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';
import CustomCalender from '../../../components/micro/CustomCalender';
import SafeView from '../../../components/general/SafeView';
import Icons from '../../../themes/Icons';
import {useNavigation} from '@react-navigation/native';

const userList = [
  {
    id: 1,
    profileImage: Images.user,
    name: 'John Rosensky',
    date: '25th dec, 2023 to 5th jan, 2024',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    profileImage: Images.user,
    date: '25th dec, 2023 to 5th jan, 2024',
  },
  {
    id: 3,
    name: 'Craig Saris',
    profileImage: Images.user,
    date: '25th dec, 2023 to 5th jan, 2024',
  },
  {
    id: 4,
    name: 'Cameron Williamson',
    profileImage: Images.user1,
    date: '25th dec, 2023 to 5th jan, 2024',
  },
  {
    id: 5,
    name: 'Brooklyn Simmons',
    date: '25th dec, 2023 to 5th jan, 2024',

    profileImage: Images.user1,
  },
  {
    id: 6,
    name: 'Leslie Alexander',
    date: '25th dec, 2023 to 5th jan, 2024',

    profileImage: Images.user1,
  },
  {
    id: 7,
    name: 'Jenny Wilson',
    date: '25th dec, 2023 to 5th jan, 2024',

    profileImage: Images.user1,
  },
  {
    id: 8,
    name: 'Leslie Alexander',
    date: '25th dec, 2023 to 5th jan, 2024',

    profileImage: Images.user1,
  },
];

const CalenderDetails = props => {
  const navigation = useNavigation();
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Calender'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView>
        <View style={[css.aic, css.jcc]}>
          <View
            style={[
              css.aic,
              css.p12,
              css.w95,
              css.my10,
              css.row,
              styles.carDetailsCard,
            ]}>
            <View style={styles.ImageView}>
              <Image
                source={Images.carBlack}
                style={styles.carImage}
                resizeMode="contain"
              />
            </View>
            <View style={[css.w100, css.ml16]}>
              <Text
                style={[styles.headingText1, {width: normalize(130)}]}
                numberOfLines={1}>
                Rent Audi A6 (Blue)
              </Text>
              <Text style={styles.price}>
                £805
                <Text style={{fontSize: normalize(10)}}>/Day</Text>
              </Text>
              <View style={[styles.rowView]}>
                <Text style={styles.kmText}>Booking rate 65%</Text>
              </View>
            </View>
          </View>
        </View>
        <CustomCalender
          initialDate={new Date()}
          // calendarBackground={Colors.steperGray}
        />
        <FlatList
          data={userList}
          renderItem={({item}) =>
            RenderItem({item: item, navigation: navigation})
          }
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: normalize(20)}}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: normalize(10),
          }}
        />
      </SafeView>
    </View>
  );
};

const RenderItem = ({item, navigation}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      navigation.navigate('ConsumerRideDetails');
    }}>
    <View style={styles.leftContainer}>
      <Image source={item?.profileImage} style={styles.profileImage} />
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={[css.row, css.aic, css.mt4]}>
        <Image source={Icons.Calender} style={styles.iconStyle} />
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CalenderDetails;

const styles = StyleSheet.create({
  price: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(14),
    marginTop: normalize(10),
  },
  ratingText: {
    color: Colors.pink,
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
  },
  ratingView: {
    alignItems: 'flex-start',
    marginVertical: normalize(10),
  },
  headingText1: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(15),
    textTransform: 'capitalize',
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
  rowView: {flexDirection: 'row', alignItems: 'center'},
  carImage: {height: normalize(80), width: normalize(80)},
  ImageView: {
    borderWidth: normalize(1),
    borderColor: '#F2F2F2',
    borderRadius: normalize(10),
    width: normalize(100),
    height: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagWrapper: {
    paddingHorizontal: normalize(15),
  },
  messageContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
    paddingVertical: normalize(10),
    borderRadius: normalize(15),
  },
  messageBubble: {
    padding: normalize(15),
    borderRadius: normalize(15),
  },
  messageText: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    lineHeight: normalize(15),
  },
  messageTime: {
    color: '#B2B2B2',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
  },

  itemContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    paddingVertical: normalize(13),
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E9F2',
    marginHorizontal: normalize(5),
  },

  leftContainer: {
    marginRight: normalize(10),
  },

  rightContainer: {
    flex: 1,
    // marginTop: normalize(4),
    marginLeft: normalize(5),
  },
  profileImage: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
  },
  name: {
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Bold,
    color: '#060606',
  },
  message: {
    fontSize: normalize(10),
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
  },
  date: {
    fontSize: normalize(10),
    color: '#949494',
  },
  iconStyle: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    marginRight: normalize(4),
  },
  carDetailsCard: {
    backgroundColor: Colors.white,
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
