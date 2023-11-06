import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import Feater from 'react-native-vector-icons/Feather';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Headers from '../Custom/Headers';
import {appImages} from '../assets/utilities';

import Happiness from '../assets/svg/Happiness.svg';

import Send from '../assets/svg/Send.svg';

import {GiftedChat, Bubble, Day} from 'react-native-gifted-chat';

import LogOut from '../assets/svg/LogOut.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {greyBold, orange, textBlack, textGrey, white} from '../assets/Colors';

export default function Chat({navigation}) {
  const [messages, setMessages] = useState([]);

  const [commentText, setCommentText] = useState(null); // State variable to hold the text

  const clearTextInput = () => {
    console.log('came to logssssss', commentText);
    // Clear the text in the TextInput
    setCommentText(null);
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Realy? can I get it too?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'Hey mar, I just got a great fried noodle recipe from my mother!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
        },
      },
      {
        _id: 3,
        text: 'Dont forget to split it for me when its ripe ! haha',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 4,
        text: 'Of course dude!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
        },
      },
      // Add more messages here...
    ]);
  }, []);

  const renderDay = props => {
    return (
      <Day
        {...props}
        textStyle={{
          fontFamily: 'Inter-Bold',
          fontSize: 16,
          color: 'gray', // Customize the color of the date separator
        }}
      />
    );
  };

  // Define a function to render custom message bubbles
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: white, // Customize the color for left messages
            borderWidth:1,
            borderColor:'#00000017'
          },
          right: {
            backgroundColor: orange, // Customize the color for right messages
            borderWidth:1,
            borderColor:'#00000017'
          },
        }}
      />
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const CustomInputToolbar = () => {
    return null; // This will remove the input message box
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          onPress={() => navigation.goBack()}
          showLogo={true}
        />
      </View>

      <View style={{flex: 1}}>
        <GiftedChat
          messagesContainerStyle={{paddingBottom: 30}}
          messages={messages}
          //onSend={messages => onSend(messages)}
          user={{
            // _id: user_id,
            _id: 1,
          }}
          // renderAvatar={props => {
          //   return null;
          // }}
          renderAvatar={null}
          renderBubble={renderBubble} // Set the custom renderBubble function
          renderDay={null}
          /* renderBubble={props => {
            return <CustomBubble {...props} />;
          }} */
          //alwaysShowSend
          /*  onInputTextChanged={text => {
            console.log('text : ', text);
          }} */
          // renderChatEmpty={() => (
          //   <View
          //     style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          //     {loading ? null : (
          //       <Text
          //         style={{
          //           color: 'gray',
          //           fontSize: 14,
          //           transform: [{scaleY: -1}],
          //         }}>
          //         No Record Found
          //       </Text>
          //     )}
          //   </View>
          // )}
          //disableComposer={false}
          renderInputToolbar={CustomInputToolbar} // This will remove the input message box
        />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            height: hp(21),
          }}>
          {/* ... (previous code) */}
        </View>
      </View>

      <View style={{flexDirection:'row',height:hp(8), paddingHorizontal:wp(5), alignItems:'center'}}>
        <View style={{ flex:1, borderRadius:wp(5), alignItems:'center', flexDirection:'row', borderWidth:1, borderColor:'#00000017'}}>
         <Happiness style={{marginLeft:wp(3)}} width={20} height={20}/>

         <TextInput placeholder='Type a message' style={{flex:1, marginLeft:wp(8)}}/>
        </View>
         <TouchableOpacity style={{marginLeft:wp(3)}} onPress={()=>navigation.navigate("Chat")}>

        <Send width={48} height={48}/>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
