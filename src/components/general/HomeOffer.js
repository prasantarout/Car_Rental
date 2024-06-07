import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  FlatList,
  ImageBackground,
} from 'react-native';
import normalize from '../../utils/helpers/dimen';
import PropTypes from 'prop-types';
import {Icons, Colors, Fonts} from '../../themes/Theme';

export default function HomeOffer(props) {
  function onPress(item) {
    if (props.onPress) {
      props.onPress(item);
    }
  }

  function renderItem({item, index}) {
    return (
      <View
        style={{
          width: '48%',
          backgroundColor: '#F6F6F6',
          height: normalize(214),
          borderRadius: normalize(10),
          paddingHorizontal: normalize(6),
          paddingTop: normalize(6),
          // paddingBottom: normalize(6),
          marginBottom: normalize(15),
        }}>
        <View
          style={{
            width: '100%',
            height: normalize(95),
            backgroundColor: Colors.white,
            borderRadius: normalize(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: normalize(8),
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              {item?.offer && (
                <ImageBackground
                  style={{
                    width: normalize(50),
                    height: normalize(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginLeft: -normalize(2),
                  }}
                  source={Icons.offericon}
                  resizeMode="stretch">
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: Fonts.Roboto_Medium,
                      fontSize: normalize(9),
                      marginRight: normalize(5),
                    }}>
                    {item?.offer + ' Off'}
                  </Text>
                </ImageBackground>
              )}
            </View>
            <View
              style={{
                backgroundColor: Colors.lightgreen,
                paddingHorizontal: normalize(8),
                paddingVertical: normalize(3),
                borderRadius: normalize(50),
                marginRight: normalize(6),
              }}>
              <Text
                style={{
                  color: Colors.green,
                  fontFamily: Fonts.Roboto_Medium,
                  fontSize: normalize(9),
                }}>
                Available
              </Text>
            </View>
          </View>
          <Image
            source={item?.icon}
            style={{
              width: normalize(90),
              height: normalize(65),
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: normalize(2),
            }}
          />
          <Text
            style={{
              color: Colors.txtblack,
              fontSize: normalize(10.5),
              fontFamily: Fonts.Roboto_Bold,
              marginTop: normalize(10),
            }}>
            {item?.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(8),
              alignItems: 'center',
            }}>
            <Image
              source={Icons.insurance}
              style={{
                width: normalize(12),
                height: normalize(12),
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: Colors.txtcolor,
                fontFamily: Fonts.Roboto_Regular,
                fontSize: normalize(10),
                marginLeft: normalize(3),
              }}>
              {'Insurance Included'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(8),
              alignItems: 'center',
            }}>
            <Image
              source={Icons.milage}
              style={{
                width: normalize(12),
                height: normalize(12),
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: Colors.txtcolor,
                fontFamily: Fonts.Roboto_Regular,
                fontSize: normalize(10),
                marginLeft: normalize(3),
              }}>
              {item?.milage}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: normalize(15),
            }}>
            <Text
              style={{
                color: Colors.txtblack,
                fontFamily: Fonts.Roboto_Bold,
                fontSize: normalize(13),
              }}>
              {'£' + item?.price + '/ '}
              <Text
                style={{
                  fontSize: normalize(9),
                }}>
                Day
              </Text>
            </Text>
            <TouchableOpacity
              onPress={() => onPress(item)}
              style={{
                paddingHorizontal: normalize(12),
                paddingVertical: normalize(4),
                backgroundColor: Colors.pink,
                borderRadius: normalize(6),
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: normalize(10),
                  fontFamily: Fonts.Roboto_Medium,
                }}>
                {props?.buttonLabel}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      {props?.topsection && (
        <View
          style={{
            width: props?.width ? props?.width : '92%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: props?.margintopview,
            alignItems: 'center',
            marginBottom: props?.marginbottomview,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Roboto_Medium,
              fontSize: normalize(15),
              color: '#0B0B0B',
            }}>
            {props?.toplefttxt}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.pink,
                fontSize: normalize(12),
                fontFamily: Fonts.Roboto_Medium,
                textDecorationLine: 'underline',
                textDecorationColor: Colors.pink,
              }}>
              {props?.toprighttxt}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={{
          width: props?.width ? props?.width : '92%',
          alignSelf: 'center',
          marginTop: props?.margintopview,
        }}
        data={props?.data}
        renderItem={renderItem}
        // horizontal={props?.horizontal}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingBottom: props?.flatlistbottom}}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

HomeOffer.propTypes = {
  paddingLeft: PropTypes.number,
  marginTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  data: PropTypes.array,
  topsection: PropTypes.bool,
  toplefttxt: PropTypes.string,
  toprighttxt: PropTypes.string,
  margintopview: PropTypes.number,
  marginbottomview: PropTypes.number,
  onPress: PropTypes.func,
  flatlistbottom: PropTypes.number,
  buttonLabel: PropTypes.string,
};

HomeOffer.defaultProps = {
  horizontal: false,
  data: [],
  topsection: false,
  margintopview: normalize(20),
  flatlistbottom: normalize(40),
  buttonLabel: 'Reserve',
};
