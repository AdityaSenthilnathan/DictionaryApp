import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class HomeScreen extends React.Component {


  constructor() {
    super();
    this.state = {
      text: '',
      word: '',
      definition: [],
      lexicalCatagory: [],
      IsPressed: '',
      textVal: [],
    };
  }
 

  getWord = (word) => {
    var searchKeyword = word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";
    return fetch(url)
      .then( async data => {

        var textVal = await data.json();

        if (textVal) {
          var wordData = textVal.definitions;
          var definition = wordData;
          console.log(textVal + " def val");
          var lexicalCatagory = definition.wordType
          this.setState({
            "word": this.state.text,
            "definition": definition,
            "lexicalCatagory": lexicalCatagory
          })
        }
        else{
          this.setState({
            "word": this.state.text,
            "definition": "Not Found"
          })
        }
        this.setState({ textVal: data })



        
      })

  }

  render() {
    var txt = "";
    var txt2 = "";

    if (Array.isArray(this.state.definition) && this.state.definition.length > 0  ) {

      for(let i = 0; i < this.state.definition.length; i++) {
        txt += "Type: "+ this.state.definition[i].wordtype + "\n Definition:"+this.state.definition[i].description + "\n \n \n" ;
      }

    }
   


    return (
      <View>
      <View>
    
        
            
        <TextInput style = {styles.input} onChangeText={text => { this.setState({ text: text }); }} value={this.state.text} />
        <TouchableOpacity onPress={() => { this.getWord(this.state.text), this.setState({ IsPressed: false }) }}>
          <Text>Search!!!</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text> </Text>
        <Text style = {styles.text}> {this.state.word}</Text>
       
        <Text> </Text>
   
        {console.log(this.state.definition)}
        <Text style = {styles.text}>{txt}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
borderWidth: 2
  },
  name: {
    fontSize: 19
  },
  text: {
    fontSize: 20,
  },
  
});
