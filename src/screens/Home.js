import React, {Component} from 'react';
import { View, Button} from 'react-native';

import { ListNews } from '../components/ListNews';
import { ListButton } from '../components/ListButton';
import '../global';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { API: global.API };
    }

    handlePress = () => {
        this.setState( { API : global.API} );
    }

    render() {
        return(
            <View>
                <ListButton onPress = { this.handlePress }/>
                <ListNews navigation = { this.props.navigation } API = { this.state.API }/>
            </View>
        );
    }
}