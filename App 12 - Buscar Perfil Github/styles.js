import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  input1: {
    flexDirection: 'row',
  },

  imagem: {
    margin: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,

  },

  input:{
    height: 45,
    width: 200,
    borderWidth: 1,
    borderColor: '#eee',
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },

    nome:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },

  nick:{
    textAlign: 'center',
    fontSize: 18,
    color: '#bebebe',
    marginBottom: 10,
  },

   bio:{
    textAlign: 'center',
    fontSize: 18,
    color: '#bebebe',
    marginBottom: 20,
    padding: 10,
  },

  titulos:{
    flexDirection: 'row',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },

  subTitulos: {
     color: '#eee',
     fontSize: 15,
     paddingHorizontal: 40
  },

  titulo: {
    fontSize: 25,
    color: 'white',
    borderBottomWidth: 2,
    borderColor: 'white',
    margin: 20,
    fontWeight: '800',
    letterSpacing: 1.5,
    padding: 15,
    paddingHorizontal: 30
  },

  botao: {
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#c7abda',
    margin: 10,
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: '600',
    color: 'white' 
  },
});

export {styles}
 