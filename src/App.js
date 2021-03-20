import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ScrollToTop from 'utils/ScrollToTop'

import Routes from 'Routes';

import {
  DefaultLayout,
  Messages
} from "avl-components/src"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          { Routes.map((route, i) =>
              <DefaultLayout key={ i } { ...route } { ...this.props }
                menuItems={ route.menuItems || Routes.filter(r => r.mainNav) }/>
            )
          }
        </Switch>
        <Messages />
      </BrowserRouter>
    );
  }
}
export default App
