import React from "react"

import { Table, useTheme } from "avl-components/src"

const Columns = [
  { id: "stationId",
    accessor: d => d.stationId,
    Header: "Station ID"
  },
  { id: "region",
    accessor: d => d.region,
    Header: "Region"
  },
  { id: "mpo",
    accessor: d => d.mpo,
    Header: "MPO"
  }
];

const StationsTable = ({ stations }) => {
  const theme = useTheme();
  return !stations.length ? null : (
    <div className={ `${ theme.headerBg } rounded-md pb-6` }>
      <Table columns={ Columns }
        initialPageSize={ 15 }
        data={ stations }
        sortBy="muni"/>
    </div>
  )
}
export default StationsTable;
