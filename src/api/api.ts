import axios from "axios";

const getStops = () => {
  const result = axios.get("http://localhost:5000/api/stops");
  return result;
};

const getRoutes = () => {
  const result = axios.get("http://localhost:5000/api/routes");
  return result;
};

const getRouteById = (id: string) => {
  const result = axios.get(`http://localhost:5000/api/routes/${id}`);
  return result;
};

const getRoutesForStops = async (stops: any) => {
  const result = await axios.post("http://localhost:5000/api/buses", stops);
  return result;
};

const getStopsForRoutes = async (id: string) => {
  const result = await axios.get(`http://localhost:5000/api/routes/${id}/stops`);
  return result;
};

export { getStops, getRoutes, getRouteById, getRoutesForStops, getStopsForRoutes };
