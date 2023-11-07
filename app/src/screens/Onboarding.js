import {
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {orange, textBlack, textGrey, white} from '../assets/Colors'; // Adjust the path to match the location of your Colors.js file

export default function Onboarding({navigation}) {
  return (
    <ImageBackground
      source={appImages.backgroundOnBoarding}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <View
        style={styles.imageContainer}>
        <Image
          style={styles.roundedImage}
          source={appImages.cardImg}
        />
      </View>

      <View
        style={{
          width: wp(59),
          marginLeft: wp(8),
          height: hp(15),
          marginTop: hp(3),
        }}>
        <Image
          style={{width: wp(70), height: hp(18), resizeMode: 'contain'}}
          source={appImages.tradingAppImg}
        />
      </View>

      <Text style={{marginLeft: wp(8), lineHeight: hp(3), color: textGrey}}>
        Elevate your trading experience with the premier currency exchange app –
        where every trade tells a story.
      </Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("BottomTabNavigation")}
        style={{
          height: hp(7),
          paddingRight: wp(1),
          flexDirection: 'row',
          marginTop:hp(15),
          alignItems:'center',
          justifyContent:'center',
          borderRadius: wp(8),
          marginHorizontal: wp(8),
          backgroundColor: orange,
        }}>
       
        <Text style={{ flex:1, marginLeft:wp(30), fontWeight:'600',  color: white}}>
        Get Started
        </Text>

        <Image style={{resizeMode: 'contain'}} source={appImages.circleImg} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundedImage: {
    width: wp(78),
    height: wp(65),
    resizeMode: 'stretch',
    borderRadius: wp(8), // Set the same borderRadius as the wrapping View
  },
  imageContainer: {
    //height: hp(35),
    marginTop: hp(15),
    borderRadius: wp(8),
    //resizeMode:'contain',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  }
});
