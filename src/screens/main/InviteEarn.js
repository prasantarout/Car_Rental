import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import css from '../../themes/Css';
import Colors from '../../themes/Colors';
import Header from '../../components/general/Header';
import SafeView from '../../components/general/SafeView';
import Images from '../../themes/Images';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import CustomButton from '../../components/micro/CustomButton';
import Icons from '../../themes/Icons';

const InviteEarn = props => {
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Invite & earn'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView>
        <Image source={Images.InviteEarn} style={style.InviteImage} />
        <View style={{padding: normalize(10)}}>
          <View style={style.textContainer}>
            <Text style={style.number}>1.</Text>
            <Text style={style.description}>
              In morbi pellentesque congue enim amet eget vel leo id.
            </Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.number}>2.</Text>
            <Text style={style.description}>
              Morbi tincidunt euismod lectus id eleifend. Curabitur sit amet
              facilisis.
            </Text>
          </View>

          <View style={style.textContainer}>
            <Text style={style.number}>3.</Text>
            <Text style={style.description}>
              Pellentesque congue enim amet eget vel leo id.
            </Text>
          </View>
        </View>
        <View style={style.mainView}>
          <Text style={style.TextLink}>
            https://lorem_ipsum-dolorsit/3lorem
          </Text>
          <TouchableOpacity style={style.CopyView}>
            <Image source={Icons.Copy} style={style.CopyImage} />
          </TouchableOpacity>
        </View>
        <CustomButton
          width={'95%'}
          height={normalize(45)}
          alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Share link'}
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
      </SafeView>
    </View>
  );
};

export default InviteEarn;
const style = StyleSheet.create({
  mainView: {
    width: '95%',
    backgroundColor: '#F7F7F7',
    borderRadius: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  CopyView: {
    backgroundColor: '#EADFEE',
    padding: normalize(15),
    borderRadius: normalize(10),
  },
  TextLink: {
    textAlign: 'center',
    color: '#B1B1B1',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginLeft: normalize(15),
  },
  CopyImage: {height: normalize(20), width: normalize(20)},
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginLeft: normalize(4),
  },
  InviteImage: {
    height: normalize(180),
    width: normalize(180),
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  number: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(12),
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(10),
  },
});
