import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../../themes/Colors';

const CustomStatusBar = ({
  barStyle = 'light',
  backgroundColorType = 'light',
  hidden = false,
}) => {
  return (
    <StatusBar
      animated
      translucent={true}
      backgroundColor={
        backgroundColorType === 'light'
          ? Colors.purple
          : backgroundColorType === 'transparent'
          ? Colors.transparent
          : backgroundColorType === 'dark'
          ? Colors.white
          : Colors.white
      }
      barStyle={
        barStyle === 'light'
          ? 'light-content'
          : barStyle === 'dark'
          ? 'dark-content'
          : 'default'
      }
      hidden={hidden}
    />
  );
};

export default CustomStatusBar;
