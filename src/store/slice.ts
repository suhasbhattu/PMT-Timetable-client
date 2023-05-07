import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface BusStop {
  id: string;
  name: string;
  localizedName: string;
  __type: 'stop';
}

export interface BusRoute {
  id: string;
  name: string;
  busNumber: string;
  localizedName: string;
  __type: 'route';
}

export interface AppState {
  stops: BusStop[] | null;
  startStop: string;
  destinationStop: string;
  routeNumber: string;
  resultRoutes: BusRoute[] | null;
  routeStops: BusStop[] | null;
  routes: BusRoute[] | null;
}

const initialState: AppState = {
  stops: null,
  startStop: "",
  destinationStop: "",
  routeNumber: "",
  resultRoutes: null,
  routeStops: null,
  routes: null,
};

export const appSlice = createSlice({
  name: "pmtTimetable",
  initialState,
  reducers: {
    setStops: (state, action: PayloadAction<BusStop[]>) => {
      state.stops = action.payload;
    },
    setStartStop: (state, action: PayloadAction<string>) => {
      state.startStop = action.payload;
    },
    setDestinationStop: (state, action: PayloadAction<string>) => {
      state.destinationStop = action.payload;
    },
    setRouteNumber: (state, action: PayloadAction<string>) => {
      state.routeNumber = action.payload;
    },
    setResultRoutes: (state, action: PayloadAction<BusRoute[]>) => {
      state.resultRoutes = action.payload;
    },
    setRouteStops: (state, action: PayloadAction<BusStop[]>) => {
      state.routeStops = action.payload;
    },
    setRoutes: (state, action: PayloadAction<BusRoute[]>) => {
      state.routes = action.payload;
    },
  },
});

export const {
  setStops,
  setStartStop,
  setDestinationStop,
  setRouteNumber,
  setResultRoutes,
  setRouteStops,
  setRoutes,
} = appSlice.actions;

export const selectStops = (state: RootState) => state.stops;
export const selectStartStop = (state: RootState) => state.startStop;
export const selectDestinationStop = (state: RootState) =>
  state.destinationStop;
  export const selectRouteNumber = (state: RootState) => state.routeNumber;
export const selectResultRoutes = (state: RootState) => state.resultRoutes;
export const selectRouteStops = (state: RootState) => state.routeStops;
export const selectRoutes = (state: RootState) => state.routes;

export default appSlice.reducer;
