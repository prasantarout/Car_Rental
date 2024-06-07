import React from 'react';
import Header from '../../../components/general/Header';
import Colors from '../../../themes/Colors';
import SafeView from '../../../components/general/SafeView';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';
import RequestCard from './RequestCard';
import {useNavigation} from '@react-navigation/native';

const list = [
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
];

const RequestList = () => {
  const styles = customStyles();
  const navigation = useNavigation();
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        headerProfileImage={Images.Profile}
        headerPurpleText={'Welcome, esther'}
        enableMenuButton
        enableNotificationButton
      />
      <SafeView>
        <View style={styles.card}>
          <View style={[css.w50]}>
            <Text style={styles.titleText}>Lorem ipsum dolor</Text>
            <Text style={styles.subTitleText}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <View style={[css.w50, css.aic, css.jcc]}>
            <Image
              source={Images.carWithNoBackground}
              style={styles.carImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.requestContainer}>
          <Text style={styles.requestTitle}>Request List</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RequestListDetails');
            }}>
            <Text style={styles.viewAllTitle}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={({item, index}) => (
              <RequestCard item={item} index={index} navigation={navigation} />
            )}
          />
        </View>
      </SafeView>
    </View>
  );
};

const customStyles = () =>
  StyleSheet.create({
    card: {
      padding: normalize(10),
      borderRadius: normalize(10),
      backgroundColor: Colors.bgGray,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    titleText: {
      fontSize: normalize(16),
      textTransform: 'capitalize',
      color: Colors.txtblack,
      fontFamily: Fonts.Roboto_Bold,
    },
    subTitleText: {
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Regular,
      textTransform: 'capitalize',
      color: Colors.txtcolor,
      marginTop: normalize(8),
    },
    carImage: {
      width: normalize(150),
      height: normalize(80),
      minWidth: 80,
      minHeight: 80,
    },
    cardHeaderText: {
      width: '92%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: 10,
      alignItems: 'center',
    },
    requestContainer: {
      width: '92%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: 10,
      alignItems: 'center',
    },
    requestTitle: {
      fontFamily: Fonts.Roboto_Bold,
      fontSize: normalize(16),
      color: Colors.txtblack,
    },
    viewAllTitle: {
      color: Colors.pink,
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Medium,
      textDecorationLine: 'underline',
      textDecorationColor: Colors.pink,
    },
    listContainer: {
      width: '100%',
      paddingBottom: normalize(70),
    },
  });

export default RequestList;
