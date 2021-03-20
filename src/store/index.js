import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { /*falcorCache,*/ messages } from "avl-components/src"

// import reducers from "components/ams/reducers"

const FAKE_USER = {
  groups: ["AVAIL"],
  authLevel: 5,
  authed: true,
  id: 389,
  email: "very.very.long.fake.email@fake.com"
}
const Reducer = (state, action) => FAKE_USER

const reducer = combineReducers({
  // ...reducers,
  messages,
  // falcorCache
  user: Reducer
});

export default createStore(reducer, applyMiddleware(thunk))
