import React from "react"

import {
  Content,
  Table,
  GridTable,
  BooleanInput,
  Button,
  MarkdownInput,
  Select,
  DndList,
  useDndList,
  useTheme,
  Legend, LegendTools,
  ColorInput,
  getColorRange,
  CollapsibleSidebar
} from "avl-components/src"

import TestConfig from "./test-config"

const Columns = [
  { id: "column1",
    accessor: d => d.column1,
    Header: "Column 1",
    Cell: ({ value }) => `value ${ value }`,
    colSpan: 3
  },
  { id: "column2",
    accessor: d => d.column2,
    Header: "Column 2",
    Cell: ({ value }) => `value ${ value }`,
    colSpan: 2
  },
  { id: "column3",
    accessor: d => d.column3,
    Header: "Column 3",
    Cell: ({ value }) => `value ${ value }`,
    colSpan: 2
  }
]

const makeSomeData = (rows = 50) => {
  const data = [];
  for (let i = 0; i < rows; ++i) {
    data.push({
      column1: Math.ceil(Math.random() * 10) + 10,
      column2: Math.ceil(Math.random() * 10) + 10,
      column3:Math.ceil(Math.random() * 10) + 10,
      expand: [{
        test: "TEST EXPAND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      }]
    })
  }
  return data;
}

const OptionComponent = ({ option, onClick }) =>
  <div onClick={ onClick }>{ option.value }!!!</div>

const OPTIONS = [
  { key: "one", value: "value one", OptionComponent },
  { key: "two", value: "value two", OptionComponent },
  { key: "three", value: "value three", OptionComponent },
  { key: "four", value: "value four", OptionComponent }
]

const Row = ({ children, ...props }) => {
  return (
    <a { ...props } href="http://www.example.com">
      { children }
    </a>
  )
}
const ExpandRow = ({ values }) => {
  return (
    <div>
      { values[0].test }
    </div>
  )
}

const md = '# test 2\n```\ntesting testing testing\n```\n> testing'

const TableTest = ({ children }) => {
  const [value, setValue] = React.useState(false);
  const [markdown, setMarkdown] = React.useState(md);
  const [option, setOption] = React.useState(null);
  const [color, setColor] = React.useState(null);

  const theme = useTheme();

  const [items, setItems] = React.useState(OPTIONS.slice())

  const [pageSize, setPageSize] = React.useState(10);

  const onDrop = useDndList(items, setItems);

  const tableData = makeSomeData();

  const [legend, setLegend] = React.useState({
    type: "quantile",
    types: ["quantile", "quantize"],
    domain: [1, 2, 10, 16, 27, 54, 89, 123, 345],
    range: getColorRange(5, "BrBG"),
    format: ",.1f"
  })
  const updateLegend = React.useCallback(update => {
    setLegend(legend => ({ ...legend, ...update }));
  }, [])

  return (
    <Content className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-y-4">

        { children }

        <div style={ { height: "500px", position: "relative" } }>
          <CollapsibleSidebar togglePosition="middle">
            <div className={ `${ theme.sidebarBg } p-2 rounded` }
              style={ { minHeight: "100%" } }>
              <div className="grid gap-y-2">
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
                <div className={ `${ theme.accent2 } h-32 rounded` }/>
              </div>
            </div>
          </CollapsibleSidebar>
        </div>

        <div>
          <ColorInput value={ color }
            onChange={ setColor }/>
        </div>

        <div className="w-72">
          <ColorInput value={ color }
            onChange={ setColor }
            showPreview={ false }
            showLabels={ false }
            showRgb={ false }
            small/>
        </div>

        <div className="bg-gray-200 p-4 rounded">
          <Legend { ...legend }/>
          <LegendTools onChange={ updateLegend }
            range={ legend.range }
            type={ legend.type }
            types={ legend.types }/>
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

        <Select options={ [5, 10, 15] }
          value={ pageSize }
          onChange={ setPageSize }/>

        <GridTable Row={ Row }
          pageSize={ pageSize }
          columns={ Columns }
          ExpandRow={ ExpandRow }
          data={ tableData }/>

        <Table
          pageSize={ pageSize }
          columns={ Columns }
          ExpandRow={ ExpandRow }
          data={ tableData }/>

      </div>
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
  component: {
    type: TableTest,
    children: [
      { type: TestConfig,
        props: { test: "PROP" },
        children: [() => <div>????????????????</div>]
      }
    ]
  }
}
export default table;
