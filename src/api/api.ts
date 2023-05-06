import axios from "axios";

const getStops = () => {
  const result = axios.get("/api/stops");
  return result;
};

export { getStops };
