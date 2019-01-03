/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ButtonGroup} from 'react-native';
import _ from 'lodash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.result = 0;

    this.insertedValueString = "";

    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)



    this.numButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    this.btnShowName = "Pokaż";
    this.btnHideName = "Ukryj";
    this.state = {
      isHidden: true,
      btnName: this.btnShowName
    };
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }

  onPress = () => {
    console.log(this.props.activeOpacity);
  }

  renderButtons = () => {
    const buttons = [];
    for (let i = 0; i <= 9; i++) {
      buttons.push(
        <ButtonNumber onPress={this.onPress} text={i}/>
      );
    }
    buttons.push(<ButtonNumber onPress={this.onPress} text=","/>);
    return buttons;
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Kalkulator</Text>

        <Text>{this.result}</Text>

        <ButtonGroup
          // onPress={this.updateIndex}
          // selectedIndex={selectedIndex}
          // buttons={this.renderButtons}
          // containerStyle={{height: 100}}
        />

      </View>
    );
  }
}

class ButtonNumber extends Component {

  render() {
    const { text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
