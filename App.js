import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  //stateを定義
  state = {
    name: 'hoge',
    age: 33,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title='Click Me' onPress={this.showAlert} />
        <Text>こんにちは。{this.state.name}さん。</Text>
        <Button title='Change Name' onPress={this.changeName} />
        <Hello to='Bob' />
        <Hello to='Tom' />
      </View>
    );
  }
  //アラート表示
  showAlert = () => {
    alert('アラート表示');
    console.log('コンソールログ');
  };
  //name変更
  changeName = () => {
    this.setState({
      name: 'Foo',
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Hello(props) {
  return <Text>Hello. {props.to}!</Text>;
}
