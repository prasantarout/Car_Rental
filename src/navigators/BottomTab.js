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
import My_Rides_Screen from '../screens/user/myRides/My_Rides_Screen';
import Rental_Car_Screen from '../screens/user/RentCar/Rental_Car_Screen';
import Home from '../screens/user/home/Home';
import normalize from '../utils/helpers/dimen';
import {calcH} from '../utils/helpers/dimen2';
import {Fonts, Colors, Icons} from '../themes/Theme';
import MessageList from '../screens/user/messages/MessageList';
import css, {width} from '../themes/Css';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const lineAnimatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const moveLine = index => {
    Animated.spring(lineAnimatedValue, {
      toValue: index,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20),
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          unmountOnBlur: true,
          showIcon: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
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
          },
          labelStyle: {
            fontSize: normalize(10),
            fontFamily: Fonts.Roboto_Bold,
          },
        }}>
        {['Home', 'Rent a car', 'Message', 'My rides'].map(
          (routeName, index) => (
            <Tab.Screen
              key={routeName}
              name={routeName}
              component={getComponent(routeName)}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({focused}) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(routeName);
                      moveLine(index);
                    }}
                    style={{
                      marginTop:
                        Platform.OS == 'android'
                          ? normalize(10)
                          : normalize(20),
                    }}>
                    <View style={[css.center]}>
                      <Image
                        style={{
                          height: normalize(18),
                          width: normalize(18),
                          tintColor: focused ? Colors.pink : 'grey',
                        }}
                        source={getIcon(routeName, focused)}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          marginTop: 5,
                          color: focused ? Colors.pink : 'grey',
                          fontFamily: Fonts.Roboto_Medium,
                          fontSize: normalize(10),
                        }}>
                        {routeName}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ),
              }}
            />
          ),
        )}
      </Tab.Navigator>
      <Animated.View
        style={[
          {
            bottom: calcH(0.1) - 5,
            left: lineAnimatedValue.interpolate({
              inputRange: [0, 1, 2, 3],
              outputRange: [6, width / 4, (width / 4) * 2, (width / 4) * 2.9],
            }),
          },
          styles.animatedView,
        ]}
      />
    </View>
  );
}

function getComponent(routeName) {
  switch (routeName) {
    case 'Home':
      return Home;
    case 'Rent a car':
      return Rental_Car_Screen;
    case 'Message':
      return MessageList;
    case 'My rides':
      return My_Rides_Screen;
    default:
      return null;
  }
}

function getIcon(routeName, focused) {
  switch (routeName) {
    case 'Home':
      return focused ? Icons.home : Icons.home;
    case 'Rent a car':
      return focused ? Icons.car : Icons.car;
    case 'Message':
      return focused ? Icons.messages : Icons.messages;
    case 'My rides':
      return Icons.rides;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  animatedView: {
    height: 5,
    width: Dimensions.get('window').width / 4,
    backgroundColor: Colors.pink,
    position: 'absolute',
  },
});
