import React, {Component, Fragment} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import {navigator} from 'navigator';

const MenuReader = (items) =>
  items.map((item) => {
    if (item.title) return <Menu.ItemGroup key={item.name} title={item.name} />;
    if (item.children)
      return (
        <Menu.SubMenu
          key={item.url}
          title={
            <Fragment>
              <Icon type={item.icon || 'loading'} />
              <span>{item.name}</span>
            </Fragment>
          }>
          {MenuReader(item.children)}
        </Menu.SubMenu>
      );
    if (item.url)
      return (
        <Menu.Item key={item.url}>
          <Link to={item.url}>
            <Icon type={item.icon || 'loading'} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    return null;
  });

class BasicMenu extends Component {
  render() {
    const {location} = this.props;
    const selector = location.pathname.split('/');
    const selecter = selector.map((_, last) => selector.filter((_, index) => index <= last).join('/')).filter((i) => i);

    return (
      <Menu theme='dark' mode='inline' defaultSelectedKeys={selecter} defaultOpenKeys={selecter}>
        {MenuReader(navigator.menu)}
      </Menu>
    );
  }
}

export default withRouter(BasicMenu);
