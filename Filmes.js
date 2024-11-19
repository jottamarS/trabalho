import React,{Component} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import api from '../Services/Api'
import Filme from './Filme'

export default class App extends Component() {

  constructor(props){
    super(props);
    this.state ={
      filmes: []
    }
  }

  async componentDidMount() {
    const reponse = await api.get('/filmes');
    this.setState({
      filmes: reponse.data
    })
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Filme data={item}/>}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
