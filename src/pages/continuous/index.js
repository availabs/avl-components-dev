import ContinuousComponent from "./components/Continuous"
import continuousWrapper from "./wrappers/continuous"
import { SideUserMenu }  from "avl-components/src"


const menuItems = [
  { path: "/continuous",
    name: "Continuous Counts",
    subMenus: [
      { path: "/sub1",
        name: "Sub 1"
      },
      { path: "/sub2",
        name: "Sub 2"
      },
      { path: "/sub3",
        name: "Sub 3"
      }
    ]
  },
  { path: "/short",
    name: "Short Counts"
  },
  { path: "/table",
    name: "Table Test"
  }
]

const continuous = {
  path: "/continuous",
  menuItems,
  subMenus: [
    { path: "/sub1",
      name: "Sub 1"
    },
    { path: "/sub2",
      name: "Sub 2"
    },
    { path: "/sub3",
      name: "Sub 3"
    }
  ],
  mainNav: true,
  name: "Continuous Counts",
  exact: true,
  // authLevel: 0,
  layoutSettings: {
    fixed: true,
    navBar: 'side',
    userMenu : 'nav',
    headerBar: {
      title: "Continuous Counts"
    }
  },
  component: {
    type: ContinuousComponent,
    wrappers: [
      "show-loading",
      continuousWrapper
    ]
  }
}
export default continuous;
