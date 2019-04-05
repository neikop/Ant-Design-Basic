import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';

class AppHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout.Header>
        <Row type='flex' justify='end' gutter={15}>
          <Col>Hello</Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default AppHeader;
