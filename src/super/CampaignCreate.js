import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Router extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        Create Campaign
        <Link to='/campaign/1/update'>Update</Link>
      </Fragment>
    );
  }
}

export default Router;
