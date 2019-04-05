import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Layout} from 'antd';
import MenuSidebar from 'components/MenuSidebar';
import AppHeader from 'components/AppHeader';
import Breadcrumb from 'components/Breadcrumb';
import AppRouter from 'components/AppRouter';
import './App.css';

const {Footer, Sider, Content} = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChangeCallapse = (collapsed) => {
    this.setState({collapsed});
  };

  render() {
    const {collapsed} = this.state;
    return (
      <Layout>
        <Sider width={240} collapsible collapsed={collapsed} onCollapse={this.handleChangeCallapse}>
          <div className='logo'>
            <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
            <span>Ant Design Basic</span>
          </div>
          <MenuSidebar />
        </Sider>
        <Layout>
          <AppHeader />
          <Content>
            <Breadcrumb />
            <AppRouter />
          </Content>
          <Footer>
            <code>Ant Design Basic ©2019 Created by Neikop</code>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
