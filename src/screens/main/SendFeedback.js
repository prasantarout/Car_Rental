import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/general/Header';
import SafeView from '../../components/general/SafeView';
import normalize from '../../utils/helpers/dimen';
import Colors from '../../themes/Colors';
import css from '../../themes/Css';
import Fonts from '../../themes/Fonts';
import Icons from '../../themes/Icons';
import CustomButton from '../../components/micro/CustomButton';

function SendFeedback(props) {
  const [search, setsearch] = useState('');
  const Rating = [1, 2, 3, 4, 5];
  const [defaultRating, setDefaultRating] = useState('');
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Send Us Your Feedback'}
        enableNotificationButton
        enableMenuButton
      />

      <SafeView marginHorizontal={normalize(10)}>
        <Text style={style.AllText}>How did we do?</Text>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <View style={[css.row, css.my20]}>
          {Rating.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setDefaultRating(item)}>
                <Image
                  source={
                    item <= defaultRating ? Icons.Fillstar : Icons.emptyStar
                  }
                  style={{
                    height: normalize(25),
                    width: normalize(25),

                    marginLeft: index === 0 ? normalize(0) : normalize(15),
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={style.description}>Describe your feedback</Text>
        <View style={style.InputView}>
          <TextInput
            value={search}
            onChangeText={text => {
              setsearch(text);
            }}
            multiline={true}
            style={style.textInput}
            placeholder="Input"
            placeholderTextColor={'#B1B1B1'}
          />
        </View>
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Send'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            // navigation.navigate('EditProfile');
          }}
        />
      </SafeView>
    </View>
  );
}

export default SendFeedback;
const style = StyleSheet.create({
  InputView: {
    backgroundColor: '#F2F2F2',
    height: normalize(100),
    paddingLeft: normalize(10),
    paddingTop: normalize(10),
    marginTop: normalize(10),
    borderRadius: normalize(8),
  },
  textInput: {
    color: 'black',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
    textAlignVertical: 'top',
  },
  AllText: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
    marginTop: normalize(15),
  },
  description: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginTop: normalize(5),
  },
});
