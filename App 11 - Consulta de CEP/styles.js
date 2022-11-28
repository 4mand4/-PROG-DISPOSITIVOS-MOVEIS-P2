import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },

  input1: {
    flexDirection: 'row',
  },


  input:{
    height: 45,
    width: 160,
    borderWidth: 1,
    borderColor: '#eee',
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
  },

  resultado:{
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    flexDirection: 'row',
    margin: 10,
  },

  titulo: {
    fontSize: 25,
    color: 'black',
    borderBottomWidth: 2,
    borderColor: 'black',
    margin: 20,
    fontWeight: '700',
    padding: 10,
    paddingHorizontal: 40
  },

  botao: {
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#007fff',
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
 