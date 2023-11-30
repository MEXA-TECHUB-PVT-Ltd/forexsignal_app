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
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import Fontiso from 'react-native-vector-icons/Fontisto';

import Happiness from '../assets/svg/Happiness.svg';

import Send from '../assets/svg/Send.svg';

import LogOut from '../assets/svg/LogOut.svg';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  greyBold,
  lightGrey,
  orange,
  textBlack,
  grey,
  green,
  red,
  textGrey,
  white,
} from '../assets/Colors';

export default function MyWishList({navigation}) {
  const [loading, setLoading] = useState(false);

  const [allSignals, setAllSignals] = useState(null);

  const [userId, setUserId] = useState('');

  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);

  const forceUpdate = () => setForceUpdateFlag((prev) => !prev);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, [forceUpdateFlag]);
  
  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);
  
    // Wait for getUserID to complete before calling getAllSignals
    await getUserID();
    
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
        await getAllSignals(result);
      }else{
        setAllSignals([])
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };
  
  const getAllSignals = async (id) => {

    if(id!==''){

      console.log("User Id of signals", userId)
    }else{
      console.log("Empty signals", userId)

    }
    try {
      const apiUrl = `https://forexs-be.mtechub.com/wishlist/getSignalsByUserId/${id}`;
  
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
  
      console.log('All Signals', data.signals);
      setAllSignals(data.signals);
  
      // Handle the response data as needed
      //console.log('Response data:', data);
  
      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
  };


  const deleteSignals = async (value) => {

    console.log("Deleting signal", value);
    
    console.log("Deleting signal user Id", userId);
    try {
      const apiUrl = `https://forexs-be.mtechub.com/wishlist/removesignalbyuserID`;
  
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
        body: JSON.stringify({
          signal_id: value,
          user_id: userId,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('All Signals', data);

      if(data.msg===`Signal removed from user's wishlist successfully`){
        forceUpdate();
      }
  
      // Handle the response data as needed
      //console.log('Response data:', data);
  
      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
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
    },
  ];

  const renderItems = item => {

    console.log("Render Items", item)
    return (
      <TouchableOpacity
      
       onPress={() =>  navigation.navigate('SignalDetails', {signalDetails: item})}
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
          
          <TouchableOpacity onPress={()=>deleteSignals(item.signal_id)}>

          <Fontiso name="heart" size={15} color={orange} />
          </TouchableOpacity>
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
              { ' ' + item.profit_loss}
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
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          onPress={() => navigation.goBack()}
          showText={true}
          text={'My WishList'}
        />
      </View>

      {allSignals && allSignals.length === 0 ? (
        // Display a message when the wishlist is empty
        <View style={styles.emptyWishlistContainer}>
          <Text style={styles.emptyWishlistText}>
            Your wishlist is empty. Add signals to your wishlist!
          </Text>
        </View>
      ) : (
        // Render the FlatList when there are wishlist items
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            data={allSignals}
            keyExtractor={(item) => item.signal_id.toString()}
            renderItem={({ item }) => renderItems(item)}
          />
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
    backgroundColor: 'white',
  },
  emptyWishlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyWishlistText: {
    fontSize: hp(2),
    color: textGrey,
    textAlign: 'center',
  },
});
