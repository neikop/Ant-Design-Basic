import React, {Component, Fragment} from 'react';

class Router extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {id} = this.props.match.params;
    return (
      <Fragment>
        Customer Update
        <div>{id}</div>
      </Fragment>
    );
  }
}

export default Router;
