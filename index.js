'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  NativeModules,
  ToastAndroid
} from 'react-native';

import Item1 from './src/Item1';
import Item2 from './src/Item2';

export default class Libery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultName: '',
      defaultComponent: null
    };
  }
  render() {
    NativeModules.IntentModule.dataToJS((msg) => {
      if (msg == "Item1") { console.log("1:" + msg); this.setState({ defaultName: msg, defaultComponent: Item1 }); }
      if (msg == "Item2") { console.log("2:" + msg); this.setState({ defaultName: msg, defaultComponent: Item2 }); }
      console.log(this.state.defaultName);
      ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + msg, ToastAndroid.SHORT);
    }, (result) => {
      ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
    })
    return (
      <Navigator
        initialRoute={{ name: this.state.defaultName, component: this.state.defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          if (route.component) {
            return <Component navigator={navigator} />
          }
        } } />
    );
  }
}

AppRegistry.registerComponent('Libery', () => Libery);