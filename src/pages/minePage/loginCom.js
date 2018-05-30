
import React, { Component } from 'react';
import {Toast,Flex, Button,Tabs,WingBlank, WhiteSpace,List,InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import {tokenAction} from '../../redux/actions'
class CreateProductCom extends React.Component {

    state = {
        loginOngoing:false,
        hasError: false,
        value: '',
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }
    
  render() {
    const height=window.screen.height
    const { getFieldProps } = this.props.form;
    return (
        <div  style={{backgroundColor:'#e8e8e8',height:height}}>
             <WingBlank size="lg">
             <WhiteSpace size="lg" />
             <WhiteSpace size="lg" />
            <Tabs tabs={[
                { title: '登录' },
                { title: '注册' },
            ]}
            initialPage={0}
           
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', height: height-150, backgroundColor: '#fff' }}>
                <Flex  direction='column'>
                <InputItem
                    type="phone"
                    placeholder="11位手机号码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                ><font color="dodgerblue">手机</font></InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="******"
                ><font color="dodgerblue">密码</font></InputItem>
                <WhiteSpace size="lg" />
                
                <Button type="ghost" style={{width:'200px'}} onClick={() => {
                    console.log('ddddd')
                    this.props.dispatch(tokenAction.fetch('xia','123',(msg)=>{
                        Toast.info(msg,1)
                    }))
                 }}>登录</Button>
                </Flex>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  height: height-150, backgroundColor: '#fff' }}>
            <Flex  direction='column'>
                <InputItem
                    type="phone"
                    placeholder="11位手机号码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                ><font color="dodgerblue">手机</font></InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="******"
                ><font color="dodgerblue">密码</font></InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="******"
                ><font color="dodgerblue">重复密码</font></InputItem>
                <WhiteSpace size="lg" />
                
                <Button type="ghost" style={{width:'200px'}} >注册</Button>
                </Flex>
            </div>

            </Tabs>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = store => {
    return {
        justChangeForRerender: store.Token.justChangeForRerender
    }
  }
  
const WithRedux= connect(mapStateToProps)(CreateProductCom);

export default createForm()(WithRedux);