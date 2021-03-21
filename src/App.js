import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import get from "lodash.get"

import ScrollToTop from 'utils/ScrollToTop'

import {
  DefaultLayout,
  Messages
} from "avl-components/src"

import Routes from 'Routes';

const RoutesToRender = Routes.reduce((a, route, i) => {
  a.push(route);
  a.push(...get(route, "subMenus", []));
  return a;
}, []);

const App = props => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        { RoutesToRender.map((route, i) => (
            <DefaultLayout key={ i } { ...route } { ...props }
              menus={ Routes.filter(r => r.mainNav) }/>
          ))
        }
      </Switch>
      <Messages />
    </BrowserRouter>
  );
}
export default App
