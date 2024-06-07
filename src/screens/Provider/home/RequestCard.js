import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from '../../../utils/helpers/dimen';
import Colors from '../../../themes/Colors';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import css from '../../../themes/Css';
import Button from '../../../components/micro/Button';
import Fonts from '../../../themes/Fonts';
const RequestCard = ({item, index, navigation}) => {
  const styles = customStyles();

  console.log('item', item);

  return (
    <TouchableOpacity
      style={[styles.card]}
      onPress={() => {
        navigation.navigate('RequestRideDetails');
      }}>
      <View style={styles.topContainer}>
        <Image source={Images.Profile} style={styles.profileImage} />
        <View style={css.ml10}>
          <Text style={styles.profileName}>{item.userName}</Text>
          <Text style={[styles.grayText, css.mt4]}>Age: {item.age}</Text>
        </View>
      </View>
      <View style={[styles.middleContainer, css.mt10, css.f1]}>
        <View style={css.w50}>
          <Text style={styles.grayText}>Driving license ID:</Text>
          <Text style={[styles.subTitleText, css.mt4]}>{item.licenceId}</Text>
        </View>
        <View style={css.w50}>
          <Text style={styles.grayText}>Selected Vehicle</Text>
          <Text style={[styles.subTitleText, css.mt4]}>{item.vehicle}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.rowDataContainer}>
        <Image source={Icons.mailIcon} style={styles.iconStyle} />
        <Text style={[styles.grayText, css.ml4]}>{item.email}</Text>
      </View>
      <View style={[styles.rowDataContainer, css.mt4]}>
        <Image source={Icons.phoneIcon} style={styles.iconStyle} />
        <Text style={[styles.grayText, css.ml4]}>{item.phone}</Text>
      </View>
      <View style={[css.rowBetween, css.mt10]}>
        <Button
          title={'Reject'}
          onPress={() => {
            navigation.navigate('ProviderTabNavigator', {
              screen: 'Calendar',
            });
          }}
          type={'outline'}
          style={[css.w48]}
        />
        <Button
          title={'Accept'}
          onPress={() => {
            navigation.navigate('ProviderTabNavigator', {
              screen: 'Calendar',
            });
          }}
          style={[css.w48]}
        />
      </View>
    </TouchableOpacity>
  );
};

const customStyles = () =>
  StyleSheet.create({
    card: {
      margin: normalize(10),
      padding: normalize(10),
      borderRadius: normalize(10),
      backgroundColor: Colors.white,
      shadowColor: Colors.bgGray,
      shadowOffset: {height: 0, width: 0},
      shadowRadius: normalize(10),
      shadowOpacity: 1,
    },
    topContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    middleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    buttonContainer: {},
    profileImage: {
      height: normalize(40),
      width: normalize(40),
      resizeMode: 'contain',
      borderRadius: normalize(40),
    },
    iconStyle: {
      height: normalize(16),
      width: normalize(16),
    },
    rowDataContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    profileName: {
      color: Colors.black,
      fontSize: normalize(14),
      fontFamily: Fonts.Roboto_Bold,
    },
    grayText: {
      color: Colors.steperGray,
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Medium,
    },
    subTitleText: {
      color: Colors.black,
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Medium,
    },
    line: {
      height: 1,
      flex: 1,
      backgroundColor: Colors.lightPink,
      marginVertical: normalize(10),
    },
  });

export default RequestCard;
