import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Fonts, Colors, Images} from '../../../themes/Theme';
import {useNavigation} from '@react-navigation/native';
import normalize from '../../../utils/helpers/dimen';
import MyStatusBar from '../../../utils/MyStatusBar';
import css from '../../../themes/Css';

const width = Dimensions.get('screen').width;

const ChatHeader = ({enableLightTheme, profileName, status, profileImage}) => {
  const navigation = useNavigation();

  const styles = customStyles();

  return (
    <>
      <MyStatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerIconStyle} source={profileImage} />
          </TouchableOpacity>
          <View style={css.mr8} />

          <View style={styles.profileDetailsContainer}>
            <Image source={Images.chatUser} style={styles.headerIconStyle} />
            <View style={css.ml8}>
              <Text style={[styles.profileName]}>{profileName}</Text>
              <Text style={[styles.statusText]}>{status}</Text>
            </View>
          </View>

          <View style={css.mr4} />
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Images.dotMenu} style={styles.headerIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const customStyles = () =>
  StyleSheet.create({
    headerContainer: {
      height: normalize(50),
      alignItems: 'center',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      paddingHorizontal: normalize(10),
    },
    leftContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rightContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    profileDetailsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    profileName: {
      fontFamily: Fonts.Roboto_Medium,
      textTransform: 'capitalize',
      fontSize: normalize(12),
      color: Colors.black,
    },
    statusText: {
      fontFamily: Fonts.Roboto_Medium,
      textTransform: 'capitalize',
      fontSize: normalize(10),
      color: Colors.green,
      marginTop: normalize(2),
    },
    headerIconStyle: {
      width: normalize(30),
      height: normalize(30),
      resizeMode: 'contain',
    },
    companyLogo: {
      width: normalize(116),
      height: normalize(16),
      resizeMode: 'contain',
    },
    iconContainerStyle: {
      width: normalize(32),
      height: normalize(32),
      backgroundColor: Colors.lightPink,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: normalize(8),
      marginRight: normalize(10),
    },
    iconStyle: {
      width: normalize(15),
      height: normalize(15),
      resizeMode: 'contain',
    },
    modalStyle: {
      width: '70%',
      height: '100%',
      position: 'absolute',
      margin: 0,
      right: 0,
    },
    modalContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: Colors.white,
      paddingLeft: normalize(15),
      paddingRight: normalize(10),
    },
    crossImageContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    crossImageStyle: {
      width: normalize(10),
      height: normalize(10),
      resizeMode: 'contain',
    },
    viewProfileText: {
      color: Colors.pink,
      fontFamily: Fonts.Roboto_Medium,
      textDecorationLine: 'underline',
      marginTop: normalize(4),
      fontSize: normalize(10),
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: Colors.bordercolor,
      marginTop: normalize(12),
    },
    txtmoby: {
      color: Colors.black,
      fontFamily: Fonts.Roboto_Bold,
      fontSize: normalize(16),
    },
    headerText: {
      color: '#0B0B0B',
      fontFamily: Fonts.Roboto_Bold,
      fontSize: normalize(14),
    },
    textItem: {
      color: Colors.blackTrans,
      fontFamily: Fonts.Roboto_Bold,
      fontSize: normalize(14),
    },
    backIconStyle: {
      width: normalize(30),
      height: normalize(30),
      resizeMode: 'contain',
      marginRight: normalize(10),
    },
    profileNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileNameText: {
      fontFamily: Fonts.Roboto_Bold,
      textTransform: 'capitalize',
      fontSize: normalize(14),
      color: Colors.purple,
    },
    menuListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      marginVertical: normalize(4),
    },
    menuListLeftContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    menuListRightContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuIcon: {
      height: normalize(16),
      width: normalize(16),
      resizeMode: 'contain',
      marginRight: normalize(10),
    },
  });

export default ChatHeader;
