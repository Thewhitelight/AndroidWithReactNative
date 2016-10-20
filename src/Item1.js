'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ListView,
  BackAndroid
} from 'react-native';
import NavigationBar from './Navigation';
import Item2 from './Item2';
import Item3 from './Item3';

class Item1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }),
      title: "Item1",
      loaded: false
    };
  }

  _onRowPress(rowData, rowID) {
    this.setState({ title: rowData.title });
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={() => this._onRowPress(rowData, rowID)}>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={{ uri: rowData.images.large }} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={styles.text}>{rowData.title}</Text>
            <Text style={styles.text}>{rowData.year}</Text>
            <Text style={styles.text}>{rowData.rating.average}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    let url = "https://api.douban.com/v2/movie/in_theaters?city=118172&count=50";
    fetch(url, {
      method: 'GET',
      headers: {},
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((json) => {
      if (json.subjects) {
        console.log(json.subjects[0].title);
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(json.subjects), title: json.title, loaded: true });
      }
    }).catch((error) => {
      console.error(error);
    }).done();
  }

  _leftItemAction() {
    BackAndroid.exitApp();
  }

  _rightItemAction() {
    alert('右侧按钮点击了');
  }

  _renderLoadingView() {
    return (<View style={styles.container} >
      <Text>Loading movies......</Text>
    </View>
    );
  }

  _renderView() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          title={this.state.title}
          titleTextColor="red"
          leftItemTitle="BACK"
          leftTextColor="#123456"
          rightItemTitle='forward'
          rightTextColor='#3393F2'
          leftItemFunc={this._leftItemAction}
          rightItemFunc={this._rightItemAction} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    } else {
      return this._renderView();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  icon: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

export default Item1;