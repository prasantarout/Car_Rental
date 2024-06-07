import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/general/Header';
import css from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';
import Switch from '../../components/form/Switch';
import Fonts from '../../themes/Fonts';

function Settings(props) {
  const [isSelected, setisSelected] = useState(false);
  const [isSelectedPrivacy, setisSelectedPrivacy] = useState(false);
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Settings'}
        enableNotificationButton
        enableMenuButton
      />
      {/* <SafeView> */}
      <View style={style.container}>
        <View style={style.subview}>
          <Image
            source={Icons.notificationInactive}
            style={style.ImageStyle}
            resizeMode="contain"
          />
          <Text style={style.TextStyle}>Notification</Text>
        </View>
        <Switch
          active={isSelected}
          textShow={false}
          onChange={value => {
            setisSelected(value);
          }}
        />
      </View>

      <View style={style.container}>
        <View style={style.subview}>
          <Image
            source={Icons.privacy}
            style={style.ImageStyle}
            resizeMode="contain"
          />
          <Text style={style.TextStyle}>Privacy Policy</Text>
        </View>
        <Switch
          active={isSelectedPrivacy}
          textShow={false}
          onChange={value => {
            setisSelectedPrivacy(value);
          }}
        />
      </View>
      {/* </SafeView> */}
    </View>
  );
}

export default Settings;
const style = StyleSheet.create({
  subview: {flexDirection: 'row', alignItems: 'center'},
  TextStyle: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(14),
    marginLeft: normalize(12),
  },
  ImageStyle: {height: normalize(15), width: normalize(15)},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    padding: normalize(15),
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(10),
    marginTop: normalize(15),
  },
});
