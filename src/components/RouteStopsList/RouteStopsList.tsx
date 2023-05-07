import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectRouteStops } from "../../store/slice";

import "./RouteStopsList.css";

const RouteStopsList = () => {
  const stops = useSelector(selectRouteStops);

  const getStopList = () => {
    return stops?.map((stop) => {
      return (
        <li key={stop.id} className="AppRouteStopsList-Item">
          <div className="AppRouteStopsList-ItemName">
            <span className="AppRouteStopsList-ItemNameText">
              {stop.name} -{" "}
            </span>
            <span className="AppRouteStopsList-ItemLocalizedNameText">
              {stop.localizedName}
            </span>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="AppRouteStopsList">
      {stops && stops.length > 0 && (
        <Fragment>
          <div className="AppResultRoutesListHeader">
            <span>Bus stops for selected route</span>
          </div>
          <ul className="AppRouteStopsList-List">{getStopList()}</ul>
        </Fragment>
      )}
    </div>
  );
};

export default RouteStopsList;