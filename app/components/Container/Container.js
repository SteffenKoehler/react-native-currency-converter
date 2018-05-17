import React from 'react';
import PropTypes from 'prop-types';
import {
    View
} from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
    <View style={styles.container}> 
        {children} 
    </View>
)

// PropTypes.element => only one Component
// PropTypes.any => an Array of Components

Container.propTypes = {
    children: PropTypes.any
};

export default Container;