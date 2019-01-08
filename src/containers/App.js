import React, {Component} from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Layout} from 'antd';
import Router from 'containers/Router';
import MenuSidebar from 'components/MenuSidebar';
import Breadcrumb from 'components/Breadcrumb';
import './App.css';

const {Header, Footer, Sider, Content} = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={(collapsed) => this.setState({collapsed})}>
          <div className='logo' />
          <MenuSidebar />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <Breadcrumb />
            <Switch>
              <Route path='/home' component={Router} />
              <Route path='/campaign' component={Router} />
              <Route path='/report' component={Router} />
              <Route path='/customer' component={Router} />
              <Route path='/ticket' component={Router} />
              <Redirect from='/' to='/home' />
            </Switch>
          </Content>
          <Footer>Ant Design Basic ©2019 Created by Neikop</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
