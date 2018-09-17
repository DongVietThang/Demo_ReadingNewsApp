import React, {Component} from 'react';
import {View, TouchableHighlight, ImageBackground, Text, Dimensions} from 'react-native';

import styles from './styles';
import '../../global'

const { width } = Dimensions.get('screen');

export default class Card extends Component {
    render() {
        const { navigation } = this.props
        return(
            <TouchableHighlight 
                onPress = { ()=> navigation.navigate( 'Detail', { url: this.props.item.url }) }     
                underlayColor = '#98bccb'  
            >
                <View style = { styles.container }>
                    <Text style = { styles.textTitle }> { this.props.item.title } </Text>
                    <ImageBackground style={{height: 125, width: width-10, margin: 5 }} source = {{ uri: this.props.item.urlToImage }}>
                    </ImageBackground>
                    <Text style = {styles.textDescription} > {this.props.item.description}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}