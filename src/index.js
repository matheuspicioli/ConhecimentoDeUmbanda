import React, {Component} from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './navigation/routes';

class App extends Component {
    render() {
        return (
            <PaperProvider>
                <Routes />
            </PaperProvider>
        );
    }
}

export default App;
