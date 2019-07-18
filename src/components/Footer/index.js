import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

class Footer extends Component {
  render() {
    return (
        <View style={styles.footer} elevation={5}>
            <Text style={styles.textFooter}>Textos retirados de: https://umbandaeucurto.com</Text>
        </View>
    );
  }
}

export default Footer;