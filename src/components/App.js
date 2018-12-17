import React, {Component} from 'react';
import {withRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import {Layout, Breadcrumb} from 'antd';
import Router from 'containers/Router';
import BasicMenu from './BasicMenu';
import './App.css';

const {Header, Footer, Sider, Content} = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    const breadcrumbNameMap = {
      '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail',
    };

    const {location} = this.props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });

    return (
      <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <BasicMenu />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <Breadcrumb separator='>'>
              <Breadcrumb.Item key='home'>
                <Link to='/'>Home</Link>
              </Breadcrumb.Item>
              {extraBreadcrumbItems}
            </Breadcrumb>
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
