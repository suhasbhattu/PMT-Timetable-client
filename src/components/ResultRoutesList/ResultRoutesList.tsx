import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResultRoutes, setRouteStops } from "../../store/slice";
import { getStopsForRoutes } from "../../api/api";

import "./ResultRoutesList.css";

const ResultRoutesList = () => {
  const resultRoutes = useSelector(selectResultRoutes);
  const dispatch = useDispatch();

  const onListItemClick = (id: string) => {
    getStopsForRoutes(id).then((result) => {
      const stops = result.data.items.map((stop: any) => {
        return {
          id: stop.id,
          name: stop.name,
          localizedName: stop.localized_name,
        };
      });
      dispatch(setRouteStops(stops));
    });
  };

  const prepareRoutesList = () => {
    return resultRoutes?.map((route) => {
      return (
        <li
          key={route.id}
          className="AppResultRoutesList-route"
          onClick={() => {
            onListItemClick(route.id);
          }}
        >
          <div className="AppResultRoutesList-layout">
            <div className="AppResultRoutesList-BusNumber">
              <span className="AppResultRoutesList-BusNumber-Text">
                {route.busNumber}
              </span>
            </div>
            <div className="AppResultRoutesList-BusDetails">
              <span className="AppResultRoutesList-BusName">{route.name}</span>
              <span className="AppResultRoutesList-BusLocalizedName">
                {route.localizedName}
              </span>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="AppResultRoutesList">
      {resultRoutes && resultRoutes.length > 0 && (
        <Fragment>
          <div className="AppResultRoutesListHeader">
            <span>Buses found for this route</span>
          </div>
          <ul className="AppResultRoutesListItems">{prepareRoutesList()}</ul>
        </Fragment>
      )}
    </div>
  );
};

export default ResultRoutesList;