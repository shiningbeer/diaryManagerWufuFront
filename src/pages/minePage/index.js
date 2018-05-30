import React, { Component } from 'react';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux';
import ButtomBar from '../../components/tabBar'
import CreateProduct from './createProductCom'
import Login from './loginCom'
class MinePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
       
    }
    render() {
        // localStorage.removeItem('token')
        const token=localStorage.getItem('token')
        console.log(token)
        let showCompnent=token!=null?<CreateProduct/>:<Login/>
        return (
            <div>
                <Helmet>
                    <title>我的</title>
                </Helmet>
                {showCompnent}
                <ButtomBar/>
            </div>
        );
    }


}

const mapStateToProps = store => {
    return {
       justChangeForRerender: store.Token.justChangeForRerender
    }
  }
  
const WithRedux= connect(mapStateToProps)(MinePage);

export default createForm()(WithRedux);