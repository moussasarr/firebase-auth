import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
    apiKey: "AIzaSyDGfoxjL7KAANE_90Nas0n7sZcsxuUX9u4",
    authDomain: "one-time-password-f1837.firebaseapp.com",
    databaseURL: "https://one-time-password-f1837.firebaseio.com",
    projectId: "one-time-password-f1837",
    storageBucket: "one-time-password-f1837.appspot.com",
    messagingSenderId: "822064453142"
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
