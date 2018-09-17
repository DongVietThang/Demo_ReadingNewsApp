import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d2e6eb',
        
    },
    textTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        textAlign: 'justify',
        paddingTop: 5,
        paddingBottom: 8,
        paddingLeft: 5,
        paddingRight: 5,
    },
    textDescription: {
        fontSize: 14,
        textAlign: 'justify',
        paddingLeft: 5,
        paddingRight: 5,
    }
});

export default styles;
