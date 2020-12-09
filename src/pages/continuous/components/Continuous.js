import React from "react"

import { Content } from "avl-components/src"

import StationsTable from "./StationsTable"

const Continuous = ({ stations }) =>
  <Content>
    <StationsTable stations={ stations }/>
  </Content>
export default Continuous;
