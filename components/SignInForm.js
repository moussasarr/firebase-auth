import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
const ROOT_URL = 'https://us-central1-one-time-password-f1837.cloudfunctions.net' ;


class SignInForm extends Component {
    state = { phone: '', code: '' } ;

    handleSubmit = async ()  => {
      const { phone, code } = this.state;
      try {
        let { data }= await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
          phone,
          code
        });
        firebase.auth().signInWithCustomToken(data.token);
        console.warn(response);
      } catch (err) {
        console.warn(err);
      }

    };


    render() {
      return (
        <View>
          <View style={{ marginBottom: 10 }}>
               <FormLabel> Phone Number </FormLabel>
               <FormInput
                  onChangeText={ phone => this.setState({ phone })}
                  value={this.state.phone}/>
          </View>

          <View style={{ marginBottom: 10 }}>
               <FormLabel> Code: </FormLabel>
               <FormInput
                  onChangeText={code => this.setState({ code })}
                  value={this.state.code}
                />
          </View>
               <Button
                  title="Submit"
                  onPress={this.handleSubmit}
               />


        </View>
      );
    }
}

export default SignInForm;
