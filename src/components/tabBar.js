import { TabBar} from 'antd-mobile';
import React, { Component } from 'react';
import {FaHeartO,FaPaperPlaneO,FaUser} from 'react-icons/lib/fa'
import { withRouter } from "react-router-dom";
class MyTabBar extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props
        var selectedTab;
        switch (location.pathname) {
            case '/':
                selectedTab = 'findTab'
                break
            case '/find':
                selectedTab = 'findTab'
                break
            case '/favorite':
                selectedTab = 'favoriteTab'
                break
            case '/mine':
                selectedTab = 'mineTab'
                break
            default:
                selectedTab = 'findTab'
                break

        }
    this.state = {
      selectedTab: selectedTab,
    };
  }
  render() {
    return (
      <div style={{ zIndex:99999,position: 'fixed', height: '60px', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="收藏"
            icon={<FaHeartO style={{fontSize:30}}/>}
            selectedIcon={<FaHeartO style={{fontSize:30,color:'dodgerblue'}}/>}
            selected={this.state.selectedTab === 'favoriteTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'favoriteTab',
              });
              this.props.history.push('/favorite')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<FaPaperPlaneO style={{fontSize:30}}/>}
            selectedIcon={<FaPaperPlaneO style={{fontSize:30,color:'dodgerblue'}}/>}
            title="发现"
            selected={this.state.selectedTab === 'findTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'findTab',
              });
              this.props.history.push('/find')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<FaUser style={{fontSize:30}}/>}
            selectedIcon={<FaUser style={{fontSize:30,color:'dodgerblue'}}/>}
            title="我的"
            selected={this.state.selectedTab === 'mineTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'mineTab',
              });
              this.props.history.push('/mine')
            }}
          >
          </TabBar.Item>
         
        </TabBar>
      </div>
    );
  }
}
export default withRouter(MyTabBar)