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
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import Feater from 'react-native-vector-icons/Feather';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  green,
  grey,
  iconGrey,
  lightGrey,
  orange,
  red,
  textBlack,
  white,
} from '../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomSnackbar from '../Custom/CustomSnackBar';
import SuggestionBox from '../Custom/SuggestionBox';

const dummyData = [
  'Apple',
  'Banana',
  'Blueberry',
  'Cherry',
  'Orange',
  'Peach',
  'Pear',
  'Pineapple',
  'Strawberry',
];

export default function SearchScreen({navigation}) {
  const [query, setQuery] = useState('');
  const [queryShow, setQueryShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  const [allSignal, setAllSignals] = useState(null);

  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const handleQueryChange = text => {
    setQuery(text);
    setSelectedSuggestion(''); // Clear selected suggestion when typing
  };

  const handleSuggestionSelect = suggestion => {
    setSelectedSuggestion(suggestion);
    setQuery(suggestion);
    getAllSignalsBYName(suggestion);
  };

  /* const getAllSignalsBYName = async name => {
    setLoading(true);
    try {
      const apiUrl = `http://192.168.18.114:4000/signal/search_signal_byname`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.msg === 'Signals fetched successfully') {
        console.log('All Signals Data', data.data);
        setAllSignals(data.data);
        setLoading(false);
      }
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
      setLoading(false);
    }
  }; */


  const getAllSignalsBYName = async name => {
    setLoading(true);
    try {
      const apiUrl = `http://192.168.18.114:4000/signal/search_signal_byname`;
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
        }),
      });
  
      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.msg === 'Signals fetched successfully') {
        console.log('All Signals Data', data.data);
  
        // Filter the results based on the title
        const filteredSignals = data.data.filter(signal => signal.title === name);
  
        console.log('Filtered Signals', filteredSignals);
  
        setAllSignals(filteredSignals);
        setLoading(false);
      }
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
      setLoading(false);
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
            onPress={() =>
              item.showAlert === true
                ? handleUpdatePasswordShow()
                : ref_RBSheet.current.open()
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

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getAllSignals(1, 10);
    // Fetch data one by one
    // Once all data is fetched, set loading to false
    setLoading(false);
  };

  const getAllSignals = async (page = 1, limit = 10) => {
    try {
      const apiUrl = `http://192.168.18.114:4000/signal/getallsignals?page=${page}&limit=${limit}`;

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

      console.log('All Signals', data);

      if (Array.isArray(data.data)) {
        const titles = data.data.map(signal => signal.title);

        console.log('Extracted Titles:', titles);
        setData(titles);

        // Handle the response data as needed
        //console.log('Response data:', data);

        // You can perform additional actions based on the response data
      } else {
        console.error('Invalid data format:', data);
      }
      //setData(data.data.title);

      // Handle the response data as needed
      //console.log('Response data:', data);

      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(3),
          alignItems: 'center',
          marginTop: hp(8),
          marginHorizontal: wp(8),
          flexDirection: 'row',
          height: hp(7),
        }}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={25} color="#282828" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            alignItems: 'center',
            height: hp(5),
            marginLeft: wp(5),
            flex: 1,
            borderRadius: wp(3),
          }}>
          <Feater
            name="search"
            style={{marginLeft: wp(3)}}
            size={20}
            color={iconGrey}
          />

          <TextInput
            value={query}
            onChangeText={handleQueryChange}
            style={{marginTop: hp(-0.5)}}
            placeholder="Search here"
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5)}}>
        {query &&
        data.filter(item => item.includes(query)).length > 0 &&
        !selectedSuggestion ? (
          <SuggestionBox
            data={data}
            query={query}
            onSuggestionSelect={handleSuggestionSelect}
          />
        ) : null}
      </View>

      {selectedSuggestion ? (
        <View style={{flex: 1}}>
          <FlatList
            style={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            data={allSignal}
            //keyExtractor={item => item.signal_id.toString()}
            renderItem={({item}) => renderItems(item)}
          />
        </View>
      ) : null}

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
});
