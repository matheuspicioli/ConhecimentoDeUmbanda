import React from 'react';

import {
    ScrollView,
    Image
} from 'react-native';
import {
    SafeAreaView,
    DrawerItems
} from 'react-navigation';
import styles from '../../styles';

const CustomDrawer = props => (
    <ScrollView>
        <Image style={{ width: 42, height: 42 }}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
        />
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems
                activeBackgroundColor={"black"}
                activeTintColor={"white"}
                {...props}
            />
        </SafeAreaView>
    </ScrollView>
);

export default CustomDrawer;
