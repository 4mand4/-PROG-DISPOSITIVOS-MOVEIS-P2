import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Filme extends Component {
  render(){
    const {nome, foto} = this.props.data;

    
  function irFilme() {
    navigation.navigate('Sinopse');
  }

    return(
      <View>
        <Text style={styles.nomeFilme}>{nome}</Text>
        <Image style={styles.foto} source={{uri:foto}}/>
        <TouchableOpacity onPress={irFilme}>
        <Text style={styles.nomeFilme}>Leia Mais</Text>
        </TouchableOpacity>
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

export default Filme;