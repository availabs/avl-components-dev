import React from "react"

import get from "lodash.get"

const REGIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const shortWrapper = Component =>
  ({ falcor, falcorCache, ...props }) => {
    const [loading, setLoading] = React.useState(false),
      [region, setRegion] = React.useState(1);

    React.useEffect(() => {
      falcor.get(["hds", "regions", "byId", REGIONS, ["region", "name"]]);
    }, [falcor]);

    React.useEffect(() => {
      setLoading(true);
      falcor.get(["hds", "short", "stations", region, "length"])
        .then(res => {
          const length = +get(res, ["json", "hds", "short", "stations", region, "length"], 0);
          if (length) {
            return falcor.get(
              ["hds", "short", "stations", region, "byIndex",
                { from: 0, to: length - 1 }, 'array'
              ]
            )
          }
        }).then(() => setLoading(false));
    }, [falcor, region]);

    const stations = React.useMemo(() =>
      getStationsFromCache(region, falcorCache)
    , [region, falcorCache]);

    const [Region, regions] = REGIONS.reduce((a, c) => {
      const data = get(falcorCache, ["hds", "regions", "byId", c], null);
      if (data) {
        if (+data.region === +region) {
          a[0] = data;
        }
        a[1].push(data);
      }
      return a;
    }, [{}, []]);

    return (
      <Component { ...props } stations={ stations } loading={ loading }
        regions={ regions } setRegion={ setRegion } Region={ Region }/>
    )
  }

export default shortWrapper;

const getStationsFromCache = (region, falcorCache) => {
  const length = +get(falcorCache, ["hds", "short", "stations", region, "length"], 0);

  const stations = [];

  for (let i = 0; i < length; ++i) {
    const ref = get(falcorCache, ["hds", "short", "stations", region, "byIndex", i, "value"]),
      data = get(falcorCache, ref);
    if (data) {
      stations.push(...get(data, ["array", "value"], []));
    }
  }

  return stations;
}
