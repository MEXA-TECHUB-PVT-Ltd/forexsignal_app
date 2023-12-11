import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import ClipBoard from '../assets/svg/ClipBoard.svg';

import NewSignal from '../assets/svg/NewSignal.svg';

import NewUpdates from '../assets/svg/NewUpdates.svg';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
import {baseUrl} from '../assets/utilities/BaseUrl';

export default function Notifications({navigation}) {
  
  const [notifications, setNotifications] = useState(true);

  const [userId, setUserId] = useState('');

  const [loading, setLoading] = useState(null);

  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getUserID();
    //await getNotifications();
    // Fetch data one by one
    // Once all data is fetched, set loading to false
    setLoading(false);
  };

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('userId');
      if (result !== null) {
        console.log('user id retrieved:', result);
        setUserId(result);
        await getNotifications(result);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const getNotifications = async result => {
    const apiUrl = `${baseUrl}/notifications/get_notification_byuserID/${result}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setLoading(false);

      if (data.error === false) {
        console.log('Notification Data', data.data);

        // Convert date strings to JavaScript Date objects
        const parsedData = data.data.map(item => ({
          ...item,
          date: new Date(item.date),
        }));

        // Sort the notification data array based on date and time
        const sortedData = parsedData.sort((a, b) => b.date - a.date); // Sort in descending order

        if (sortedData.length === 0) {
          setNotifications(false);
        } else {
          setNotifications(true);
          setNotificationData(sortedData);
        }
      }
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

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
    const dateObject = new Date(items.date);

    // Extract the date in the format YYYY-MM-DD
    const formattedDate = dateObject.toISOString().split('T')[0];
    return (
      <TouchableOpacity
        onPress={() => getSignalDetails(items?.signal_id)}
        style={{
          height: hp(15),
          marginTop: hp(3),
          marginHorizontal: wp(8),
        }}>
        <View style={{height: hp(8), flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            {items?.notification_body === 'Signal Updated Successfully' ? (
              <NewUpdates width={45} />
            ) : (
              <NewSignal width={45} />
            )}

            <View style={{marginLeft: wp(3)}}>
              <Text
                style={{
                  fontSize: hp(2.3),
                  fontWeight: 'bold',
                  color: textBlack,
                }}>
                {items?.notification_body === 'Signal Updated Successfully'
                  ? 'New Updates'
                  : 'New Signal Received'}
              </Text>

              <Text
                style={{
                  fontSize: hp(1.8),
                  marginTop: hp(0.3),
                  fontWeight: '400',
                  color: textGrey,
                }}>
                {formattedDate}
              </Text>
            </View>
          </View>
          {items.signal_status === 'New' ? <New width={55} /> : null}
        </View>

        <Text
          style={{
            fontSize: hp(1.59),
            marginTop: hp(0.3),
            // marginLeft:wp(3),
            fontWeight: '400',
            color: textGrey,
          }}>
          {items.notification_body}
        </Text>

        <View
          style={{
            marginHorizontal: wp(18),
            marginTop: hp(1),
            height: hp(0.1),
            backgroundColor: '#00000017',
          }}></View>
      </TouchableOpacity>
    );
  };

  const getSignalDetails = async result => {
    setLoading(true);

    try {
      const apiUrl = `${baseUrl}/signal/getsignalbyID/${result}`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('All Signals', data.data);
      setLoading(false);

      navigation.navigate('SignalDetails', {signalDetails: data.data});
      // Handle the response data as needed
      //console.log('Response data:', data);

      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      setLoading(false);
      console.error('Error during API request:', error);
    }
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
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={notificationData}
            keyExtractor={item => item.notification_id.toString()}
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

      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#FACA4E" />
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
