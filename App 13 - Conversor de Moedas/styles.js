import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010409',
  },

  input:{
    color: 'white',
    width: 150,
    height: 45,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#31373e',
    justifyContent: 'center',
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: '#0d1117',
    margin: 10,
  },
  
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '100'
  },

  botao: {
    width: 150,
    height: 50,
    margin: 20,
    backgroundColor: '#21262d',
    borderColor: ' #31373e',
    borderWidth: 1,
    borderRadius: 20,
    elevation: 3
  },

  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: '700',
    color: 'white'
  }
});

export {styles}
 