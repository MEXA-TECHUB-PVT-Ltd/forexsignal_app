import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import ClipBoard from '../assets/svg/ClipBoard.svg';

import NewSignal from '../assets/svg/NewSignal.svg';

import NewUpdates from '../assets/svg/NewUpdates.svg';

import NewBrokerUpdate from '../assets/svg/NewBrokerUpdate.svg';

import New from '../assets/svg/New.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  borderLineGrey,
  green,
  grey,
  iconGrey,
  lightGrey,
  orange,
  red,
  textBlack,
  textGrey,
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function Notifications({navigation}) {
  const [notifications, setNotifications] = useState(true);

  const data = [
    {
      id: 1,
      type: 'New signal Recieved',
      date: 'Today - 02:00 pm',
      desc: 'Good news! The stock you re following has experienced a significant price increase.',
      status: 'New',
      img: NewSignal,
    },
    {
      id: 2,
      type: 'New Updates',
      date: 'Today - 02:00 pm',
      desc: 'We ve fine-tuned the app for smoother navigation. We ve squashed those pesky bugs',
      status: 'New',
      img: NewUpdates,
    },
    {
      id: 3,
      type: 'Broker’s Updates',
      date: 'Today - 02:00 pm',
      desc: 'We value your commitment to staying up-to-date with your trading activities.',
      status: 'New',
      img: NewBrokerUpdate,
    },

    {
      id: 4,
      type: 'New signal Recieved',
      date: 'Today - 02:00 pm',
      desc: 'Good news! The stock you re following has experienced a significant price increase.',
      status: 'Old',
      img: NewSignal,
    },
    {
      id: 5,
      type: 'New Updates',
      date: 'Today - 02:00 pm',
      desc: 'We ve fine-tuned the app for smoother navigation. We ve squashed those pesky bugs',
      status: 'Old',
      img: NewUpdates,
    },
    {
      id: 6,
      type: 'Broker’s Updates',
      date: 'Today - 02:00 pm',
      desc: 'We value your commitment to staying up-to-date with your trading activities.',
      status: 'Old',
      img: NewBrokerUpdate,
    },

    {
      id: 7,
      type: 'New signal Recieved',
      date: 'Today - 02:00 pm',
      desc: 'Good news! The stock you re following has experienced a significant price increase.',
      status: 'Old',
      img: NewSignal,
    },
    {
      id: 8,
      type: 'New Updates',
      date: 'Today - 02:00 pm',
      desc: 'We ve fine-tuned the app for smoother navigation. We ve squashed those pesky bugs',
      status: 'Old',
      img: NewUpdates,
    },
    {
      id: 9,
      type: 'Broker’s Updates',
      date: 'Today - 02:00 pm',
      desc: 'We value your commitment to staying up-to-date with your trading activities.',
      status: 'Old',
      img: NewBrokerUpdate,
    },
    {
      id: 10,
      type: 'Broker’s Updates',
      date: 'Today - 02:00 pm',
      desc: 'We value your commitment to staying up-to-date with your trading activities.',
      status: 'Old',
      img: NewBrokerUpdate,
    },
  ];

  const renderItems = items => {
    return (
      <View
        style={{
          height: hp(15),
          marginTop: hp(3),
          marginHorizontal: wp(8),
        }}>
        <View style={{height: hp(8), flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <items.img width={45} height={45} />

            <View style={{marginLeft: wp(3)}}>
              <Text
                style={{
                  fontSize: hp(2.3),
                  fontWeight: 'bold',
                  color: textBlack,
                }}>
                {items.type}
              </Text>

              <Text
                style={{
                  fontSize: hp(1.8),
                  marginTop: hp(0.3),
                  fontWeight: '400',
                  color: textGrey,
                }}>
                {items.date}
              </Text>
            </View>
          </View>

          {items.status==='New'?<New width={55} />:null}
        </View>

        <Text
          style={{
            fontSize: hp(1.59),
            marginTop: hp(0.3),
            fontWeight: '400',
            color: textGrey,
          }}>
          {items.desc}
        </Text>

        <View
          style={{
            marginHorizontal: wp(18),
            marginTop: hp(1),
            height: hp(0.1),
            backgroundColor: '#00000017',
          }}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          onPress={() => navigation.goBack()}
          text={'Notifications'}
        />
      </View>
      {notifications == true ? (
        <View style={{flex: 1}}>
            <FlatList
              style={{flexGrow:1}}
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => renderItems(item)}
            />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ClipBoard width={200} height={200} />

          <Text
            style={{
              fontSize: hp(3.2),
              marginTop: hp(3),
              fontWeight: '700',
              color: textBlack,
            }}>
            Empty
          </Text>

          <View style={{marginHorizontal: wp(8)}}>
            <Text
              style={{
                fontSize: hp(2.1),
                marginTop: hp(3),
                textAlign: 'center',
                fontWeight: '300',
                color: textGrey,
              }}>
              You don’t have any notifications at this time
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
