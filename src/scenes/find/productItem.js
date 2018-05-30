import React, { Component } from 'react';
import {Card,Flex } from 'antd-mobile';
export default class MinePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const {product}=this.props
        return (
            <Card >
                    <Card.Header
                        title={product.name}
                        thumb={product.titlePic}
                        thumbStyle={{height:48,width:48,borderRadius:10}}
                        extra={<span>{`价格：${product.price}元`}</span>}
                    />
                    <Card.Body>
                        
                        <Flex>
                            <p>{product.des}</p>
                        </Flex>
                    </Card.Body>
                    <Card.Footer content={`发布时间：${product.pubTime}`} extra={<div>{`发布人：${product.user}`}</div>} />
                    </Card>
        );
    }

}
