import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRouteById,
  getRoutes,
  getRoutesForStops,
  getStops,
} from "../../api/api";
import AutoCompleteInput from "../AutoCompleteInput";
import {
  BusRoute,
  BusStop,
  selectDestinationStop,
  selectRouteNumber,
  selectRoutes,
  selectStartStop,
  selectStops,
  setDestinationStop,
  setResultRoutes,
  setRouteNumber,
  setRoutes,
  setStartStop,
  setStops,
} from "../../store/slice";

import "./PMTTimetableSearch.css";

const PMTTimetableSearch = () => {
  const dispatch = useDispatch();
  const busStops = useSelector(selectStops);
  const busRoutes = useSelector(selectRoutes);
  const startStopId = useSelector(selectStartStop);
  const destinationStopId = useSelector(selectDestinationStop);
  const routeNumber = useSelector(selectRouteNumber);

  const changeStartStop = (stopId: string) => {
    dispatch(setStartStop(stopId));
  };

  const changeDestinationStop = (stopId: string) => {
    dispatch(setDestinationStop(stopId));
  };

  const changeRouteNumber = (routeNumber: string) => {
    dispatch(setRouteNumber(routeNumber));
  };

  const onFindBusClick = () => {
    getRoutesForStops({
      startStop: startStopId,
      destinationStop: destinationStopId,
    }).then((result) => {
      const resultRoutes = result.data.routes.map((route: any) => {
        return {
          id: route.id,
          name: route.name,
          busNumber: route.bus_number,
          reverseName: route.reverse_name,
          localizedName: route.localized_name,
        };
      });
      dispatch(setResultRoutes(resultRoutes));
    });
  };

  const onFindRouteClick = () => {
    getRouteById(routeNumber).then((result) => {
      const route = result.data;
      const resultRoutes: BusRoute[] = [
        {
          id: route.id,
          name: route.name,
          busNumber: route.bus_number,
          localizedName: route.localized_name,
          __type: "route",
        },
      ];
      dispatch(setResultRoutes(resultRoutes));
    });
  };

  useEffect(() => {
    const promises = [getStops(), getRoutes()];
    const responses = Promise.all(promises);
    responses.then((result) => {
      if (result[0].status === 200) {
        let stops = result[0].data.items;
        stops.sort((a: BusStop, b: BusStop) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        stops = stops.map((stop: any) => {
          return {
            id: stop.id,
            name: stop.name,
            localizedName: stop.localized_name,
          };
        });
        dispatch(setStops(stops));
      }
      if (result[1].status === 200) {
        let routes = result[1].data.items;
        routes = routes.map((route: any) => {
          return {
            id: route.id,
            name: route.name,
            busNumber: route.bus_number,
            localizedName: route.localized_name,
          };
        });
        dispatch(setRoutes(routes));
      }
    });
  }, [dispatch]);

  return (
    <div className="PMT-Timetable-PMTTimetableSearch">
      <div className="searchByBusStop">
        <AutoCompleteInput
          placeholder="Enter Start Bus Stop"
          list={busStops ?? []}
          selectedStopId={startStopId}
          onChange={changeStartStop}
        />
        <AutoCompleteInput
          placeholder="Enter Destination Bus Stop"
          list={busStops ?? []}
          selectedStopId={destinationStopId}
          onChange={changeDestinationStop}
        />
        <button className="searchButton" onClick={onFindBusClick}>
          Search
        </button>
      </div>
      <div className="orRow">
        <span className="orRow-text">OR</span>
      </div>
      <div className="searchByBusRoute">
        <AutoCompleteInput
          placeholder="Enter Route Number"
          list={busRoutes ?? []}
          selectedStopId={routeNumber}
          onChange={changeRouteNumber}
        />
        <button className="searchButton" onClick={onFindRouteClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default PMTTimetableSearch;
