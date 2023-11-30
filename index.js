/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

messaging().onMessage(async remoteMessage => {
  console.log('Notification received in foreground:', remoteMessage);
  // Handle the notification content here
  // You can update your app's UI or show a custom in-app notification.
  if (remoteMessage.notification && remoteMessage.notification.title) {
    console.log(remoteMessage.notification.title);
  }
});

//notification

messaging().onNotificationOpenedApp(remoteMessage => {
  console.log(
    'Notification caused app to open from background state:',
    remoteMessage.notification,
  );
  //navigation.navigate(remoteMessage.data.type);
});

// Check whether an initial notification is available
messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      );
    }
  });

AppRegistry.registerComponent(appName, () => App);
