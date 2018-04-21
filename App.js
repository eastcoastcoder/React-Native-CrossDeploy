import React, { Component } from "react";
import { Text, View, Button, Picker } from "react-native";
import { styles } from "./utils/styles";
import SomeCustomComponent from "./SomeCustomComponent";

// see https://github.com/necolas/react-native-web

class App extends Component {
  state = {
    language: "java"
  }
  
  _onButtonPress() {
    console.log('The button was pressed!');
  }

  render() {
    return (
      <View>
        <View style={styles.box}>
          <Text style={styles.text}>Yo, some things</Text>
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
        <View>
          <SomeCustomComponent />
        </View>
      </View>
    );
  }
}

export default App;
