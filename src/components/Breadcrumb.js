import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import {navigator} from 'navigator';

const breadcrumber = (items) => {
  let ret = {};
  items.forEach((item) => {
    if (item.children) ret = {...ret, ...breadcrumber(item.children)};
    if (item.url) ret[item.url] = item.name;
  });
  return ret;
};

class BasicBreadcrumb extends Component {
  render() {
    const {location} = this.props;
    const selector = location.pathname.split('/');
    const selecter = selector.map((_, last) => selector.filter((_, index) => index <= last).join('/')).filter((i) => i);

    const breadcrumbItems = breadcrumber(navigator.menu);
    return (
      <Breadcrumb separator='>'>
        {selecter.map((url) => (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbItems[url]}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
}

export default withRouter(BasicBreadcrumb);
