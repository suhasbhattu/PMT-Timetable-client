import { useDispatch, useSelector } from "react-redux";
import AutoCompleteInput from "../AutoCompleteInput";
import "./PMTTimetableSearch.css";
import {
  selectDestinationStop,
  selectStartStop,
  selectStops,
  setDestinationStop,
  setStartStop,
} from "../../store/slice";

const PMTTimetableSearch = () => {
  const dispatch = useDispatch();
  const busStops = useSelector(selectStops);
  const startStopId = useSelector(selectStartStop);
  const destinationStopId = useSelector(selectDestinationStop);

  const changeStartStop = (stopId: string) => {
    dispatch(setStartStop(stopId));
  };

  const changeDestinationStop = (stopId: string) => {
    dispatch(setDestinationStop(stopId));
  };
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
        <button className="searchButton">Search</button>
      </div>
      <div className="orRow">
        <span className="orRow-text">OR</span>
      </div>
      <div className="searchByBusRoute">
        <AutoCompleteInput
          placeholder="Enter Route Number"
          list={[]}
          selectedStopId=""
          onChange={() => {}}
        />
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default PMTTimetableSearch;
