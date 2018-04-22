import React, { Component } from "react";
import { Text, View, Button, Picker, Alert, Platform } from "react-native";
import { styles } from "./utils/styles";

// see https://github.com/necolas/react-native-web

class App extends Component {
  state = {
    language: "java"
  };

  _onButtonPress() {
    const message = 'Congratulations, you have learned more.';
    Platform.OS === 'web'
    ? global.alert(message)
    : Alert.alert(
      'Alert Title',
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
        { cancelable: false }
      )
  }

  render() {
    return (
      <View>
        <View style={styles.box}>
          <Text style={styles.text}>My favorite language is: {this.state.language}</Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={this._onButtonPress}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={this.state.language}
            onValueChange={value => this.setState({ language: value })}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>
    );
  }
}

export default App;
