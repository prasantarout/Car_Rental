import React, {Fragment} from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Colors from '../../themes/Colors';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../components/general/CustomStatusBar';

export default function OnBoarding(props) {
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const navigation = useNavigation();

  return (
    <Fragment>
      <ImageBackground source={Icons.OnBoarding} style={{flex: 1}}>
        <CustomStatusBar backgroundColorType={'transparent'} />
        <View
          style={{
            width: '92%',
            alignSelf: 'center',
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <ImageBackground
            style={styles.imgwhite}
            source={Images.onBoardingContent}
            resizeMode="stretch">
            <Text style={styles.txthowtouse}>How to use!</Text>
            <Text style={styles.textbody}>
              Lorem ipsum dolor sit amet consectetur. Lobortis sed commodo enim
              sed accumsan lorem. Placerat quis eget nunc malesuada netus elit
              etiam dolor. Congue id sagittis facilisis faucibus ullamcorper.
            </Text>
            <TouchableOpacity
              onPress={() => {
                authType === 'user' && navigation?.replace('Signup');
                authType === 'provider' &&
                  navigation?.replace('ProviderSignup');
              }}
              style={styles.btnnext}>
              <Text style={styles.txtgetstarted}>Get Started</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icons.rightarrow}
                  style={[
                    styles.imgrightarrow,
                    {
                      tintColor: 'rgba(255, 255, 255,0.2)',
                      marginRight: normalize(4),
                    },
                  ]}
                />
                <Image
                  source={Icons.rightarrow}
                  style={[
                    styles.imgrightarrow,
                    {
                      tintColor: 'rgba(255, 255, 255,0.4)',
                      marginRight: normalize(4),
                    },
                  ]}
                />
                <Image
                  source={Icons.rightarrow}
                  style={[
                    styles.imgrightarrow,
                    {
                      tintColor: 'rgba(255, 255, 255,1)',
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ImageBackground>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  imgwhite: {
    width: '100%',
    height: normalize(180),
    marginBottom: Platform.OS == 'android' ? normalize(15) : normalize(25),
    alignItems: 'center',
  },
  txthowtouse: {
    color: Colors.white,
    fontSize: normalize(17),
    marginTop: normalize(18),
    fontFamily: Fonts.Roboto_Bold,
  },
  textbody: {
    color: Colors.lighttextcolor,
    width: '90%',
    textAlign: 'center',
    fontSize: normalize(10.5),
    marginTop: normalize(7),
    fontFamily: Fonts.Roboto_Medium,
    lineHeight: normalize(15),
  },
  btnnext: {
    backgroundColor: 'rgba(255, 255, 255,0.19)',
    width: '90%',
    height: normalize(38),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: normalize(20),
    marginTop: normalize(18),
    paddingRight: normalize(15),
  },
  txtgetstarted: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(12),
  },
  imgrightarrow: {
    width: normalize(7),
    height: normalize(12),
  },
});
