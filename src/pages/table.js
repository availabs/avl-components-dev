import React from "react"

import {
  Content,
  Table,
  BooleanInput,
  Button,
  MarkdownInput,
  Select,
  DndList,
  useDndList,
  useTheme,
  Legend
} from "avl-components/src"

const Columns = [
  { id: "column1",
    accessor: d => d.column1,
    Header: "Column 1",
    Cell: ({ value }) => `value ${ value }`
  },
  { id: "column2",
    accessor: d => d.column2,
    Header: "Column 2",
    Cell: ({ value }) => `value ${ value }`
  },
  { id: "column3",
    accessor: d => d.column3,
    Header: "Column 3",
    Cell: ({ value }) => `value ${ value }`
  }
]

const makeSomeData = (rows = 50) => {
  const data = [];
  for (let i = 0; i < rows; ++i) {
    data.push({
      column1: Math.ceil(Math.random() * 10) + 10,
      column2: Math.ceil(Math.random() * 10) + 10,
      column3:Math.ceil(Math.random() * 10) + 10
    })
  }
  return data;
}

const OPTIONS = [
  { key: "one", value: "value one" },
  { key: "two", value: "value two" },
  { key: "three", value: "value three" },
  { key: "four", value: "value four" }
]

const TableTest = () => {
  const [value, setValue] = React.useState(false);
  const [markdown, setMarkdown] = React.useState("");
  const [option, setOption] = React.useState(null);

  const theme = useTheme();

  const [items, setItems] = React.useState(OPTIONS.slice())

  const onDrop = useDndList(items, setItems);

  return (
    <Content>

      <div>
        <Legend domain={ [5, 10, 20, 40, 80, 160] } size={ 5 }
          range={ ["red", "orange", "yellow", "green", "blue", "indigo", "violet"] }
          type="threshold"/>
      </div>

      <DndList onDrop={ onDrop } className={`pb-0 ${theme.bgSuccess}`}>
        { items.map((o, i) => (
          <div key={ o.key } className="bg-gray-200 rounded-lg">
            <div className={`
              border-2 bg-opacity-25 ${theme.bgSuccess} px-4 py-1 rounded-lg mb-2
            `}>
              { o.value }
            </div>
          </div>
        ))}
      </DndList>

      <Select autoFocus
        options={ OPTIONS }
        accessor={ o => o.value }
        value={ option }
        onChange={ setOption }
        multi={ false }/>

      <BooleanInput value={ value } onChange={ setValue }/>

      <Button onClick={ e => {} } block showConfirm>
        button
      </Button>

      <MarkdownInput
        value={ markdown }
        onChange={ setMarkdown }/>

      <Table initialPageSize={ 20 }
        columns={ Columns }
        data={ makeSomeData() }/>

    </Content>
  )
}

const menuItems = [
  { path: "/continuous",
    icon: null,
    name: "Continuous Counts"
  },
  { path: "/short",
    icon: null,
    name: "Short Counts"
  },
  { path: "/table",
    icon: null,
    name: "Table Test"
  }
]

const table = {
  path: "/table",
  mainNav: true,
  name: "Table Test",
  exact: true,
  menuItems,
  layoutSettings: {
    fixed: true,
    navBar: 'top',
    headerBar: false
  },
  component: TableTest
}
export default table;
