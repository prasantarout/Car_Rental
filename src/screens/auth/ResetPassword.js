import {Image, Platform, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import css from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Txt from '../../components/micro/Txt';
import SecureInput from '../../components/form/SecureInput';
import Button from '../../components/micro/Button';
import AuthTemplate from '../../components/general/AuthTemplate';
import BottomSheet from '../../components/general/BottomSheet';
import Icons from '../../themes/Icons';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = props => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [isSecureCnfrmPass, setIsSecureCnfrmPass] = useState(true);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <>
      <AuthTemplate
        title="Reset Password"
        subTitle="Lorem ipsum dolor sit amet consectetur. Egestas orci turpis amet ornare ultrices eros."
        isStatusBarVisible={Platform.OS === 'ios' ? false : isBottomSheetOpen}>
        <View style={[css.px16, css.mt16]}>
          <SecureInput
            title="New Password"
            containerStyle={[css.f1, css.mb16]}
            placeholder="*********"
            isSecure={isSecurePass}
            value={password}
            onChangeText={val => setPassword(val)}
            onPressIcon={() => setIsSecurePass(!isSecurePass)}
          />
          <SecureInput
            title="Confirm Password"
            containerStyle={[css.f1, css.mb16]}
            placeholder="*********"
            isSecure={isSecurePass}
            value={confirmpassword}
            onChangeText={val => setConfirmPassword(val)}
            onPressIcon={() => setIsSecureCnfrmPass(!isSecureCnfrmPass)}
          />
        </View>
        <View style={[css.px16, css.mt16]}>
          <Button title="Save" onPress={() => setIsBottomSheetOpen(true)} />
        </View>
      </AuthTemplate>
      <BottomSheet
        isVisible={isBottomSheetOpen}
        onClose={() => {
          setIsBottomSheetOpen(!isBottomSheetOpen);
        }}>
        <View style={[css.pb30]}>
          <View style={[css.center, css.py30]}>
            <Image
              style={[styles.checkCircleStyle]}
              source={Icons.checkCircle}
            />
            <Txt style={[css.fs15, css.roboto_Bold, css.mt16]}>Thank You!</Txt>
            <Txt style={[css.textLight, css.mt10]}>
              Your password has been reset successfully.
            </Txt>
          </View>
          <Button
            title="Done"
            onPress={() => {
              setIsBottomSheetOpen(false);
              navigation.navigate('Signin');
            }}
          />
        </View>
      </BottomSheet>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  bottomPanel: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopRightRadius: normalize(30),
    borderTopLeftRadius: normalize(30),
    top: normalize(-50),
    marginBottom: -50,
  },
  checkCircleStyle: {
    width: normalize(70),
    height: normalize(70),
  },
});
