const TestPage1 = {
  type: "div",
  children: [
    { type: "div",
      children: ["TEST 1"]
    }
  ]
}
const TestPage2 = {
  type: "div",
  children: [
    { type: "div",
      children: ["TEST 2"]
    }
  ]
}
const TestPage3 = {
  type: "div",
  children: [
    { type: "div",
      children: ["TEST 3"]
    }
  ]
}

const TestPages = [
  { path: "/test1",
    mainNav: true,
    name: "Test 1",
    exact: true,
    layoutSettings: {
      fixed: true,
      navBar: 'side',
      headerBar: false
    },
    component: TestPage1
  },
  { path: "/test2",
    mainNav: true,
    name: "Test 2",
    exact: true,
    layoutSettings: {
      fixed: true,
      navBar: 'side',
      headerBar: false
    },
    component: TestPage2
  },
  { path: "/test3",
    mainNav: true,
    name: "Test 3",
    exact: true,
    layoutSettings: {
      fixed: true,
      navBar: 'side',
      headerBar: false
    },
    component: TestPage3
  },
]
export default TestPages;
