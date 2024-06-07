import {Image, Keyboard, StyleSheet, View} from 'react-native';
import React from 'react';
import css, {width} from '../../themes/Css';
import Images from '../../themes/Images';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';
import AuthBannerText from '../micro/AuthBannerText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from './CustomStatusBar';

const AuthTemplate = ({
  children,
  title,
  subTitle,
  bottomPanelStyle,
  isStatusBarVisible,
}) => {
  return (
    <View style={[css.f1, css.bgWhite]}>
      <CustomStatusBar
        backgroundColorType="transparent"
        hidden={isStatusBarVisible}
      />
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[css.f1]}
        contentContainerStyle={[css.fg1, css.pb30]}
        onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <View style={[styles.bannerPanel]}>
          <Image style={[styles.authBgStyle]} source={Images.authBg} />
        </View>
        <View style={[styles.bottomPanel, css.avoidNotch, bottomPanelStyle]}>
          <View style={[styles.carIconWrap, css.center]}>
            <Image source={Icons.mobiCar} style={[styles.mobiCarStyle]} />
            <Image source={Images.carBlack} style={[styles.carImageStyle]} />
          </View>
          <View style={[styles.avoidCarWrap]} />

          <AuthBannerText title={title} subTitle={subTitle} />

          {children}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthTemplate;

const styles = StyleSheet.create({
  authBgStyle: {
    width: width,
    height: normalize(200),
  },
  bottomPanel: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
    top: normalize(-50),
    marginBottom: -50,
  },
  carIconWrap: {
    top: normalize(-115),
    position: 'absolute',
    alignSelf: 'center',
  },
  carImageStyle: {
    width: width / 1.1,
    height: width / 2,
    resizeMode: 'contain',
  },
  avoidCarWrap: {
    marginTop: width / 3.6,
  },
  mobiCarStyle: {
    width: width / 2,
    height: normalize(40),
    resizeMode: 'contain',
  },
});
