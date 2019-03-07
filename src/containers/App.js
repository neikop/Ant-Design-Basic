import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {Layout} from 'antd';
import MenuSidebar from 'components/MenuSidebar';
import Breadcrumb from 'components/Breadcrumb';
import {navigator} from 'navigator';

import './App.css';

const {Header, Footer, Sider, Content} = Layout;

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
          <div className='logo' />
          <MenuSidebar />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <Breadcrumb />
            <Switch>
              {navigator.router.map((item, index) => (
                <Route exact key={index} path={item.url} component={item.target} />
              ))}
            </Switch>
          </Content>
          <Footer>Ant Design Basic ©2019 Created by Neikop</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
