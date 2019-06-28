import React from 'react';

import {View, Text} from 'react-native';

import styles from './styles';
import {Icon} from 'native-base';

const Header = () => (
    <View style={styles.base}>
        <View style={styles.icons}>
            <Icon name='home' />
        </View>
        <Text style={styles.text}>Nome página</Text>
        <View style={styles.rightButtons}>
            <Icon name='home' />
        </View>
    </View>
);

export default Header;
