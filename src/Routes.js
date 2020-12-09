import Landing from "pages/Landing"
import NoMatch from "pages/404"

import Continuous from "pages/continuous"

import TestPages from "./pages/testpages"
import TableTest from "./pages/table"

const Routes = [
  Landing,
  Continuous,
  TableTest,
  ...TestPages,
  NoMatch
]

export default Routes
