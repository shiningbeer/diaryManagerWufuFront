
import React, { Component } from 'react';
import {Picker,Flex,Button, List, WingBlank, InputItem, TextareaItem, WhiteSpace, ImagePicker, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import {tokenAction,productAction} from '../../redux/actions'
class CreateProduct extends React.Component {
    state = {
        files: [],
        productName:'',
        productDes:'',
        productPrice:null,
        productExpireSpan:aday    
      }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onComfirm=()=>{
            var pics=[]
            this.state.files.map((v)=>{
                pics.push(v.url)
            })
            let newProduct={
                name:this.state.productName,
                description:this.state.productDes,
                price:this.state.productPrice,
                pics:pics,
                expireTime:this.state.productExpireSpan,
          }
          console.log(newProduct)
          this.props.dispatch(productAction.upload(newProduct,(msg)=>{
            console.log(msg)
          }))
      }
  render() {
    const { getFieldProps } = this.props.form;
    const { files } = this.state;
    const {uploading}=this.props.UploadProduct
    let display=uploading?'block':'none'
    return (
        <div style={{backgroundColor:'#e8e8e8'}}>
            <div
                style={{
                    position:'fixed',
                    left:0,
                    top:0, 
                    opacity:.5,
                    width:'100%',
                    height:'100%',
                    background:'#000',
                    zIndex:998,
                    display: display,
                    alignItems: 'center', 
                    justifyContent: 'center',            
                }}
            >
            <font color="dodgerblue">数据上传中，请稍候。。。</font>
            
            </div>
      <div >
      <WingBlank size="lg">
      <WhiteSpace size="lg" />
          <InputItem
            {...getFieldProps('label8')}
            placeholder="请输入10字符以内的产品名字"
            labelNumber={10}
            onChange={(v)=>{this.setState({productName:v})}}
            value={this.state.productName}
          >产品名</InputItem>
          <WhiteSpace size="lg" />
          <TextareaItem
            {...getFieldProps('count', {})}
            rows={5}
            count={100}
            placeholder="请输入产品的描述，字数限制为100。"
            onChange={(v)=>{this.setState({productDes:v})}}
            value={this.state.productDes}
          />
          <WhiteSpace size="lg" />
          <InputItem
            {...getFieldProps('price')}
            placeholder="0.00"
            extra="¥"
            onChange={(v)=>{this.setState({productPrice:v})}}
            value={this.state.productPrice}
          >价格</InputItem>
          <WhiteSpace size="lg" />
           <WingBlank>
        <p>添加产品图片</p>
        </WingBlank>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          multiple={this.state.multiple}
        />
        <WhiteSpace size="lg" />
         <Picker data={timeSpan} cols={1} {...getFieldProps('district3')} className="forss" onOk={v=>this.setState({productExpireSpan:v})}>
            <List.Item arrow="horizontal">有效时间</List.Item>
            </Picker>
            <WhiteSpace size="lg" />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
      
      <Flex direction='row' justify='between'>
      <WhiteSpace size="lg" />
            <Button type="ghost" style={{width:'150px'}}  onClick={()=>{this.props.dispatch(tokenAction.delete())}}>取消</Button>
            <Button type="primary" style={{width:'150px'}} onClick={()=>{this.onComfirm()}}>确认</Button>
            <WhiteSpace size="lg" />
          </Flex>
          <div style={{height:'70px'}}></div>
      </div>
    );
  }
}
const aday=60*60*1000*24
const timeSpan=[
    {
        label: '立刻',
        value: 0,
    },
    {
      label: '一天',
      value: aday,
    },
    
    {
      label: '一周',
      value: aday*7,
    },
    {
        label: '一月',
        value: aday*30,
    },
    {
        label: '一季',
        value: aday*90,
    },
    {
        label: '一年',
        value: aday*360,
    },
]

const mapStateToProps = store => {
    return {
        UploadProduct: store.UploadProduct
    }
  }
const withRedux=connect(mapStateToProps)(CreateProduct)
export default createForm()(withRedux);