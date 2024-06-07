import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/general/Header';
import {Fonts, Icons, Images} from '../../../themes/Theme';
import TextInputItem from '../../../components/form/TextinputItem';
import normalize from '../../../utils/helpers/dimen';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';

export const ListItem = ({item, onPress}) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.leftContainer}>
      <Image source={item?.profileImage} style={styles.profileImage} />
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
    <View style={styles.messageCountContainer}>
      <View style={styles.messageCount}>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.roundedCircle}>
          <Text style={styles.messageCountText}>{item.messageUnreadCount}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const MessageList = props => {
  const navigation = useNavigation();
  const [search, setsearch] = useState('');

  const userData = [
    {
      id: 1,
      profileImage: Images.user,
      name: 'John Rosensky',
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
    },
    {
      id: 2,
      name: 'Jane Cooper',
      profileImage: Images.user,
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
    },
    {
      id: 3,
      name: 'Craig Saris',
      profileImage: Images.user,
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
    },
    {
      id: 4,
      name: 'Cameron Williamson',
      profileImage: Images.user1,
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
    },
    {
      id: 5,
      name: 'Brooklyn Simmons',
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
      profileImage: Images.user1,
    },
    {
      id: 6,
      name: 'Leslie Alexander',
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
      profileImage: Images.user1,
    },
    {
      id: 7,
      name: 'Jenny Wilson',
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
      profileImage: Images.user1,
    },
    {
      id: 8,
      name: 'Leslie Alexander',
      message: 'Lorem Ipsum is simply dummy...',
      date: '20 jan 2024',
      messageUnreadCount: 3,
      profileImage: Images.user1,
    },
  ];

  const renderItem = ({item}) => {
    return <ListItem item={item} onPress={() => handleItemPress(item)} />;
  };

  const handleItemPress = item => {
    navigation.navigate('ChatScreen', item);
  };

  return (
    <Animated.View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        headerBlackText={'Messages'}
        enableNotificationButton
        enableMenuButton
      />
      <View style={styles.container}>
        <View style={css.w100}>
          <TextInputItem
            borderRadius={normalize(30)}
            isleftimage={true}
            leftimageicon={Icons.search}
            placeholder={'Search '}
            value={search}
            onChangeText={val => setsearch(val)}
            marginTop={0}
            messgaeScreen={true}
          />
        </View>
      </View>
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: normalize(80)}}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: normalize(10),
        }}
      />
    </Animated.View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    paddingVertical: normalize(13),
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E9F2',
    marginHorizontal: normalize(5),
  },
  leftContainer: {
    marginRight: normalize(10),
  },
  rightContainer: {
    flex: 1,
    marginLeft: normalize(5),
  },
  profileImage: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
  },
  name: {
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    color: '#060606',
  },
  message: {
    fontSize: normalize(10),
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
    top: Platform.OS === 'android' ? normalize(2) : normalize(5),
  },
  date: {
    fontSize: normalize(9),
    color: '#949494',
    marginTop: normalize(5),
  },
  messageCountContainer: {
    // top: normalize(5),
  },
  messageCount: {},
  messageCountText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: normalize(8),

    // alignSelf: 'flex-end',
  },
  roundedCircle: {
    height: normalize(12),
    width: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(158, 77, 182, 1)',
    alignSelf: 'flex-end',
    borderRadius: 100,
    marginTop: 10,
  },
});
