import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import AuthTemplate from '../../components/general/AuthTemplate';
import css from '../../themes/Css';
import Colors from '../../themes/Colors';
import Button from '../../components/micro/Button';
import Txt from '../../components/micro/Txt';
import Input from '../../components/form/Input';
import {useNavigation} from '@react-navigation/native';

const OTPVerification = props => {
  const [isEmailScreen, setIsEmailScreen] = useState(true);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const otpInput1Ref = useRef(null);
  const otpInput2Ref = useRef(null);
  const otpInput3Ref = useRef(null);
  const otpInput4Ref = useRef(null);

  const focusNext = nextRef => {
    nextRef.current && nextRef.current.focus();
  };

  const handleContinueBtn = () => {
    if (isEmailScreen) {
      setIsEmailScreen(false);
    } else {
      navigation.navigate('ResetPassword');
    }
  };

  const title = isEmailScreen ? 'Enter Your Email' : 'Enter Verification OTP';
  const subTitle = isEmailScreen
    ? 'We will send you OTP for verification'
    : "We've sent a verification code to your registered mobile number. Please enter the code below to verify your account.";
  return (
    <AuthTemplate title={title} subTitle={subTitle}>
      <View style={[css.w100, css.px16, css.mt50]}>
        {isEmailScreen ? (
          <Input
            title="Email"
            containerStyle={[css.f1]}
            placeholder="Enter email"
            value={email}
            onChangeText={val => setEmail(val)}
            inputMode="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        ) : (
          <View style={[css.row, css.center]}>
            <TextInput
              ref={otpInput1Ref}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={text => {
                if (text.length === 1) {
                  focusNext(otpInput2Ref);
                }
              }}
            />
            <TextInput
              ref={otpInput2Ref}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={text => {
                if (text.length === 1) {
                  focusNext(otpInput3Ref);
                }
              }}
            />
            <TextInput
              ref={otpInput3Ref}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={text => {
                if (text.length === 1) {
                  focusNext(otpInput4Ref);
                }
              }}
            />
            <TextInput
              ref={otpInput4Ref}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={text => {
                // You can perform your action after the last digit is entered
              }}
            />
          </View>
        )}
        <View style={[css.mt16]}>
          <Button title="Continue" onPress={handleContinueBtn} />
          <View style={[css.mt16, css.row, css.center]}>
            <Txt style={[css.textMute]}>Didn't Receive OTP?</Txt>
            <TouchableOpacity activeOpacity={0.8}>
              <Txt style={[css.textTheme, css.roboto_Medium, css.ml5]}>
                Resend
              </Txt>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthTemplate>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.bgInput,
    backgroundColor: Colors.bgInput,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.txtblack,
  },
});
