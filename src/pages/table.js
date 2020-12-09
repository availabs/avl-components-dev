import React from "react"

import { Content, Table } from "avl-components/src"

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

const TableTest = () => {
  return (
    <Content>
      <Table columns={ Columns }
        data={ makeSomeData() }/>
    </Content>
  )
}

const table = {
  path: "/table",
  mainNav: true,
  name: "Table Test",
  exact: true,
  layoutSettings: {
    fixed: true,
    navBar: 'top',
    headerBar: false
  },
  component: TableTest
}
export default table;
