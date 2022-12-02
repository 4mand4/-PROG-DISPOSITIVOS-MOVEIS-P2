import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function Filmes(props) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.data.nome}</Text>
        <Image source={{uri: props.data.foto}} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              props.mostrarSinopse(props.data.nome, props.data.sinopse)
            }>
            <Text style={styles.botaoTexto}>Sinopse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    backgroundColor: '#1B1B1B',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    width: 300,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 18,
  },
  capa: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -40,
  },
  botao: {
    width: 100,
    backgroundColor: '#E50914',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});

export default Filmes;