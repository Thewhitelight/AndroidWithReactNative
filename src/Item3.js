'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Item2 from './Item2';

class Item3 extends Component {
    _openPage() {
        this.props.navigator.push({
            nextItem: Item1
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text>Item3 Page</Text>
                <TouchableOpacity onPress={() => this.props.onPress(Item2)}>
                    <Text style={{ color: '#55ACEE' }}>点击到Item2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Item3;