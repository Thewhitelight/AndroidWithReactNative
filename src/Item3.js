'use strict';
import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Item3 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                <Text>Item3 Page</Text>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Text style={{color: '#55ACEE'}}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}