import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

import api from '../../services/api';
import Filme from '../Filme';
import Sinopse from '../Sinopse';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: [],
    }
  }

  async componentDidMount(){
    const response = await api.get('/?api=filmes')
    this.setState({
      filmes: response.data
    });
  }

render() {
    return (

    <SafeAreaView style={styles.container}>
      <FlatList
      data={this.state.filmes}
      keyExtractor={item => item.id.toString() }
      renderItem={ ({item}) => <Filme data={item} /> }
      />
    </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  
})
export default Home;