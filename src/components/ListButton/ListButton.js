import React from 'react';
import { View, Text, TouchableHighlight, FlatList} from 'react-native';

import data from './data';
import styles from './styles';
import '../../global'

class Button extends React.Component {
    _onPress = () => {
        global.API = this.props.API;
        this.props.onPress();
    };

    render(){
        return(
            <TouchableHighlight 
                onPress = { this._onPress }
                style = { styles.button }
                underlayColor = "#c0c0c0"
            >
                <Text style = { styles.textButton }> { this.props.name } </Text>
            </TouchableHighlight>
        )
    }
}

export default class ListButton extends React.Component {

    _onPress = ( {item} ) => <Button name = { item.name } API = { item.API } onPress = { this.props.onPress }></Button>

    render() {
        return (
            <View style = { styles.container }>
                <FlatList 
                    data = { data }
                    renderItem = { this._onPress }
                    horizontal = { true }
                    showsHorizontalScrollIndicator={ false }
                    keyExtractor = { (item, index) => item.name }
                >
                </FlatList>
            </View>
        );
    }
}