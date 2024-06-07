import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import css from '../../../themes/Css';
import Txt from '../../../components/micro/Txt';
import Colors from '../../../themes/Colors';
import Icons from '../../../themes/Icons';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';
import SafeView from '../../../components/general/SafeView';
import ChatHeader from './ChatHeader';

const ChatScreen = props => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur. Mi rhonc uscursus sit tincidunt.',
      incoming: true,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur.',
      incoming: false,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur. Mi rhonc uscursus sit tincidunt.',
      incoming: true,
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur.',
      incoming: false,
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur. Mi rhonc uscursus sit tincidunt.',
      incoming: true,
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet consectetur.',
      incoming: false,
    },
    {
      id: 7,
      text: 'Lorem ipsum dolor sit amet consectetur. last',
      incoming: false,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      id: messages.length,
      text: inputText,
      timestamp: new Date().getTime(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderItem = ({item}) => (
    <View style={styles.messagWrapper}>
      {item?.incoming ? (
        <View style={[styles.messageContainer, css.row, css.jcsb]}>
          <View style={[styles.messageBubble, styles.incomingMessage]}>
            <Txt style={styles.messageText}>{item.text}</Txt>
          </View>
          <Txt style={[styles.messageTime]}>{moment().format('hh:mma')}</Txt>
        </View>
      ) : (
        <View style={[styles.messageContainer, css.row, css.jcsb]}>
          <Txt style={[styles.messageTime]}>{moment().format('hh:mma')}</Txt>
          <View style={[styles.messageBubble, styles.outgoingMessage]}>
            <Txt style={styles.messageText}>{item.text}</Txt>
          </View>
        </View>
      )}
    </View>
  );

  const formatMessageTime = timestamp => {
    const messageDate = new Date(timestamp);
    const hours = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const IconButton = ({onPress, icon, style}) => {
    return (
      <TouchableOpacity
        style={[styles.btnIconContainer, style]}
        onPress={onPress}>
        <Image source={icon} style={styles.btnIconStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[css.f1, css.bgWhite]}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}>
      <ChatHeader
        enableLightTheme
        profileImage={Icons.headerIconBack}
        profileName={'craig Saris'}
        status={'Online'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[css.f1, css.w100]}>
        <SafeView>
          <View style={styles.container}>
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingTop: normalize(20),
                paddingBottom: normalize(10),
              }}
            />
          </View>
        </SafeView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type A Message..."
            placeholderTextColor="#7B7B7B"
          />
          <IconButton icon={Icons.attatchment} />
          <IconButton icon={Icons.smile} />
          <IconButton icon={Icons.send} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
    paddingVertical: normalize(10),
    borderRadius: normalize(15),
  },
  messageBubble: {
    padding: normalize(15),
    borderRadius: normalize(15),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgGray,
    height: normalize(45),
    paddingLeft: 10,
    margin: normalize(10),
    borderRadius: normalize(10),
  },
  textInput: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: Colors.black,
  },
  btnIconContainer: {
    height: normalize(30),
    width: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: normalize(7),
    borderRadius: normalize(100),
    marginRight: normalize(8),
  },
  btnIconStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: '#9E4DB6',
  },
  messagWrapper: {
    paddingHorizontal: normalize(15),
  },
  incomingMessage: {
    backgroundColor: '#F6EEF8',
    alignSelf: 'flex-start',
    maxWidth: '70%',
    borderTopLeftRadius: 0,
  },
  outgoingMessage: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-end',
    maxWidth: '70%',
    borderTopRightRadius: 0,
    borderWidth: 1,
    borderColor: '#F6EEF8',
  },
  messageText: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    lineHeight: normalize(15),
  },
  messageTime: {
    color: '#B2B2B2',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
  },
  messagTopHeader: {
    paddingHorizontal: normalize(15),
    marginTop: Platform.OS == 'android' ? normalize(30) : 0,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: normalize(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#222222',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
  },
  userStatus: {
    fontFamily: Fonts.Roboto_Medium,
    marginTop: normalize(4),
    fontSize: normalize(12),
  },
});
