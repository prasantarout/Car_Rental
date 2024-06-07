import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import css from '../../themes/Css';
import Txt from '../../components/micro/Txt';
import Input from '../../components/form/Input';
import FileInput from '../../components/form/FileInput';
import Icons from '../../themes/Icons';
import SecureInput from '../../components/form/SecureInput';
import CheckBox from '../../components/form/CheckBox';
import Button from '../../components/micro/Button';
import AuthTemplate from '../../components/general/AuthTemplate';
import {formatPhoneNumber} from '../../utils/helpers/validators';
import {useSelector} from 'react-redux';
import BottomSheet from '../../components/general/BottomSheet';
import normalize from '../../utils/helpers/dimen';
import {useNavigation} from '@react-navigation/native';

const Signup = props => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formattedPhone, setFormattedPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecurePass, setIsSecurePass] = useState(true);
  const [isSecureConfrmPass, setIsSecureConfrmPass] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <>
      <AuthTemplate
        title="Sign Up"
        subTitle="Lorem ipsum dolor sit amet consectetur. Egestas orci turpis amet ornare ultrices eros."
        isStatusBarVisible={Platform.OS === 'ios' ? false : isBottomSheetOpen}>
        <View style={[css.px16, css.mt16]}>
          <View style={[css.row, css.mb16]}>
            <Input
              title="First Name"
              containerStyle={[css.f1, css.mr8]}
              placeholder="Enter first name"
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />

            <Input
              title="Last Name"
              containerStyle={[css.f1, css.ml8]}
              placeholder="Enter last name"
              value={lastName}
              onChangeText={val => setLastName(val)}
            />
          </View>

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

          <Input
            title="Phone Number"
            containerStyle={[css.f1, css.mb16]}
            inputMode="tel"
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            value={formattedPhone}
            onChangeText={val =>
              setFormattedPhone(formatPhoneNumber(formattedPhone, val, true))
            }
          />
          <Input
            title="Age"
            containerStyle={[css.f1, css.mb16]}
            inputMode="tel"
            keyboardType="phone-pad"
            placeholder="Enter age"
            value={age}
            onChangeText={val => setAge(val)}
          />

          <Input
            title="Address"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter address"
            value={address}
            onChangeText={val => setAddress(val)}
          />

          <Input
            title="Driving License Number"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter driving license number"
            value={licenseNumber}
            onChangeText={val => setLicenseNumber(val)}
          />

          <FileInput
            title="Upload Driving License"
            containerStyle={[css.f1, css.mb16]}
            icon={Icons.upload}
            placeholder="Maximum size 5MB"
            value={drivingLicense}
            onChangeText={val => setDrivingLicense(val)}
          />

          <SecureInput
            title="Desired Password"
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
            isSecure={isSecureConfrmPass}
            value={confirmPassword}
            onChangeText={val => setConfirmPassword(val)}
            onPressIcon={() => setIsSecureConfrmPass(!isSecureConfrmPass)}
          />
        </View>
        <View style={[css.px16, css.row, css.aic]}>
          <CheckBox
            isChecked={isChecked}
            onCheck={() => setIsChecked(!isChecked)}
          />
          <View style={[css.px8, css.row]}>
            <Txt style={[css.textLight]}>Accept </Txt>
            <Txt style={[css.textLight, css.roboto_Bold]}>
              Terms & Conditions
            </Txt>
            <Txt style={[css.textLight]}> and </Txt>
            <Txt style={[css.textLight, css.roboto_Bold]}>Privacy Policy</Txt>
          </View>
        </View>
        <View style={[css.px16, css.mt16]}>
          <Button title="Sign Up" onPress={() => setIsBottomSheetOpen(true)} />
        </View>
        <View style={[css.px16, css.mt16, css.center, css.row]}>
          <Txt style={[css.textLight]}>If already have an account? </Txt>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Txt style={[css.textTheme, css.roboto_Bold]}>Login</Txt>
          </TouchableOpacity>
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
              source={authType === 'user' ? Icons.checkCircle : Icons.sandTimer}
            />
            <Txt style={[css.fs15, css.roboto_Bold, css.mt16]}>
              {authType === 'user'
                ? 'Thank You!'
                : 'The verification is in progress'}
            </Txt>
            <Txt style={[css.textLight, css.mt10, css.tac]}>
              {authType === 'user'
                ? 'Your profile has been created successfully.'
                : 'Once it is approved, you will receive an email to your registered email ID'}
            </Txt>
          </View>
          <Button
            title={authType === 'user' ? 'Done' : 'Okay'}
            onPress={() => {
              setIsBottomSheetOpen(false);
              authType === 'user'
                ? navigation.navigate('Signin')
                : navigation.navigate('AddNewCar', {
                    headerShown: false,
                    screenName: 'On Boarding',
                  });
            }}
          />
        </View>
      </BottomSheet>
    </>
  );
};

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

export default Signup;
