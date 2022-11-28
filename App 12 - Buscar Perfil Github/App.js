import React, { Component, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import {styles} from './styles';


class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      perfil: [],
      user: '',
      subtitulos: '',
      imagem: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4'
    };
  }

  buscarPerfil = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({perfil: data});
        this.setState({imagem: this.state.perfil.avatar_url})

        this.setState({subtitulos: 
        ' Followers  ' + '  Following ' + ' Repositórios '});

      })
      .catch((erro) => {
        alert('User Inválido');
      });
  };
      
  render() {
    return (

      <View style={styles.container}>
          <Text style={styles.titulo}>Perfil dos Devs</Text>

          <View style={styles.input1}>
            <TextInput style={styles.input}
              defaultValue={this.state.user}
              placeholder="Digite o login git..."
              onChangeText={(user) => {
                this.setState({ user });
              }}
            />

            <Pressable style={styles.botao}
              onPress={() => this.buscarPerfil()}>
              <Text style={styles.textoBotao}> > </Text>
            </Pressable>
          </View>

            <Image style={styles.imagem}
            source={{uri: this.state.imagem}}
            />

            <View>
            <Text style={styles.nome}>{this.state.perfil.name} </Text>
            <Text style={styles.nick}>{this.state.perfil.login}</Text>
            </View>

            <View>
            <Text style={styles.bio}>{this.state.perfil.bio}</Text>
            </View>

            <View style={styles.titulos}>
            <Text style={styles.titulos}>{this.state.subtitulos}</Text>
            </View>
            
            <View style={styles.titulos}>
            <Text style={styles.subTitulos}>{this.state.perfil.followers} </Text>
            <Text style={styles.subTitulos}>{this.state.perfil.following} </Text>
            <Text style={styles.subTitulos}>{this.state.perfil.public_repos} </Text>
            </View>
          
        </View>
        
    );
  }
}
export default App;
