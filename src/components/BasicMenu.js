import React, {Component, Fragment} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import navigator from 'navigator';

const readMenu = (items) =>
  // eslint-disable-next-line
  items.map((item, index) => {
    if (item.title)
      return (
        <Menu.Item key={item.name} className='ant-menu-item-header'>
          <span>{item.name}</span>
        </Menu.Item>
      );
    if (item.children)
      return (
        <Menu.SubMenu
          key={item.sub}
          title={
            <Fragment>
              <Icon type={item.icon || 'loading'} />
              <span>{item.name}</span>
            </Fragment>
          }>
          {readMenu(item.children)}
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
  });

class MenuX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: props.location.pathname.split('/'),
    };
  }

  render() {
    const {location} = this.props;
    const selecter = location.pathname.split('/').map((_, last) =>
      location.pathname
        .split('/')
        .filter((_, index) => index <= last)
        .join('/'),
    );

    return (
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={selecter}
        openKeys={this.state.openKeys}
        onOpenChange={(openKeys) => this.setState({openKeys})}>
        {readMenu(navigator.menu)}
      </Menu>
    );
  }
}

export default withRouter(MenuX);
