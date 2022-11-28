import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      endereco: [],
      cep: '',
      resultado: '',
    };
  }

  buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({endereco: data});
        this.setState({resultado: 'Cep: ' + this.state.cep + '\n' + 
        'Logradouro: ' + this.state.endereco.logradouro + '\n' +
        'Bairro: ' + this.state.endereco.bairro + '\n' +
        'Cidade: ' + this.state.endereco.localidade + '\n' +
        'Estado: ' + this.state.endereco.uf
        });
        
      })
      .catch((erro) => {
        alert('Cep Inválido');
      });
  };
      

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.titulo}>CEP X ENDEREÇO</Text>

        <View style={styles.input1}>
          <TextInput style={styles.input}
            defaultValue={this.state.cep}
            placeholder="CEP"
            keyboardType="numeric"
            onChangeText={(cep) => {
              this.setState({ cep });
            }}
          />

          <Pressable style={styles.botao}
            onPress={() => this.buscarCep()}>
            <Text style={styles.textoBotao}> Buscar </Text>
          </Pressable>
        </View>

        <View style={styles.box}>
          <Text style={styles.resultado}>{this.state.resultado} </Text>
        </View>
        
      </View>
    );
  }
}
export default App;
