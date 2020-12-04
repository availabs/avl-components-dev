import Landing from "pages/Landing"
import NoMatch from "pages/404"

import TestPages from "./pages/testpages"

const Routes = [
  Landing,
  ...TestPages,
  NoMatch
]

export default Routes
