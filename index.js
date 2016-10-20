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
      defaultComponent: null
    };
  }

  componentDidMount() {
    NativeModules.IntentModule.dataToJS((msg) => {
      console.log("msg" + msg);
      if (msg == "ReactNativeActivity") { console.log("1:" + msg); this.setState({ defaultName: msg, defaultComponent: Item1 }); }
      if (msg == "ReactViewActivity") { console.log("2:" + msg); this.setState({ defaultName: msg, defaultComponent: Item2 }); }
      ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + msg, ToastAndroid.SHORT);
    }, (result) => {
      ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
    });
  }

  render() {
    let Item = this.state.defaultComponent;

    return (
      <Navigator
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        } }
        renderScene={(route, navigator) => {
          if (Item) {
            return <Item navigator={navigator}
              onPress={(nextItem) => this.setState({ defaultComponent: nextItem })} />
          } else {
            return <View />;
          }
        } } />
    );
  }
}

AppRegistry.registerComponent('Libery', () => Libery);
