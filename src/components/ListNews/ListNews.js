import React, { Component } from 'react';
import { View, FlatList, } from 'react-native';

import { Card } from '../Card';
import { Separator } from './Separator';
import '../../global';

export default class ListNews extends Component {
    state = { news: [] };

    static getDerivedStateFromProps(props, state) {
        return { news: [] };
    }

    _fetchNews() {
        fetch(this.props.API)
        .then(res => res.json())
        .then( data => this.setState(() => { return { news: data.articles } })
        )
    };

    _renderItem = ({item}) => <Card item = { item } navigation = { this.props.navigation }></Card>

    render() {
        return (
            <View>
                <FlatList
                    data = { this.state.news }
                    renderItem = { this._renderItem }
                    ItemSeparatorComponent = { Separator }
                >
                </FlatList>
            </View>
        );
    }

    componentDidUpdate() {
        this._fetchNews();
    }
    componentDidMount() {
        this._fetchNews();
    }
}
