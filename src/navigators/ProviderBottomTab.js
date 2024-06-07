import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import normalize from '../utils/helpers/dimen';
import {calcH} from '../utils/helpers/dimen2';
import {Fonts, Colors, Icons} from '../themes/Theme';
import MessageList from '../screens/user/messages/MessageList';
import css, {width} from '../themes/Css';
import Calender from '../screens/provider/calender/Calender';
import RequestList from '../screens/provider/home';
import Insights from '../screens/provider/insight/Insights';
import MyVehicle from '../screens/provider/myVehicle/MyVehicle';

const Tab = createBottomTabNavigator();

export default function ProviderTabNavigator() {
  const lineAnimatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const moveLine = index => {
    Animated.spring(lineAnimatedValue, {
      toValue: index,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          unmountOnBlur: true,
          showIcon: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.navigatorStyle,
          labelStyle: {
            fontSize: normalize(10),
            fontFamily: Fonts.Roboto_Bold,
          },
        }}>
        {TabNames.map((routeName, index) => (
          <Tab.Screen
            key={index}
            name={routeName}
            component={getComponent(routeName)}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({focused}) => {
                return RenderingItem({
                  navigation: navigation,
                  focused: focused,
                  routeName: routeName,
                  moveLine: moveLine,
                  index: index,
                });
              },
            }}
          />
        ))}
      </Tab.Navigator>
      <Animated.View
        style={[
          {
            bottom: calcH(0.1) - 5,
            left: lineAnimatedValue.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [
                10,
                width / 5,
                (width / 5) * 2,
                (width / 5) * 3,
                (width / 5) * 3.9,
              ],
            }),
          },
          styles.animatedView,
        ]}
      />
    </View>
  );
}

const RenderingItem = ({navigation, focused, routeName, moveLine, index}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
        moveLine(index);
      }}
      style={{
        marginTop: Platform.OS === 'android' ? normalize(10) : normalize(20),
      }}
      key={index}>
      <View style={[css.center]}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.images, {tintColor: focused ? Colors.pink : 'grey'}]}
          source={getIcon(routeName, focused)}
          resizeMode="contain"
        />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={[styles.textTab, {color: focused ? Colors.pink : 'grey'}]}>
          {routeName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TabNames = ['Home', 'My Vehicles', 'Calendar', 'Message', 'Insights'];

function getComponent(routeName) {
  switch (routeName) {
    case 'Home':
      return RequestList;
    case 'My Vehicles':
      return MyVehicle;
    case 'Calendar':
      return Calender;
    case 'Message':
      return MessageList;
    case 'Insights':
      return Insights;
    default:
      return null;
  }
}

function getIcon(routeName) {
  switch (routeName) {
    case 'Home':
      return Icons.home;
    case 'My Vehicles':
      return Icons.car;
    case 'Calendar':
      return Icons.Calender;
    case 'Message':
      return Icons.messages;
    case 'Insights':
      return Icons.insight;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  animatedView: {
    height: 5,
    width: Dimensions.get('window').width / 5,
    backgroundColor: Colors.pink,
    position: 'absolute',
  },
  images: {
    height: normalize(18),
    width: normalize(18),
  },
  textTab: {
    marginTop: 5,

    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(10),
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  navigatorStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: calcH(0.1),
    width: '100%',
    position: 'absolute',
    borderColor: Colors.white,
    borderTopColor: Colors.white,
    paddingHorizontal: normalize(5),
    borderRadius: normalize(10),
    shadowColor: '#B9B9B9',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
