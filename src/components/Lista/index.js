import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import baseStyles from '../../styles';
import styles from './styles';

class Lista extends Component {
    state = {
        orixa: [
            'oxal',
            'oyaTempo',
            'iemanja',
            'omulu',
            'ogum',
            'iansa',
            'oxossi',
            'oba',
            'egunita',
            'xango',
            'oxumare',
            'oxum',
            'obaluae',
            'nana'
        ],
        entidade: [
            'caboclo',
            'ere',
            'pretoVelho',
            'baiano',
            'cigano',
            'marinheiro',
            'boiadeiro',
            'exu',
            'pomboGira'
        ]
    };

    render() {
        const {option} = this.props;
        const list = this.state[option];

        return (
            <View style={baseStyles.container}>
                <Text style={styles.title}>{option}</Text>
                {list.map((nome, index) => (
                    <Button
                        style={styles.button}
                        key={index}
                        mode='contained'
                        onPress={() => this.props.navegar(option, nome)}
                    >
                        {nome}
                    </Button>
                ))}
            </View>
        );
    }
}

export default Lista;
