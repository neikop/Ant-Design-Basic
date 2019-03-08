import React, {Component} from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {navigator} from 'navigator';

const MenuRouter = (items) =>
  items.flatMap((item) => {
    if (item.children) return [item, ...MenuRouter(item.children)];
    return item;
  });

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {MenuRouter(navigator.menu)
          .concat(navigator.router)
          .filter((item) => item.url && item.target)
          .map((item, index) => {
            return <Route exact key={index} path={item.url} component={item.target} />;
          })}
        <Redirect from='/' to='/home' />
      </Switch>
    );
  }
}

export default withRouter(AppRouter);
