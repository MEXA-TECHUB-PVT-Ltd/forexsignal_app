import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React,{useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';

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
  lightGrey,
  orange,
  red,
  textBlack,
  white,
} from '../assets/Colors';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function Home({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);


 const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

 const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 3000);
  };




    const data = [
        {
          id: 1,
          currency: 'NZD/USD',
          buy: Buy,
          sell:Sell,
          price:'$113.22',
          profit:'0.59038',
          loss:'0.59038',
          date:'27-oct-2023, 08:20 AM',
          status:'Buy'
        },
        {
            id: 2,
            currency: 'EUR/USD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 3,
            currency: 'CAD/CHF',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 4,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Buy'
          },
          {
            id: 5,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 6,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 8,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 9,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          },
          {
            id: 10,
            currency: 'GBP/CAD',
            buy: Buy,
            sell:Sell,
            price:'$113.22',
            profit:'0.59038',
            loss:'0.59038',
            date:'27-oct-2023, 08:20 AM',
            status:'Sell'
          }

      ];
    
  const renderItems = item => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("SignalDetails")}
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
              {item.currency}
            </Text>
            {
                item.status==='Buy'?
                <Buy width={50} height={50} />:
                <Sell width={50} height={50} />
            }
            
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
          <TouchableOpacity onPress={()=>handleUpdatePassword()}>

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
              {item.profit}
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
            {item.loss}
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
            GT-Signals
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp(20),
            }}>
            <TouchableOpacity>
              <Search width={25} height={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
              <Notification width={25} height={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{height: hp(21), overflow: 'hidden'}}>
        <Image style={{resizeMode: 'contain'}} source={appImages.homeTopBar} />
      </View>

      <View style={{flex:1}}>
            <FlatList
              style={{flexGrow:1}}
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => renderItems(item)}
            />
          </View>

          <CustomSnackbar
        message={'Success'}
        messageDescription={'SIgnal Copied Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
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
