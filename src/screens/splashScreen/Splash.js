/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {Icons} from '../../themes/Theme';
import CustomStatusBar from '../../components/general/CustomStatusBar';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('OnBoarding');
    }, 2500);
  }, []);

  return (
    <Fragment>
      <CustomStatusBar backgroundColorType={'transparent'} />
      <ImageBackground source={Icons.Splash} style={{flex: 1}} />
    </Fragment>
  );
}
