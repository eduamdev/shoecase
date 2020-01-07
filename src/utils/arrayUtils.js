import { Component } from 'react';

class ArrayUtils extends Component {
  static isArrayEmpty(array) {
    return !array || !array.length;
  }
}

export default ArrayUtils;
