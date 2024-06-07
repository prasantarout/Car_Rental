import React, {useState} from 'react';
import {View} from 'react-native';
import css from '../../../themes/Css';
import Colors from '../../../themes/Colors';
import Header from '../../../components/general/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import normalize from '../../../utils/helpers/dimen';
import SecureInput from '../../../components/form/SecureInput';
import CustomButton from '../../../components/micro/CustomButton';
import Fonts from '../../../themes/Fonts';

const ChangePassword = () => {
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [NewisSecurePass, setNewIsSecurePass] = useState(true);
  const [CnfisSecurePass, setCnfIsSecurePass] = useState(true);
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Change password'}
        enableNotificationButton
        enableMenuButton
      />
      <KeyboardAwareScrollView>
        <View
          style={[
            css.p10,
            css.w95,
            css.asc,
            css.my15,
            {
              backgroundColor: '#FFFFFF',
              borderRadius: normalize(10),
              elevation: 3,
              shadowColor: '#9E4DB6',
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.1,
              shadowRadius: 10,
            },
          ]}>
          <SecureInput
            title="Old Password"
            containerStyle={[css.mb16]}
            placeholder="*********"
            isSecure={isSecurePass}
            value={oldpassword}
            onChangeText={val => setoldpassword(val)}
            onPressIcon={() => setIsSecurePass(!isSecurePass)}
          />
          <SecureInput
            title="New Password"
            containerStyle={[css.f1, css.mb16]}
            placeholder="*********"
            isSecure={NewisSecurePass}
            value={newpassword}
            onChangeText={val => setnewpassword(val)}
            onPressIcon={() => setNewIsSecurePass(!NewisSecurePass)}
          />
          <SecureInput
            title="Confirm New Password"
            containerStyle={[css.f1, css.mb16]}
            placeholder="*********"
            isSecure={CnfisSecurePass}
            value={confirmpassword}
            onChangeText={val => setconfirmpassword(val)}
            onPressIcon={() => setCnfIsSecurePass(!CnfisSecurePass)}
          />
          <CustomButton
            width={'100%'}
            height={normalize(45)}
            alignSelf={'center'}
            marginTop={normalize(20)}
            marginBottom={normalize(10)}
            backgroundColor={'#9E4DB6'}
            title={'Save'}
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePassword;
