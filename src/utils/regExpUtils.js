import { Component } from 'react';

class RegExpUtils extends Component {
  static onlyContainsNumbers(string) {
    return /^[0-9\b]+$/.test(string);
  }
}

export default RegExpUtils;
