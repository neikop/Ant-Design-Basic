import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import {navigator} from 'navigator';

const MenuCrumber = (items) => {
  let ret = {};
  items.forEach((item) => {
    if (item.children) ret = {...ret, ...MenuCrumber(item.children)};
    if (item.url) ret[item.url] = item.name;
  });
  return ret;
};

class BasicBreadcrumb extends Component {
  render() {
    const {location} = this.props;

    let selector = location.pathname.split('/');
    selector = selector.map((_, last) => selector.filter((_, index) => index <= last).join('/')).filter((i) => i);
    if (!selector.includes('/home')) selector = ['/home'].concat(selector);

    const allCrumber = MenuCrumber(navigator.menu);
    return (
      <Breadcrumb separator='>'>
        {selector
          .filter((url) => allCrumber[url])
          .map((url) => (
            <Breadcrumb.Item key={url}>
              <Link to={url}>{allCrumber[url]}</Link>
            </Breadcrumb.Item>
          ))}
      </Breadcrumb>
    );
  }
}

export default withRouter(BasicBreadcrumb);
