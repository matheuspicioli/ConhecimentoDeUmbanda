import {StatusBar} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import {Icon} from 'native-base';

import Detail from '../screens/Detail';
import Home from '../screens/Home';

StatusBar.setBackgroundColor('#215f00');
StatusBar.setBarStyle('light-content');

const SwitchNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                title: 'Início'
            })
        },
        Detail: {
            screen: Detail,
            navigationOptions: ({navigation}) => ({
                title: 'Detalhe'
            })
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#52c234'
            },
            headerTintColor: '#FFF'
        },
        initialRouteName: 'Home'
        // contentComponent: CustomDrawer
    }
);

// import CustomDrawer from '../components/CustomDrawer';

// const DrawerNavigator = createDrawerNavigator({
//     HomeScreen: {
//         screen: Home,
//         navigationOptions: {
//             drawerLabel: 'Início',
//             drawerIcon: ({ tintColor }) => (
//                 <Icon name='home'
//                     type='MaterialIcons'
//                     style={{ fontSize: 24, color: tintColor } }
//                 />
//             )
//         }
//     },
//     DetailScreen: {
//         screen: Detail,
//         navigationOptions: {
//             drawerLabel: 'Detalhe',
//             drawerIcon: ({ tintColor }) => (
//                 <Icon
//                     name='home'
//                     type='MaterialIcons'
//                     style={{ fontSize: 24, color: tintColor }}
//                 />
//             )
//         }
//     }
// });

const Routes = createAppContainer(SwitchNavigator);

export default Routes;
