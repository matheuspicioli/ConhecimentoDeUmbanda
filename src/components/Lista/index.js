import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import baseStyles from '../../styles';
import styles from './styles';

class Lista extends Component {
    state = {
        orixa: [
            {
                param: 'oxala',
                label: 'Oxalá'
            },
            {
                param: 'oyaTempo',
                label: 'Oya Tempo'
            },
            {
                param: 'iemanja',
                label: 'Iemanjá'
            },
            {
                param: 'omulu',
                label: 'Omulú'
            },
            {
                param: 'ogum',
                label: 'Ogum'
            },
            {
                param: 'iansa',
                label: 'Iansã'
            },
            {
                param: 'oxossi',
                label: 'Oxóssi'
            },
            {
                param: 'oba',
                label: 'Obá'
            },
            {
                param: 'egunita',
                label: 'Egunitá'
            },
            {
                param: 'xango',
                label: 'Xangô'
            },
            {
                param: 'oxumare',
                label: 'Oxumaré'
            },
            {
                param: 'oxum',
                label: 'Oxum'
            },
            {
                param: 'obaluae',
                label: 'Obaluaê'
            },
            {
                param: 'nana',
                label: 'Nanã'
            }
        ],
        entidade: [
            {
                param: 'caboclo',
                label: 'Caboclo'
            },
            {
                param: 'ere',
                label: 'Erê'
            },
            {
                param: 'pretoVelho',
                label: 'Preto Velho'
            },
            {
                param: 'baiano',
                label: 'Baiano'
            },
            {
                param: 'cigano',
                label: 'Cigano'
            },
            {
                param: 'marinheiro',
                label: 'Marinheiro'
            },
            {
                param: 'boiadeiro',
                label: 'Boiadeiro'
            },
            {
                param: 'exu',
                label: 'Exú'
            },
            {
                param: 'pomboGira',
                label: 'Pombo Gira'
            }
        ]
    };

    render() {
        const {option, label} = this.props;
        const list = this.state[option];

        return (
            <View style={baseStyles.container}>
                <Text style={styles.title}>{label}</Text>
                {list.map((inform, index) => (
                    <Button
                        key={index}
                        style={styles.button}
                        mode='contained'
                        onPress={() => this.props.navegar(option, inform.param)}
                    >
                        {inform.label}
                    </Button>
                ))}
            </View>
        );
    }
}

export default Lista;
