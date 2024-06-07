import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import css from '../../themes/Css';
import {Dropdown} from 'react-native-element-dropdown';
import i18next from 'i18next';

export const MenuList = [
  {
    label: 'Brands',
    type: 'path',
    path: 'Brands',
    accessableFor: 'user',
    icon: Icons.brand,
  },
  {
    label: 'Language',
    type: 'dropdown',
    dropdownList: [
      {
        label: 'EN',
        value: 'English',
        language: 'en',
        icon: Icons.lanenglish,
      },
      {
        label: 'FR',
        value: 'France',
        language: 'fr',
        icon: Icons.franceflag,
      },
      {
        label: 'IT',
        value: 'Italian',
        language: 'it',
        icon: Icons.italyflag,
      },
      {
        label: 'DE',
        value: 'Germany',
        language: 'de',
        icon: Icons.germanyflag,
      },
    ],
    selected: {
      label: 'EN',
      value: 'English',
      language: 'en',
      icon: Icons.lanenglish,
    },
    isOpen: false,
    accessableFor: 'both',
    icon: Icons.languageicon,
  },
  {
    label: 'Currency',
    type: 'dropdown',
    dropdownList: [
      {label: 'GBP', value: 'GBP'},
      {label: 'INR', value: 'INR'},
      {label: 'USD', value: 'USD'},
      {label: 'BDT', value: 'BDT'},
    ],
    selected: {label: 'GBP', value: 'GBP'},
    isOpen: false,
    accessableFor: 'both',
    icon: Icons.currencyicon,
  },
  {
    label: 'My Profile',
    type: 'path',
    path: 'UserProfle',
    accessableFor: 'both',
    icon: Icons.profileicon,
  },
  {
    label: 'My Favourite',
    type: 'path',
    path: 'MyFavourite',
    accessableFor: 'user',
    icon: Icons.favouriteicon,
  },
  {
    label: 'Completed Rides',
    type: 'path',
    path: 'ProviderCompletedRides',
    accessableFor: 'provider',
    icon: Icons.rides,
  },
  {
    label: 'Payment History',
    type: 'path',
    path: 'PaymentHistory',
    accessableFor: 'both',
    icon: Icons.paymenthistoryicon,
  },
  {
    label: 'My Membership Plan',
    type: 'path',
    path: 'MyMenbershipPlan',
    accessableFor: 'provider',
    icon: Icons.membershipPlan,
  },
  {
    label: 'Settings',
    type: 'path',
    path: 'Settings',
    accessableFor: 'both',
    icon: Icons.settingsicon,
  },
  {
    label: 'Invite & Earn',
    type: 'path',
    path: 'InviteEarn',
    accessableFor: 'both',
    icon: Icons.inviteandearnicon,
  },
  {
    label: 'Help',
    type: 'collection',
    isOpen: false,
    accessableFor: 'both',
    icon: Icons.helpicon,
    collection: [
      {
        label: 'Help centre',
        type: 'path',
        path: 'HelpCenter',
        accessableFor: 'both',
      },
      {
        label: 'Send us your feedback',
        type: 'path',
        path: 'SendFeedback',
        accessableFor: 'both',
      },
      {
        label: 'Contact us',
        type: 'path',
        path: 'ContactUs',
        accessableFor: 'both',
      },
      {
        label: 'FAQs',
        type: 'path',
        path: 'Faq',
        accessableFor: 'both',
      },
    ],
  },
  {
    label: 'Legal',
    type: 'collection',
    isOpen: false,
    accessableFor: 'both',
    icon: Icons.legalicon,
    collection: [
      {
        label: 'Privacy policy',
        type: 'path',
        path: 'PrivacyPolicy',
        accessableFor: 'both',
      },
      {
        label: 'Terms and conditions',
        type: 'path',
        path: 'TermsCondition',
        accessableFor: 'both',
      },
    ],
  },
];

const HeaderMenuComponent = ({
  menuList,
  setMenuList,
  navigation,
  setmodalvisible,
  t,
  item,
  index,
  labelType = true,
  authType = 'user',
}) => {
  const styles = customStyles();

  const handleLabelOnPress = value => {
    switch (item?.type) {
      case 'path': {
        let list = [...menuList];
        menuList.map((menuItem, menuIndex) => {
          if (menuItem?.isOpen) {
            list[menuIndex].isOpen = false;
          }
        });
        setMenuList(list);
        setmodalvisible(false);
        navigation.navigate(item?.path);
        break;
      }
      case 'dropdown': {
        let list = [...menuList];
        if (menuList[index].label === 'Language') {
          i18next.changeLanguage(value.language);
        }
        list[index].selected = value;
        setMenuList(list);
        break;
      }
      case 'collection': {
        let list = [...menuList];
        list[index].isOpen = !menuList[index].isOpen;
        setMenuList(list);
        break;
      }
      default: {
      }
    }
  };

  const handleDropdownOpen = value => {
    if (value === 'blur') {
      let list = [...menuList];
      list[index].isOpen = false;
      setMenuList(list);
    } else if (value === 'focus') {
      let list = [...menuList];
      list[index].isOpen = true;
      setMenuList(list);
    }
  };
  return authType === item?.accessableFor || item?.accessableFor === 'both' ? (
    <>
      <View
        style={
          labelType
            ? styles.menuListContainer
            : styles.menuCollectionListContainer
        }>
        {item?.type === 'path' && (
          <>
            <TouchableOpacity
              style={styles.pathContainer}
              onPress={handleLabelOnPress}>
              {item?.icon && (
                <Image source={item?.icon} style={styles.menuIcon} />
              )}
              <Text style={labelType ? styles.labelText : styles.subLabelText}>
                {t(item?.label)}
              </Text>
            </TouchableOpacity>
          </>
        )}
        {item?.type === 'collection' && (
          <TouchableOpacity
            style={styles.collectionLabelContainer}
            onPress={handleLabelOnPress}>
            <View style={styles.pathContainer}>
              {item?.icon && (
                <Image source={item?.icon} style={styles.menuIcon} />
              )}
              <Text style={labelType ? styles.labelText : styles.subLabelText}>
                {t(item?.label)}
              </Text>
            </View>
            <Image
              source={item?.isOpen ? Icons.up : Icons.down}
              style={[styles.rightIcon, css.mr8]}
            />
          </TouchableOpacity>
        )}
        {item?.type === 'dropdown' && (
          <>
            <View style={styles.dropdownContainer}>
              <Image source={item?.icon} style={styles.menuIcon} />
              <Text style={labelType ? styles.labelText : styles.subLabelText}>
                {t(item?.label)}
              </Text>
            </View>
            <Dropdown
              data={item?.dropdownList}
              labelField="label"
              valueField="value"
              maxHeight={200}
              value={item.selected.value}
              onChange={value => handleLabelOnPress(value)}
              renderLeftIcon={() =>
                item.selected?.icon ? (
                  <Image
                    source={item.selected?.icon}
                    style={[styles.leftIcon, css.mr8]}
                  />
                ) : null
              }
              renderItem={value => {
                return (
                  <View
                    style={[
                      styles.dropdownItemStyle,
                      item.selected?.icon && styles.wid70,
                    ]}>
                    {value?.icon && (
                      <Image
                        source={value.icon}
                        style={[styles.leftIcon, css.mr8]}
                      />
                    )}
                    <Text style={styles.dropdownText}>{value.value}</Text>
                  </View>
                );
              }}
              renderRightIcon={() => (
                <Image
                  source={item?.isOpen ? Icons.up : Icons.down}
                  style={[styles.rightIcon, css.mr8]}
                />
              )}
              onFocus={() => {
                handleDropdownOpen('focus');
              }}
              onBlur={() => {
                handleDropdownOpen('blur');
              }}
              style={[
                styles.dropdownStyle,
                item.selected?.icon && styles.wid70,
              ]}
              selectedTextStyle={styles.dropdownText}
            />
          </>
        )}
      </View>
      {item?.collection &&
        item?.isOpen &&
        item?.collection?.map((value, valueIndex) =>
          HeaderMenuComponent({
            authType: authType,
            menuList: menuList,
            setMenuList: setMenuList,
            navigation: navigation,
            setmodalvisible: setmodalvisible,
            t: t,
            item: value,
            index: valueIndex,
            labelType: false,
          }),
        )}
      {item?.collection && item?.isOpen && <View style={css.pb10} />}
    </>
  ) : (
    <></>
  );
};

const customStyles = () =>
  StyleSheet.create({
    menuListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      height: normalize(36),
    },
    menuCollectionListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      height: normalize(20),
    },
    pathContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
    },
    dropdownContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    collectionLabelContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    menuIcon: {
      height: normalize(16),
      width: normalize(16),
      resizeMode: 'contain',
      marginRight: normalize(10),
    },
    labelText: {
      fontSize: normalize(12),
      color: Colors.txtblack,
      fontFamily: Fonts.Roboto_Bold,
    },
    subLabelText: {
      fontSize: normalize(10),
      color: Colors.steperGray,
      fontFamily: Fonts.Roboto_Bold,
      marginLeft: normalize(36),
    },
    dropdownItemStyle: {
      backgroundColor: Colors.bgGray,
      height: normalize(20),
      borderRadius: normalize(6),
      width: normalize(60),
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: normalize(8),
    },
    dropdownStyle: {
      backgroundColor: Colors.bgGray,
      height: normalize(20),
      borderRadius: normalize(6),
      width: normalize(60),
      paddingLeft: normalize(8),
    },
    leftIcon: {
      width: normalize(14),
      height: normalize(14),
      resizeMode: 'contain',
      borderRadius: normalize(12),
    },
    rightIcon: {
      width: normalize(8),
      height: normalize(8),
      resizeMode: 'contain',
      borderRadius: normalize(12),
    },
    wid70: {
      width: normalize(84),
    },
    dropdownText: {
      fontSize: normalize(10),
      fontFamily: Fonts.Roboto_Bold,
      color: '#310040',
    },
  });

export default HeaderMenuComponent;
