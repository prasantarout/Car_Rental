import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Txt from '../../components/micro/Txt';
import Input from '../../components/form/Input';
import SecureInput from '../../components/form/SecureInput';
import CheckBox from '../../components/form/CheckBox';
import Button from '../../components/micro/Button';
import AuthTemplate from '../../components/general/AuthTemplate';
import {useSelector} from 'react-redux';
import css from '../../themes/Css';
import {useNavigation} from '@react-navigation/native';

const Signin = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const authType = useSelector(state => state?.AuthReducer?.authUserType);

  return (
    <>
      <AuthTemplate
        title="Login"
        subTitle="Lorem ipsum dolor sit amet consectetur. Egestas orci turpis amet ornare ultrices eros.">
        <View style={[css.px16, css.mt16]}>
          <Input
            title="Email"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter email"
            value={email}
            onChangeText={val => setEmail(val)}
            inputMode="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <SecureInput
            title="Password"
            containerStyle={[css.f1, css.mb16]}
            placeholder="*********"
            isSecure={isSecurePass}
            value={password}
            onChangeText={val => setPassword(val)}
            onPressIcon={() => setIsSecurePass(!isSecurePass)}
          />
        </View>

        <View style={[css.px16, css.rowBetween, css.aic]}>
          <View style={[css.row, css.aic]}>
            <CheckBox
              isChecked={isChecked}
              onCheck={() => setIsChecked(!isChecked)}
            />
            <View style={[css.px8, css.row]}>
              <Txt style={[css.textLight]}>Remember me </Txt>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OTPVerification')}>
            <Txt style={[css.textTheme, css.roboto_Medium]}>
              Forgot Password?
            </Txt>
          </TouchableOpacity>
        </View>

        <View style={[css.px16, css.mt16]}>
          <Button
            title="Login"
            onPress={() =>
              navigation.navigate(
                authType === 'user' ? 'TabNavigator' : 'ProviderTabNavigator',
              )
            }
          />
        </View>

        <View style={[css.px16, css.mt16, css.center, css.row]}>
          <Txt style={[css.textLight]}>Don't have an account? </Txt>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Txt style={[css.textTheme, css.roboto_Bold]}>Sign Up</Txt>
          </TouchableOpacity>
        </View>
      </AuthTemplate>
    </>
  );
};

export default Signin;
