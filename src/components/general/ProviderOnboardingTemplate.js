import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import SafeView from './SafeView';
import SteperHeader from '../micro/SteperHeader';
import CustomTab from './CustomTab';
import Header from './Header';
import css from '../../themes/Css';
import MyStatusBar from '../../utils/MyStatusBar';

const ProviderOnboardingTemplate = ({
  title,
  subTitle,
  steps,
  activeStep,
  tabs,
  activeTab,
  handleTabPress,
  children,
  headerShown,
}) => {
  const styles = customStyles();
  return (
    <View style={[css.f1, css.bgWhite]}>
      {headerShown ? (
        <Header
          enableLightTheme
          enableBackButton
          headerBlackText={'Add Vehicle'}
          enableNotificationButton
          enableMenuButton
        />
      ) : (
        <MyStatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      )}
      <SafeView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        {steps?.length && (
          <SteperHeader activeStep={activeStep} steps={steps} />
        )}
        {tabs?.length && (
          <View style={styles.tabsContainer}>
            <CustomTab
              tabs={tabs}
              activeTab={activeTab}
              onPress={handleTabPress}
            />
          </View>
        )}
        <View style={[styles.childContainer]}>{children}</View>
      </SafeView>
    </View>
  );
};

export default ProviderOnboardingTemplate;

const customStyles = () =>
  StyleSheet.create({
    titleContainer: {
      paddingVertical: normalize(20),
      paddingHorizontal: normalize(20),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: normalize(16),
      fontFamily: Fonts.Roboto_Bold,
      textTransform: 'capitalize',
      color: Colors.pink,
      lineHeight: normalize(36),
    },
    subTitleText: {
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Regular,
      textTransform: 'capitalize',
      color: Colors.txtcolor,
      textAlign: 'center',
    },
    tabsContainer: {
      paddingHorizontal: normalize(20),
      width: '100%',
    },
    childContainer: {
      width: '100%',
    },
  });
