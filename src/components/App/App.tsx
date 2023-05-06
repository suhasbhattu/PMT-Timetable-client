import PMTTimetableSearch from "../PMTTimetableSearch";
import "./App.css";

const App = () => {
  return (
    <div className="PMT-Timetable-App">
      <div className="PMT-Timetable-App-header">
        <span className="PMT-Timetable-App-header-name">PMT Timetable</span>
      </div>
      <div className="PMT-Timetable-App-content">
        <PMTTimetableSearch/>
      </div>
    </div>
  );
};

export default App;
