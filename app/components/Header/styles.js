import EStyleSheets from 'react-native-extended-stylesheet';

const styles = EStyleSheets.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 20,
        },
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    icon: {
        width: 18,
        height: 18,
    },
});

export default styles;
