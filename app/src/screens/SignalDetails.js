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
import React, {useState, useRef, useEffect} from 'react';

import FastImage from 'react-native-fast-image';

import Copy from '../assets/svg/Copy.svg';
import ClipBoard from '../assets/svg/ClipBoard.svg';

import NewSignal from '../assets/svg/NewSignal.svg';

import NewUpdates from '../assets/svg/NewUpdates.svg';

import Buy from '../assets/svg/Buy.svg';

import Sell from '../assets/svg/Sell.svg';

import NewBrokerUpdate from '../assets/svg/NewBrokerUpdate.svg';

import New from '../assets/svg/New.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import CustomSnackbar from '../Custom/CustomSnackBar';
import Bars from '../assets/svg/Bars.svg';
import {CandlestickChart} from 'react-native-wagmi-charts';

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
import Clipboard from '@react-native-clipboard/clipboard';

import Lightbox from 'react-native-lightbox';
import HapticFeedback from 'react-native-haptic-feedback';
import SignInBtn from '../assets/svg/SignIn';
import CreateBtn from '../assets/svg/CreateAccount';
import Cancel from '../assets/svg/Cancel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RBSheet from 'react-native-raw-bottom-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function SignalDetails({navigation, route}) {
  const [loading, setLoading] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [chartData, setChartData] = useState(null);


  const [convertedDate, setConvertedDate] = useState('');

  const [convertedTime, setConvertedTime] = useState('');

  const [convertedUpdateDate, setUpdateConvertedDate] = useState('');

  const [convertedUpdateTime, setConvertedUpdateTime] = useState('');

  const [userId, setUserId] = useState('');

  const [showHeartFilled, setShowHeartFilled] = useState(false);

  const [snackbarVisibleCopied, setSnackbarVisibleCopied] = useState(false);

  const [waitingVisible, setWaitingVisible] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const receivedData = route.params?.signalDetails;

  console.log('Recieved Data:', receivedData);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');

    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getUserID();

    await covertTimeAndDate(receivedData?.date);
    // Fetch data one by one
    // Once all data is fetched, set loading to false
    setLoading(false);
  };

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('userId');
      if (result !== null) {
        setUserId(result);

        await checkWishList(result);
        console.log('user id retrieved:', result);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const checkWishList = async id => {
    console.log(' Check Wish List User Id', id);
    console.log(' Check Wish List Signal Id', receivedData?.signal_id);

    const apiUrl = 'https://forexs-be.mtechub.com/wishlist/check_save_item';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          signal_id: receivedData?.signal_id,
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data);

      if (data.save_status === true) {
        setShowHeartFilled(true);
      } else {
        setShowHeartFilled(false);
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
    }
  };

  const covertTimeAndDate = async data => {
    const originalDateString = data;
    const originalDate = new Date(originalDateString);

    // Format the date in a readable way
    const formattedDateValue = originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Format the time in a readable way
    const formattedTimeValue = originalDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    console.log('Formatted Date', formattedDateValue);
    console.log('Formatted Time', formattedTimeValue);

    // Save formatted date and time in states
    setConvertedDate(formattedDateValue);
    setConvertedTime(formattedTimeValue);
    setChartData( [
      {
        timestamp: new Date(receivedData?.date).getTime(),
        open: parseFloat(receivedData?.take_profit[0]?.open_price),
        high: parseFloat(receivedData?.price+ '123'),
        low: parseFloat(receivedData?.price),
        close: parseFloat(receivedData?.stop_loss),
      }])
      console.log("Time Stamp",new Date(receivedData.date).getTime());
      console.log("Open",parseFloat(receivedData?.take_profit[0]?.open_price))
      console.log("High",receivedData?.price)
      console.log("Low",receivedData?.stop_loss)
      console.log("Close",parseFloat(receivedData?.trade_probability))
      covertUpdateTimeAndDate(receivedData?.updated_at)

  };

  const covertUpdateTimeAndDate = async data => {
    const originalDateString = data;
    const originalDate = new Date(originalDateString);

    // Format the date in a readable way
    const formattedDateValue = originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Format the time in a readable way
    const formattedTimeValue = originalDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    console.log('Formatted Date', formattedDateValue);
    console.log('Formatted Time', formattedTimeValue);

    // Save formatted date and time in states
    setUpdateConvertedDate(formattedDateValue);
    setConvertedUpdateTime(formattedTimeValue);
    
  };
  const copyToClipboard = value => {
    const jsonString = JSON.stringify(value, null, 2); // Convert the JSON data to a formatted string
    Clipboard.setString(jsonString);
    console.log('JSON data copied to clipboard:', jsonString);
  };

  const data = [
    {
      timestamp: 1625945400000,
      open: 33575.25,
      high: 33600.52,
      low: 33475.12,
      close: 33520.11,
    },
    {
      timestamp: 1625946300000,
      open: 33545.25,
      high: 33560.52,
      low: 33510.12,
      close: 33520.11,
    },
    {
      timestamp: 1625947200000,
      open: 33510.25,
      high: 33515.52,
      low: 33250.12,
      close: 33250.11,
    },
    {
      timestamp: 1625948100000,
      open: 33215.25,
      high: 33430.52,
      low: 33215.12,
      close: 33420.11,
    },
  ];


  const datas = [
    {
      timestamp: new Date(receivedData.date).getTime(),
      open: parseFloat(receivedData?.take_profit[0]?.open_price),
      high: parseFloat(receivedData?.price) ,
      low:  parseFloat(receivedData?.stop_loss),
      close: parseFloat(receivedData?.trade_probability ) ,
    },
     /* {
      timestamp: new Date(receivedData.date).getTime(),
      open: parseFloat(receivedData?.take_profit[0]?.open_price+ + 112),
      high: parseFloat(receivedData?.stop_loss+ + 125),
      low:  parseFloat(receivedData?.price+ + 115),
      close: parseFloat(receivedData?.trade_probability+ + 1101),
    }  */
  ];

  const datasWithAddedValue = datas.map(data => ({
    ...data,
    open: parseFloat(data.open) + 33545.25,
  high: parseFloat(data.high) + 33545.25,
  low: parseFloat(data.low) + 33545.25,
  close: parseFloat(data.close) + 33545.25
  }));

  console.log('Updated datas:', datasWithAddedValue);



  const openLightbox = () => {
    setIsLightboxOpen(true);
    //setWaitingVisible(false)
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setWaitingVisible(!waitingVisible);
  };

  const ref_RBSheet = useRef(null);

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePasswordSignIn = async () => {
    ref_RBSheet.current.close();

    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    //setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      //setSnackbarVisible(false);
      navigation.navigate('SignIn');
    }, 5);
  };

  const handleUpdatePasswordSignUp = async () => {
    ref_RBSheet.current.close();

    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    //setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      //setSnackbarVisible(false);
      navigation.navigate('SignUp');
    }, 10);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    //setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      //setSnackbarVisible(false);

      if (userId !== '') {
        setShowHeartFilled(!showHeartFilled);

        console.log('Empty', showHeartFilled);

        if (showHeartFilled == false) {
          createWishList();
        } else {
          removeWishList();
        }
      } else {
        ref_RBSheet.current.open();
      }
    }, 50);
  };

  const checkCopy = value => {
    if (userId !== '') {
      handleUpdateCopied(value);
    } else {
      ref_RBSheet.current.open();
    }
  };

  const createWishList = async () => {
    console.log('Create Wish List Called');

    setLoading(true);

    const apiUrl = `https://forexs-be.mtechub.com/wishlist/createwishlist`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          signal_id: receivedData?.signal_id,
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.signal);

      //console.log('Email:', email);
      setLoading(false);

      if (data.msg === `Signal added to user's wishlist successfully`) {
        console.log('Data =email', data.signal);
        //console.log('Data =id', data.user.id);

        setLoading(false);

        //handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  const renderTakeProfit = (item, index) => {
    console.log('Item Profit', item.open_price  ) + 33575.25;
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(5),
          marginHorizontal: wp(8),
          height: hp(5),
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(2.1),
            fontWeight: '300',
            color: textGrey,
          }}>
          Take profit {index + 1}
        </Text>

        <Text
          style={{
            fontSize: hp(2.1),
            fontWeight: '400',
            color: textBlack,
          }}>
          {item?.take_profit}
        </Text>
      </View>
    );
  };

  const removeWishList = async () => {
    console.log('Remove Wish List Called');

    setLoading(true);

    const apiUrl = `https://forexs-be.mtechub.com/wishlist/deletewishlist/signal_id/${receivedData?.signal_id}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // No need to include a body for a DELETE request
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      setLoading(false);

      if (data.msg === `Signal removed from the wishlist successfully`) {
        console.log('Data =email', data.msg);
        //console.log('Data =id', data.user.id);

        setLoading(false);

        // handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  const dismissSnackbarCopied = () => {
    setSnackbarVisibleCopied(true);
  };

  const waitingChange = () => {
    setWaitingVisible(!waitingVisible);
  };

  const handleUpdateCopied = async value => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisibleCopied(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisibleCopied(false);
      copyToClipboard(value);
    }, 3000);
  };

  function invokeHaptic() {
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };

    HapticFeedback.trigger('impactLight', options);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          showHeart={true}
          isFavorite={showHeartFilled}
          onPressfavourite={() => handleUpdatePassword()}
          onPress={() => navigation.goBack()}
          text={'Signal Details'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1}}>
        <View
          style={{
            marginTop: hp(3),
            justifyContent: 'space-around',
            paddingHorizontal: wp(3),
            marginHorizontal: wp(8),
            height: hp(12),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(3),
              height: hp(5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: hp(3),
                width: wp(35),
              }}>
              <Text
                style={{
                  fontSize: hp(2.1),
                  fontWeight: '500',
                  color: textBlack,
                }}>
                {/* NZD/USD */}
                {receivedData?.title}
              </Text>
              {/* {
                item.status==='Buy'?
                <Buy width={50} height={50} />:
                <Sell width={50} height={50} />
            } */}
            </View>

            <Text style={{fontSize: hp(2.1), fontWeight: '500', color: orange}}>
              {/* $113.22 */}${receivedData?.price}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(3),
              height: hp(5),
            }}>
            <Text
              style={{fontSize: hp(1.7), fontWeight: '500', color: lightGrey}}>
              {/*  27-oct-2023, 08:00 AM */}
              {convertedDate}
            </Text>

            <TouchableOpacity onPress={() => checkCopy(receivedData)}>
              <Copy width={60} height={80} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: hp(30),
            marginTop: hp(3),
            marginHorizontal: wp(8),
          }}>
          {/* <Bars width={300} height={230} /> */}

          <CandlestickChart.Provider data={datasWithAddedValue}>
            <CandlestickChart width={wp(80)} height={hp(30)}>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair onCurrentXChange={invokeHaptic}>
                <CandlestickChart.Tooltip />
              </CandlestickChart.Crosshair>
            </CandlestickChart>
          </CandlestickChart.Provider>
        </View>

        <Text
          style={{
            fontSize: hp(2.8),
            marginLeft: wp(8),
            marginTop: hp(8),
            fontWeight: 'bold',
            color: orange,
          }}>
          Trade Info
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(3),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Action
          </Text>

          {receivedData?.action === 'SELL' ? (
            <Sell width={65} />
          ) : (
            <Buy width={65} />
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Status
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.signal_status}
          </Text>
        </View>

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Open price
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData.price}
            {/* {receivedData?.signal_status?.take_profit[0]?.open_price} */}
          </Text>
        </View>

        <FlatList
          style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          data={receivedData?.take_profit}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => renderTakeProfit(item, index)}

          //keyExtractor={item => item.signal_id.toString()}
        />

        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 1
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.take_profit[0]?.take_profit}
          </Text>
        </View> */}
        {/* 
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 2
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.take_profit[1]?.take_profit}
          </Text>
        </View> */}
        {/* 
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 3
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
             {receivedData?.take_profit[1]?.take_profit}
          </Text>
        </View> */}

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Stop loss
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.stop_loss}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Profit/Loss
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.result === false ? 'Waiting' : 'Profit'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Trade Result
          </Text>

          <TouchableOpacity onPress={() => openLightbox()}>
            {receivedData?.result === true ? (
              <EvilIcons name={'image'} size={50} color={orange} />
            ) : (
              <Text
                style={{
                  fontSize: hp(2.1),
                  fontWeight: '400',
                  color: textBlack,
                }}>
                Waiting
              </Text>
            )}
          </TouchableOpacity>

          {/* <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            Waiting
          </Text> */}
        </View>

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Trade Probability
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.trade_probability}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Time Frame
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {receivedData?.time_frame}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Last Update
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            {convertedUpdateDate}
          </Text>
        </View>
      </ScrollView>

      <RBSheet
        ref={ref_RBSheet}
        height={250}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            // justifyContent: 'center',
            // alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingTop: 0,
            padding: 20,
            zIndex: 999,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: hp(5),
            }}>
            <Text
              style={{
                fontSize: hp(2.5),
                fontWeight: 'bold',
                color: orange,
              }}>
              Create Account
            </Text>
          </View>
          <Text
            style={{
              fontSize: hp(2.3),
              marginTop: hp(1),
              fontWeight: '300',
              textAlign: 'center',
              color: textBlack,
            }}>
            Please create an account to do further actions
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: hp(8),
            justifyContent: 'space-between',
            marginHorizontal: wp(5),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => handleUpdatePasswordSignIn()}>
            <SignInBtn width={130} height={130} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleUpdatePasswordSignUp()}>
            <CreateBtn width={130} height={130} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => ref_RBSheet.current.close()}
          style={{marginHorizontal: wp(5)}}>
          <Cancel width={290} />
        </TouchableOpacity>
      </RBSheet>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Signal Added To WishList'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Signal Copied SuccessFully'}
        onDismiss={dismissSnackbarCopied} // Make sure this function is defined
        visible={snackbarVisibleCopied}
      />

      {isLightboxOpen && (
        <Lightbox
          onClose={closeLightbox}
          backgroundColor={lightGrey}
          style={styles.lightboxContainer}>
          <FastImage
            resizeMode="contain"
            style={{height: 400, width: 400}}
            source={{
              uri: `https://forexs-be.mtechub.com/${receivedData?.image}`,
              priority: FastImage.priority.high,
            }}
          />
        </Lightbox>
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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightboxContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the background color and opacity as needed
  },
});
