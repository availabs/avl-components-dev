import React from "react"

import { useParams } from "react-router-dom"

import get from "lodash.get"

import { Content, Select } from "avl-components/src"

const Test1 = ({ falcor, falcorCache }) => {
  const [geoid, setGeoid] = React.useState(["36001"]),
    [county, setCounty] = React.useState([]);

  const { geoid: fromParams } = useParams();
  React.useEffect(() => {
    if (fromParams) {
      setGeoid(fromParams.split("_"));
    }
  }, [fromParams]);

  React.useEffect(() => {
    falcor.get(["geo", "36", "counties"])
      .then(res => {
        const counties = get(res, ["json", "geo", "36", "counties"]);
        return falcor.get(["geo", counties, "name"]);
      })
  }, [falcor]);

  const options = React.useMemo(() => {
    const counties = get(falcorCache, ["geo", "36", "counties", "value"], []);
    return counties.map(geoid => {
      const name = get(falcorCache, ["geo", geoid, "name"]);
      return { geoid, name };
    }).sort((a, b) => get(a, "name", "").localeCompare(get(b, "name", "")));
  }, [falcorCache]);

  return (
    <div className="py-8 mx-auto max-w-2xl w-full">
      <div className="mb-1">
        Geoid: { JSON.stringify(geoid) }
      </div>
      <Select options={ options }
        accessor={ d => d.name }
        multi={ true } value={ geoid }
        onChange={ setGeoid }
        valueAccessor={ d => d.geoid }/>

      <div className="my-2">
        County: { JSON.stringify(county) }
      </div>
      <Select options={ options }
        accessor={ d => d.name }
        multi={ true } value={ county }
        onChange={ setCounty }/>
    </div>
  )
}

const TestPage1 = {
  type: Test1,
  wrappers: ["avl-falcor"]
}
const TestPage2 = {
  type: Content,
  children: [
    { type: "div",
      children: ["TEST 2"]
    }
  ]
}
const TestPage3 = {
  type: Content,
  children: [
    { type: "div",
      children: ["TEST 3"]
    }
  ]
}
const TestPage4 = {
  type: Content,
  children: [
    { type: "div",
      children: ["TEST 4"]
    }
  ]
}

const TestPages = [
  { path: ["/test1", "/test1/:geoid"],
    mainNav: true,
    name: "Test 1",
    exact: true,
    layoutSettings: {
      navBar: 'top',
      headerBar: false
    },
    component: TestPage1,
    subMenus: [
      { path: "/test2",
        mainNav: true,
        name: "Test 2",
        exact: true,
        layoutSettings: {
          navBar: 'top',
          headerBar: false
        },
        component: TestPage2
      },
      { path: "/test3",
        mainNav: true,
        name: "Test 3",
        exact: true,
        layoutSettings: {
          navBar: 'top',
          headerBar: false
        },
        component: TestPage3
      },
      { path: "/test4",
        mainNav: true,
        name: "Testing Longer 4",
        exact: true,
        layoutSettings: {
          navBar: 'top',
          headerBar: false
        },
        component: TestPage4
      }
    ]
  }
]
export default TestPages;
