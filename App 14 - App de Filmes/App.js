import React from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator,Pressable, Modal} from 'react-native';
import API from './src/services/api';

import Filmes from './src/components/Filmes';
const App: () => React$Node = () => {
 
  const [filmes, setFilmes] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitulo, setModalTitulo] = React.useState('');
  const [modalConteudo, setModalConteudo] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const response = await API.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    })();
  }, []);

  const mostrarSinopse = (titulo, conteudo) => {
    setModalTitulo(titulo);
    setModalConteudo(conteudo);
    setModalOpen(true);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Filmes</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Filmes data={item} mostrarSinopse={mostrarSinopse} />
        )}
      />

      <Modal animationType="slide" visible={modalOpen}>
          <Text style={styles.textoModalTitulo}>{modalTitulo}</Text>
          <View style={styles.areaModal}>
          <Text style={styles.textoModalConteudo}>{modalConteudo}</Text>
          <Pressable style={styles.button} onPress={() => setModalOpen(false)}>
          <Text style={styles.textoButton}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaModal: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    shadowRadius: 5,
    alignItems: 'center'

  },
  textoModalTitulo: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#0A0A0A',
    padding: 18,
    fontWeight: '400'
  },
  textoModalConteudo: {
    fontSize: 15,
    color: 'white',
    padding: 10,
    textAlign: 'justify',
    margin: 10,
  },
  button: {
    backgroundColor: '#E50914',
    borderRadius: 5,
    opacity: 1,
    width: 100,
    margin: 10,
  },

  textoButton: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    margin: 8,
  },
  titulo: {
    color: '#E50914',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#0A0A0A',
    fontWeight: 'bold',
    letterSpacing: 1,
    opacity: 1,
    marginTop: 15,
    elevation: 3,
  },
});

export default App;