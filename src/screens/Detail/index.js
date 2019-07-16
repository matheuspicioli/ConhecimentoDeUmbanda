import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';

import baseStyles from '../../styles';
import styles from './styles';

import textos from '../../config/textos';

class Detail extends Component {
    state = {
        entidade: null,
        orixa: null,
        texto: '',
        textos: {
            orixas: {},
            entidades: {}
        }
    };

    componentWillMount() {
        const {navigation} = this.props;
        const entidade = navigation.getParam('entidade', null);
        const orixa = navigation.getParam('orixa', null);
        const orixas = textos.orixas;
        const entidades = textos.entidades;

        this.setState(
            {
                entidade,
                orixa,
                orixas,
                entidades
            },
            () => {
                this.setText();
            }
        );
    }

    setText = () => {
        const {entidade, orixa, orixas, entidades} = this.state;

        if (entidade) {
            const texto = entidades[entidade];
            this.setState({texto});
            return;
        }

        const texto = orixas[orixa];
        this.setState({texto});
        return;
    };

    render() {
        const {texto} = this.state;

        return (
            <ScrollView contentContainerStyle={baseStyles.scrollContainer}>
                <Text style={styles.texto}>{texto}</Text>
            </ScrollView>
        );
    }
}

export default Detail;
