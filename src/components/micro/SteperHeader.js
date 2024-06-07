import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from '../../utils/helpers/dimen';
import Colors from '../../themes/Colors';
import Icons from '../../themes/Icons';
import Fonts from '../../themes/Fonts';

const SteperHeader = ({activeStep, steps}) => {
  const styles = customStyles();
  const activeStepIndex = steps?.findIndex(val => val === activeStep);

  return (
    <View style={styles.headerContainer}>
      {steps?.map((step, index) => (
        <>
          <Steper
            step={step}
            activeStep={index <= activeStepIndex}
            key={index}
          />
          {index + 1 < steps.length && (
            <StepDevider activeStep={index <= activeStepIndex} />
          )}
        </>
      ))}
    </View>
  );
};

const Steper = ({step, activeStep}) => {
  const styles = customStyles(activeStep);
  return (
    <View style={styles.steperOuterContainer}>
      <View style={styles.steperInnerContainer}>
        <Text style={styles.steperText}>{step}</Text>
      </View>
    </View>
  );
};

const StepDevider = ({activeStep}) => {
  const styles = customStyles(activeStep);
  return (
    <View style={styles.steperDeviderContainer}>
      <View style={styles.steperDeviderLineContainer}>
        <View style={styles.steperDeviderLine} />
      </View>
      <Image style={styles.steperDeviderIcon} source={Icons.gretterThanIcon} />
    </View>
  );
};

const customStyles = activeStep =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: normalize(20),
    },
    steperOuterContainer: {
      height: normalize(50),
      width: normalize(50),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderRadius: normalize(36),
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: activeStep ? Colors.pink : Colors.steperGray,
    },
    steperInnerContainer: {
      height: normalize(35),
      width: normalize(35),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: activeStep ? Colors.pink : Colors.white,
      borderRadius: normalize(36),
      shadowColor: Colors.pink,
      shadowRadius: normalize(12),
      shadowOffset: {height: normalize(12)},
      shadowOpacity: 0.2,
    },
    steperDeviderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      overflow: 'hidden',
    },
    steperDeviderLineContainer: {
      flex: 1,
      overflow: 'hidden',
      height: normalize(4),
    },
    steperDeviderLine: {
      marginTop: normalize(2),
      width: '100%',
      marginHorizontal: normalize(4),
      borderWidth: 1,
      height: 20,
      borderStyle: 'dashed',
      borderColor: activeStep ? Colors.pink : Colors.steperGray,
    },
    steperDeviderIcon: {
      height: normalize(12),
      width: normalize(12),
      resizeMode: 'contain',
      position: 'absolute',
      tintColor: activeStep ? Colors.pink : Colors.steperGray,
    },
    steperText: {
      fontSize: normalize(14),
      color: activeStep ? Colors.white : Colors.steperGray,
      fontFamily: Fonts.Roboto_Bold,
    },
  });

export default SteperHeader;
