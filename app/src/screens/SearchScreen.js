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
import React, {useState} from 'react';
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

  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const handleQueryChange = text => {
    setQuery(text);
    setSelectedSuggestion(''); // Clear selected suggestion when typing

  };

  const handleSuggestionSelect = suggestion => {
    setSelectedSuggestion(suggestion);
    setQuery(suggestion);
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
            style={{marginTop:hp(-0.5)}}
            placeholder="Search here"
          />
        </View>
      </View>
      <View style={{marginHorizontal: wp(5)}}>
        {query && dummyData.filter(item => item.includes(query)).length > 0 ? (
          <SuggestionBox
            data={dummyData}
            query={query}
            onSuggestionSelect={handleSuggestionSelect}
          />
        ) : null}
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
