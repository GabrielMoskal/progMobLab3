/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import _ from 'lodash';

insertedValueString = "0";
buffer1 = 0.0;
buffer2 = 0.0;
chosenAction = "";

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.btnShowName = "Pokaż";
    this.btnHideName = "Ukryj";
    this.state = {
      isHidden: true,
      btnName: this.btnShowName,
      result: 0
    };
  }

  onPress = () => {
    buffer2 = parseFloat(insertedValueString);
    insertedValueString = "0";

    if (chosenAction == "+") {
      this.setState({result: buffer1 + buffer2});
    } else if (chosenAction == "-") {
      this.setState({result: buffer1 - buffer2});
    } else if (chosenAction == "*") {
      this.setState({result: buffer1 * buffer2});
    } else if (chosenAction == "/") {
      this.setState({result: buffer1 / buffer2});
    }
  }

  renderButtons = () => {
    const buttons = [];
    buttons.push(<ButtonReset onPress={this.onPress} text="AC"/>);
    buttons.push(
      <TouchableOpacity style={styles.button}>
      </TouchableOpacity>
    );
    buttons.push(
      <TouchableOpacity style={styles.button}>
      </TouchableOpacity>
    );
    for (let i = 9; i >= 0; i--) {
      buttons.push(
        <ButtonNumber style="order" text={i}/>
      );
    }
    buttons.push(<ButtonNumber text="."/>);
    return buttons;
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Kalkulator</Text>

        <Text>{this.state.result}</Text>


        <View style={styles.buttons}>
          <View style={styles.buttonsNumber}>
            {this.renderButtons()}
          </View>

          <View style={styles.buttonsAction}>
            <ButtonAction onPress={this.onPress} text="/"/>
            <ButtonAction onPress={this.onPress} text="*"/>
            <ButtonAction onPress={this.onPress} text="+"/>
            <ButtonAction onPress={this.onPress} text="-"/>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

class ButtonNumber extends Component {

  onPress = () => {
    insertedValueString += this.props.text;
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ButtonAction extends Component {

  onPress = () => {
    buffer1 = parseFloat(insertedValueString);
    insertedValueString = "0";
    chosenAction = this.props.text;
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ButtonReset extends Component {
  onPress = () => {
    buffer1 = 0.0;
    buffer2 = 0.0;
    insertedValueString = "0";
    chosenAction = "";
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonsNumber: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 150,
  },
  buttonsAction: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 50,
    height: 50,
    flexGrow: 1
  },
});
