import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native'; 

import styles from './styles';

const ClearButton = ({text, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.wrapper}>
            <Image resizeMethod='scale' source={require('./images/icon.png')} style={styles.icon} />
            <Text style={styles.text}>
                {text}
            </Text> 
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
}

export default ClearButton;