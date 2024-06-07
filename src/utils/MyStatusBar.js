import React from 'react';
import {StatusBar, Platform, SafeAreaView} from 'react-native';
import propTypes from 'prop-types';
import {Colors} from '../themes/Theme';
import normalize from '../utils/helpers/dimen';

const MyStatusBar = ({backgroundColor, barStyle, ...props}) => (
  <SafeAreaView style={Platform.OS === 'ios' && [{backgroundColor}]}>
    <StatusBar
      translucent={true}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      hidden={false}
    />
  </SafeAreaView>
);

export default MyStatusBar;

MyStatusBar.propTypes = {
  backgroundColor: propTypes.string,
  barStyle: propTypes.string,
  height: propTypes.number,
  translucent: propTypes.bool,
};

MyStatusBar.defaultProps = {
  backgroundColor: Colors.black,
  barStyle: 'light-content',
  height: normalize(20),
  translucent: false,
};
