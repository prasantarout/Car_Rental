import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Fonts, Colors, Icons, Images} from '../../themes/Theme';
import {useNavigation} from '@react-navigation/native';
import normalize from '../../utils/helpers/dimen';
import Modal from 'react-native-modal';
import MyStatusBar from '../../utils/MyStatusBar';
import {useTranslation} from 'react-i18next';
import css from '../../themes/Css';
import HeaderMenuComponent, {MenuList} from './HeaderMenuComponent';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

const Header = ({
  enableLightTheme,
  enableBackButton,
  enableAppLogo,
  headerProfileImage,
  headerBlackText,
  headerPurpleText,
  textTransform = 'capitalize',
  enableNotificationButton,
  enableMenuButton,
}) => {
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const {t} = useTranslation();
  const [modalvisible, setmodalvisible] = useState(false);
  const navigation = useNavigation();
  const [menuList, setMenuList] = useState(MenuList);

  const styles = customStyles();

  return (
    <>
      {enableLightTheme ? (
        <MyStatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      ) : (
        <MyStatusBar />
      )}
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          {enableBackButton && (
            <>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={styles.headerIconStyle}
                  source={Icons.headerIconBack}
                />
              </TouchableOpacity>
              <View style={css.mr8} />
            </>
          )}
          {enableAppLogo && (
            <>
              <Image source={Images?.headerLogo} style={styles.companyLogo} />
              <View style={css.mr8} />
            </>
          )}
          {headerProfileImage && (
            <>
              <Image
                style={styles.headerProfileIconStyle}
                source={headerProfileImage}
              />
              <View style={css.mr8} />
            </>
          )}
          {headerBlackText && (
            <>
              <Text
                style={[
                  styles.headerBlackText,
                  {textTransform: textTransform},
                ]}>
                {headerBlackText}
              </Text>
              <View style={css.mr8} />
            </>
          )}
          {headerPurpleText && (
            <>
              <Text
                style={[
                  styles.headerPurpleText,
                  {textTransform: textTransform},
                ]}>
                {headerPurpleText}
              </Text>
              <View style={css.mr8} />
            </>
          )}
        </View>
        <View style={styles.rightContainer}>
          {enableNotificationButton && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notification');
              }}>
              <Image
                source={Icons.headerIconNotification}
                style={styles.headerIconStyle}
              />
            </TouchableOpacity>
          )}
          {enableMenuButton && (
            <>
              <View style={css.ml8} />
              <TouchableOpacity onPress={() => setmodalvisible(true)}>
                <Image
                  source={Icons.headerIconMenu}
                  style={styles.headerIconStyle}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <Modal
        isVisible={modalvisible}
        backdropOpacity={0.5}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        hasBackdrop={true}
        onBackdropPress={() => {
          setmodalvisible(false);
        }}
        style={styles.modalStyle}>
        <View style={styles.modalContainer}>
          <View style={[css.row, css.aic, css.jcfe, {height: normalize(50)}]}>
            <TouchableOpacity
              onPress={() => {
                setmodalvisible(false);
              }}>
              <Image
                source={Icons.headerIconCross}
                style={styles.headerIconStyle}
              />
            </TouchableOpacity>
          </View>

          <View style={[css.row, css.aic]}>
            <Image
              source={Images.drawerprofile}
              style={{width: normalize(40), height: normalize(40)}}
            />
            <View style={{marginLeft: normalize(10)}}>
              <Text
                style={{
                  color: Colors.txtblack,
                  fontFamily: Fonts.Roboto_Medium,
                  fontSize: normalize(12),
                }}>
                Livia Dias
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfle');
                  setmodalvisible(false);
                }}>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <FlatList
            style={{
              paddingTop: normalize(10),
            }}
            data={menuList}
            renderItem={({item, index}) =>
              HeaderMenuComponent({
                authType: authType,
                menuList: menuList,
                setMenuList: setMenuList,
                navigation: navigation,
                setmodalvisible: setmodalvisible,
                t: t,
                item: item,
                index: index,
              })
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: normalize(50)}}
          />
        </View>
      </Modal>
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
    headerBlackText: {
      fontFamily: Fonts.Roboto_Bold,
      textTransform: 'capitalize',
      fontSize: normalize(14),
      color: Colors.black,
    },
    headerPurpleText: {
      fontFamily: Fonts.Roboto_Bold,
      textTransform: 'capitalize',
      fontSize: normalize(14),
      color: Colors.purple,
    },
    headerIconStyle: {
      width: normalize(30),
      height: normalize(30),
      resizeMode: 'contain',
    },
    headerProfileIconStyle: {
      width: normalize(30),
      height: normalize(30),
      resizeMode: 'contain',
      borderRadius: normalize(30),
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

export default Header;
