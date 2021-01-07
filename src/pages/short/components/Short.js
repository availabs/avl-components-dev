import React from "react"

import { Content, Select } from "avl-components/src"

import StationsTable from "./StationsTable"

const Short = ({ stations, setRegion, Region, regions }) => {
  return (
    <Content>
      <Select options={ regions.sort((a, b) => a.region - b.region) }
        accessor={ v => `(${ v.region }) ${ v.name }` }
        searchable={ false } removable={ false } multi={ false }
        value={ Region } onChange={ v => setRegion(v.region) }/>
      <StationsTable stations={ stations }/>
    </Content>
  )
}
export default Short;
