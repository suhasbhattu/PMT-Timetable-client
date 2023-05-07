import PMTTimetableSearch from "../PMTTimetableSearch";
import ResultRoutesList from "../ResultRoutesList";
import RouteStopsList from "../RouteStopsList";
import "./App.css";

const App = () => {
  return (
    <div className="PMT-Timetable-App">
      <div className="PMT-Timetable-App-header">
        <span className="PMT-Timetable-App-header-name">PMT Timetable</span>
      </div>
      <div className="PMT-Timetable-App-content">
        <PMTTimetableSearch />
        <div className="AppContent">
          <ResultRoutesList />
          <RouteStopsList />
        </div>
      </div>
    </div>
  );
};

export default App;
