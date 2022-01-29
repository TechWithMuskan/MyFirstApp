import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Child extends Component {
  constructor(props) {
    console.log('constructor :');
    super(props);
    this.state = {
      name: 'from Child',
    };
  }

  // componentDidMount() {
  //   console.log('componentDidMount :');
  //   this.setState({name: 'from did mount'});
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps :');
    return {name: props.nameFromParent};
  }

  render() {
    console.log('render :');
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>This {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0cdcb',
  },
  textStyle: {
    fontSize: 25,
    color: '#0E4146',
  },
});

export default Child;
