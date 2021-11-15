import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlightBase, View } from 'react-native';

const listCons = /[bcdfghjklmnpqrstvwxyz]/gi;
const listVow = /[aeiou]/gi;
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      word: "",
      cons: 0,
      vowels: 0,
      char: 0
    } 
  }

  analyzeWord = () => {
    //initialize all variables
    let word = this.state.word;
    let cons = 0;
    let vowels = 0;
    let char = 0;

    var input = word.split('');
    var length = input.length;


    for (let i = 0; i < length; i++){
      
      // to count characters of consonents
      if (input[i].match(listCons)){
        cons++;
      }
      // to count characters of vowels
      else if(input[i].match(listVow)){
        vowels++;
      }

      if(input[i] != " "){
        char++;
      }

   }

    this.setState({cons:cons});
    this.setState({vowels:vowels});
    this.setState({char:char});
    
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style = {styles.header}>A Word Analyzer</Text>
        <Text style = {styles.label}>Word <TextInput style ={styles.input} 
              onChangeText = {(word) => this.setState({word})}/></Text>

        <Button color='grey' onPress={this.analyzeWord} title='Analyze' />
        
        <Text style = {styles.result}>Word                             : {this.state.word}</Text>
        <Text style = {styles.result}>No. of Consonents         : {this.state.cons}</Text>
        <Text style = {styles.result}>No. of Vowels                 : {this.state.vowels}</Text>
        <Text style = {styles.result}>No. of Characters           : {this.state.char}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30,
    textAlign: 'center',
    margin:10,
    fontWeight:'bold'
  },

  label: {
    fontSize: 15,
    margin:10,
  },

  input: {
    height: 25,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    marginLeft: 20,
  },

  result: {
    margin: 5
  }
  
})
