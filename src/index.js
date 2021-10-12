import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { API_HOST, PROJECT_THEME } from 'config'

import get from "lodash.get"

import { Provider } from 'react-redux';
import store from 'store';
import {
  Themes,
  FalcorProvider,
  ThemeContext,
  falcorGraph,
  ComponentProvider,
  // addComponents,
  // addWrappers
} from "avl-components/src"

import reportWebVitals from './reportWebVitals';

// import DmsComponents from "components/dms"
// import DmsWrappers from "components/dms/wrappers"

// import AmsComponents from "components/ams"
// import AmsWrappers, { enableAuth } from "components/ams/wrappers"

// addComponents(DmsComponents);
// addWrappers(DmsWrappers);
//
// addComponents(AmsComponents);
// addWrappers(AmsWrappers);

import 'styles/tailwind.css';

// const AuthEnabledApp = enableAuth(App, API_HOST);

console.log(Themes)

ReactDOM.render(
  <React.StrictMode>
   	<Provider store={ store }>
  		<FalcorProvider falcor={ falcorGraph(API_HOST) }>
        <ComponentProvider>
        { /*
          <ComponentProvider
          	TopUserMenu={ MyTopUserMenu } <-- This will override the ENTIRE menu.
                                              Unless your custom component used the "useComponents" hook,
                                              there would be no point overriding anything else.
            TopUserMenuControl={ MyTopUserMenuControl } <-- This overrides just the component that is clicked to open the menu.

          	SideUserMenu={ MySideUserMenu } <-- This will override the ENTIRE menu.
                                              Unless your custom component used the "useComponents" hook,
                                              there would be no point overriding anything else.
            SideUserMenuControl={ MySideUserMenuControl } <-- This overrides just the component that is clicked to open the menu.

          	UserMenuItem={ MyUserMenuItem } <-- This overrides the component used for menu items.
            UserMenuSeparator={ MyUserMenuSeparator } <-- This overrides the component used for separating menu items.
          	UserMenuItems={ MyUserMenuItems }> <-- This changes the default list of items that appears in the user menu.

            All of these are defined in: avl-components/src/components/Header/UserMenu
          */
        }
          <ThemeContext.Provider value={ get(Themes, PROJECT_THEME, Themes["AVL_THEME"]) }>
    	    	<App />
            { /*<AuthEnabledApp />*/ }
          </ThemeContext.Provider>
        </ComponentProvider>
      </FalcorProvider>
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
