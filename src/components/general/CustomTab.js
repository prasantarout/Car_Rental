import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import normalize from '../../utils/helpers/dimen';

const CustomTab = ({tabs, activeTab, onPress, containerStyle}) => {
  const styles = customStyles();
  return (
    <View style={[styles.tabContainer, containerStyle]}>
      {tabs?.map(tab => {
        return (
          <TouchableOpacity
            style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
            onPress={() => onPress(tab)}>
            <Text
              style={
                activeTab === tab
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const customStyles = () =>
  StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      height: normalize(50),
      width: '100%',
      borderRadius: normalize(8),
      backgroundColor: Colors.lightPink,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: normalize(2),
      borderBottomColor: Colors.pink,
      paddingHorizontal: normalize(20),
      height: '100%',
    },
    activeTabText: {
      fontSize: normalize(12),
      color: Colors.pink,
      fontFamily: Fonts.Roboto_Bold,
    },
    inactiveTab: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      paddingHorizontal: normalize(20),
    },
    inactiveTabText: {
      fontSize: normalize(12),
      color: Colors.steperGray,
      fontFamily: Fonts.Roboto_Bold,
    },
  });

export default CustomTab;
