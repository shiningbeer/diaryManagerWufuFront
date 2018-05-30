import React, { Component } from 'react';
import { Carousel,Modal,Flex,SearchBar,Card, WingBlank, WhiteSpace} from 'antd-mobile';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ButtomBar from '../components/tabBar'
import ProductItem from '../components/productItem'
import {productAction} from '../redux/actions'
class FindPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(productAction.get((msg)=>{
            console.log(msg)
        }))
        this.state = {
            modal1: false,
            imgHeight:window.screen.height*0.5,
            slideIndex: 0,
          };

    }
   
    showModal = (key,id) => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
        this.props.dispatch(productAction.getPics(id,(msg)=>{
            console.log(msg)
        }))
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
    render() {
       const swidth=window.screen.width*0.9
       const sheight=window.screen.height*0.6
       let {products}=this.props.GetProduct
        return (
            <div style={{backgroundColor:'#e8e8e8'}}>
                <Helmet>
                    <title>发现</title>
                </Helmet>
                
               <SearchBar placeholder="搜索产品" maxLength={8} />
               
               <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    {
                        products.map((item,key)=>{
                            return (
                            
                            <div onClick={this.showModal('modal1',item._id)}>
                                <ProductItem product={item}/>
                                <WhiteSpace size="sm" />
                            </div>
                    )})
                    }
                    <WhiteSpace size="lg" />
                </WingBlank>
                <ButtomBar/>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    closable={true}
                    onClose={this.onClose('modal1')}
                    title="产品图片"
                    style={{width:swidth,height:sheight}}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={0}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.props.GetPicture.pics.map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: sheight*0.9 });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </Modal>
                </div>
        );
    }

}

const mapStateToProps = store => {
    return {
        GetProduct: store.GetProduct,
        GetPicture: store.GetPicture,
    }
  }
const withRedux=connect(mapStateToProps)(FindPage)


export default withRouter(withRedux)
