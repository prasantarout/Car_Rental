import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import css from '../../themes/Css';
import Colors from '../../themes/Colors';
import Header from '../../components/general/Header';
import SafeView from '../../components/general/SafeView';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';
import Fonts from '../../themes/Fonts';
import Input from '../../components/form/Input';
import CustomButton from '../../components/micro/CustomButton';

function ContactUs(props) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Contact Us'}
        enableNotificationButton
        enableMenuButton
      />

      <SafeView marginHorizontal={normalize(10)}>
        <View
          style={[
            css.aic,
            css.p10,
            css.w100,
            css.my15,
            css.row,
            style.dataContainer,
          ]}>
          <Image source={Icons.mail} style={style.Imagestyle} />
          <View style={{marginLeft: normalize(15)}}>
            <Text style={style.Title}>Email address</Text>
            <Text style={style.description}>info@email.com</Text>
          </View>
        </View>
        <View
          style={[
            css.aic,
            css.p10,
            css.w100,
            css.my15,
            css.row,

            style.dataContainer,
          ]}>
          <Image source={Icons.phone} style={style.Imagestyle} />
          <View style={{marginLeft: normalize(15)}}>
            <Text style={style.Title}>Phone number</Text>
            <Text style={style.description}>123 459 5698</Text>
          </View>
        </View>
        <View
          style={[
            css.aic,
            css.p10,
            css.w100,
            css.my15,
            css.row,
            style.dataContainer,
          ]}>
          <Image source={Icons.Address} style={style.Imagestyle} />
          <View style={{marginLeft: normalize(15)}}>
            <Text style={style.Title}>Address</Text>
            <Text style={[style.description]} numberOfLines={1}>
              1684 Ebert Pike, Surprise 55580
            </Text>
          </View>
        </View>
        <View style={[css.p10, css.w100, css.my15, style.dataContainer]}>
          <Text style={style.needHelp}>Need any help?</Text>
          <Input
            title="Name"
            containerStyle={[css.f1, css.mr8, css.w100]}
            placeholder="Enter name"
            value={name}
            titleStyle={style.inputStyle}
            onChangeText={val => setname(val)}
          />
          <Input
            title="Email"
            containerStyle={[css.f1, css.w100]}
            placeholder="Enter email address"
            value={email}
            onChangeText={val => setemail(val)}
            titleStyle={[style.inputStyle, css.mt10]}
            inputMode="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            title="Message"
            containerStyle={[css.f1, css.mt10, css.w100]}
            placeholder="Type here..."
            value={message}
            onChangeText={val => setmessage(val)}
            titleStyle={style.inputStyle}
            multiline
          />
          <CustomButton
            width={'100%'}
            height={normalize(45)}
            alignSelf={'center'}
            marginTop={normalize(20)}
            marginBottom={normalize(10)}
            backgroundColor={'#9E4DB6'}
            title={'Send'}
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
        </View>
      </SafeView>
    </View>
  );
}

export default ContactUs;
const style = StyleSheet.create({
  needHelp: {
    textAlign: 'center',
    color: '#0B0B0B',
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    textTransform: 'capitalize',
    marginVertical: normalize(15),
  },
  Title: {
    color: '#919191',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
  },
  description: {
    color: '#060606',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    marginTop: normalize(2),
  },
  Imagestyle: {height: normalize(50), width: normalize(50)},
  dataContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputStyle: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
});
