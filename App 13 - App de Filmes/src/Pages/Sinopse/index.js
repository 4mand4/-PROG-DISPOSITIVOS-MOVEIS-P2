import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Sinopse extends Component {
  render(){

    const {nome, sinopse} = this.props.data;
    return(
      <View>
        <Text style={styles.nomeFilme}>{nome}</Text>
        <TouchableOpacity onPress={(irSinopse) => alert({nome})}>
        <Text style={styles.nomeFilme}> Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.nomeFilme}> {sinopse}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
  },
  
  nomeFilme:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  foto:{
    width: 400,
    height: 200,
    alignSelf: 'center',
    borderRadius: 30
  }
})

export default Sinopse;