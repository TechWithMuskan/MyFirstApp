import React, {Component} from 'react';
import Child from './child';

export class Parent extends Component {
  render() {
    return <Child nameFromParent="Value from Parent." />;
  }
}

export default Parent;
