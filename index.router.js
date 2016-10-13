import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  BackAndroid
} from 'react-native';

var { NativeModules } = require('react-native');

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={() => BackAndroid.exitApp()}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class Libery extends Component {
  //当组件挂载之后,去获取Activity传输过来的数据...
  componentDidMount(){
     //进行从Activity中获取数据传输到JS
     NativeModules.IntentModule.dataToJS((msg) => {
                    console.log(msg);
                    ToastAndroid.show('JS界面:从Activity中传输过来的数据为:'+msg,ToastAndroid.SHORT);
                  },
                   (result) => {
                    ToastAndroid.show('JS界面:错误信息为:'+result,ToastAndroid.SHORT);
                  })

  }
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
           React/JS与原生交互,数据通信实例
        </Text>
        <CustomButton
          text="点击跳转到Activity界面"
        />
        <CustomButton
          text="点击跳转到Activity界面,并且等待数据返回..."
          onPress={()=>NativeModules.IntentModule.startActivityFromJSGetResult("cn.libery.androidwithreactnative.MainActivity",200,(msg) => {
                    ToastAndroid.show('JS界面:从Activity中传输过来的数据为:'+msg,ToastAndroid.SHORT);
                  },
                   (result) => {
                    ToastAndroid.show('JS界面:错误信息为:'+result,ToastAndroid.SHORT);
                  })} 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});

AppRegistry.registerComponent('Libery', () => Libery);