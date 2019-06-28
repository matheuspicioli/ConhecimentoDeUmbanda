import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Lista from '../../components/Lista';
import Linha from '../../components/Linha';

import baseStyle from '../../styles';

export default class Home extends Component {
    navegar = (tipo, nome) => {
        const {navigation} = this.props;
        console.log(JSON.stringify({[tipo]: nome}));
        navigation.navigate('Detail', {[tipo]: nome});
    };

    render() {
        return (
            <ScrollView contentContainerStyle={baseStyle.scrollContainer}>
                <Lista option='entidade' navegar={this.navegar} />
                <Linha />
                <Lista option='orixa' navegar={this.navegar} />
            </ScrollView>
        );
    }
}
