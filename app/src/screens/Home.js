import {
  StyleSheet,
  StatusBar,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';

import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  green,
  grey,
  lightGrey,
  orange,
  red,
  textBlack,
  white,
} from '../assets/Colors';
import CustomSnackbar from '../Custom/CustomSnackBar';

import SignInBtn from '../assets/svg/SignIn';
import CreateBtn from '../assets/svg/CreateAccount';
import Cancel from '../assets/svg/Cancel';

import RBSheet from 'react-native-raw-bottom-sheet';

export default function Home({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const [allSignals, setAllSignals] = useState(null);

  const [userId, setUserId] = useState('');

  const ref_RBSheet = useRef(null);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getUserID();

    await getAllSignals(1, 10);
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
        console.log('user id retrieved:', result);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const getAllSignals = async (page = 1, limit = 10) => {
    try {
      const apiUrl = `https://forexs-be.mtechub.com/signal/getallsignals?page=${page}&limit=${limit}`;

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('All Signals', data.data);
      setAllSignals(data.data);

      // Handle the response data as needed
      //console.log('Response data:', data);

      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
  };

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePasswordShow = async () => {
    ref_RBSheet.current.close();

    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      // navigation.navigate("SignIn")
    }, 3000);
  };

  const handleUpdatePassword = async () => {
    ref_RBSheet.current.close();

    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    //setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      //setSnackbarVisible(false);
      navigation.navigate('SignIn');
    }, 10);
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
      navigation.navigate('SignIn');
    }, 10);
  };

  const handleUpdatePasswordCancel = async () => {
    ref_RBSheet.current.close();

    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      //navigation.navigate("SignIn")
    }, 3000);
  };

  const data = [
    {
      id: 1,
      currency: 'NZD/USD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Buy',
      showAlert: true,
    },
    {
      id: 2,
      currency: 'EUR/USD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: false,
    },
    {
      id: 3,
      currency: 'CAD/CHF',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: true,
    },
    {
      id: 4,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Buy',
      showAlert: false,
    },
    {
      id: 5,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: true,
    },
    {
      id: 6,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: false,
    },
    {
      id: 8,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: false,
    },
    {
      id: 9,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: true,
    },
    {
      id: 10,
      currency: 'GBP/CAD',
      buy: Buy,
      sell: Sell,
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert: false,
    },
  ];

  const showAlerts = () => {
    console.log("Id", userId)
    if (userId !== '') {
      handleUpdatePasswordShow()
    } else {
      ref_RBSheet.current.open();
    }
  };

  const renderItems = item => {
    console.log('REnder Items Called', item.price);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SignalDetails', {signalDetails: item})
        }
        style={{
          marginTop: hp(3),
          justifyContent: 'space-around',
          borderWidth: 1,
          paddingHorizontal: wp(3),
          marginHorizontal: wp(8),
          borderRadius: wp(5),
          height: hp(15),
          borderColor: '#00000017',
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
              style={{fontSize: hp(2.1), fontWeight: '500', color: textBlack}}>
              {item.title}
            </Text>
            {item.action === 'SELL' ? (
              <Sell width={50} height={50} />
            ) : (
              <Buy width={50} height={50} />
            )}
          </View>

          <Text style={{fontSize: hp(2.1), fontWeight: '500', color: orange}}>
            {item.price}
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
            {item.date}
          </Text>
          <TouchableOpacity
            onPress={() => showAlerts()
              /*  item.showAlert === true
                ? handleUpdatePasswordShow()
                : ref_RBSheet.current.open() */
            }>
            <Copy width={60} height={80} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(3),
            borderTopColor: '#00000017',
            borderTopWidth: 0.3,
            height: hp(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(3),
              width: wp(23),
            }}>
            <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
              Profit
            </Text>

            <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: green}}>
              {item.profit_loss}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(3),
              width: wp(28),
            }}>
            <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
              Stop loss
            </Text>

            <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: red}}>
              {item.stop_loss}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={styles.absoluteContainer}>
        <View
          style={{
            height: hp(5),
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: wp(8),
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: hp(2.5), fontWeight: '500', color: white}}>
            Forex Artium
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp(20),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchScreen')}>
              <Search width={25} height={25} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <Notification width={25} height={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{height: hp(21), overflow: 'hidden'}}>
        <Image style={{resizeMode: 'contain'}} source={appImages.homeTopBar} />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          data={allSignals}
          //keyExtractor={item => item.signal_id.toString()}
          renderItem={({item}) => renderItems(item)}
        />
      </View>

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
            Please create an account to add this trade to your Wishlist
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
          <TouchableOpacity onPress={() => handleUpdatePassword()}>
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
        messageDescription={'Signal Copied Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
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
  },
  absoluteContainer: {
    position: 'absolute',
    top: 80,
    justifyContent: 'center',
    width: '100%',
    height: hp(8),
    zIndex: 1, // Set a higher zIndex for the absolute view to appear on top
  },
});
