import React, { Component } from 'react';
import { Icon, Button, Tabs, WingBlank, WhiteSpace, Flex, ListView } from 'antd-mobile';
import { Helmet } from 'react-helmet'
import ButtomBar from '../components/tabBar'
export default class favoritePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>收藏</title>
                </Helmet>
                收藏页
                <ButtomBar/>
            </div>
        );
    }

}
