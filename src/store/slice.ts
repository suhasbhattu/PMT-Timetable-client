import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface BusStop {
  id: string;
  name: string;
  localizedName: string;
}

export interface BusRoute {
  id: string;
  name: string;
  busNumber: string;
  localizedName: string;
}

export interface AppState {
  stops: BusStop[] | null;
  startStop: string;
  destinationStop: string;
  resultRoutes: BusRoute[] | null;
  routeStops: BusStop[] | null;
}

const initialState: AppState = {
  stops: null,
  startStop: "",
  destinationStop: "",
  resultRoutes: null,
  routeStops: null,
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
    setResultRoutes: (state, action: PayloadAction<BusRoute[]>) => {
      state.resultRoutes = action.payload;
    },
    setRouteStops: (state, action: PayloadAction<BusStop[]>) => {
      state.routeStops = action.payload;
    },
  },
});

export const {
  setStops,
  setStartStop,
  setDestinationStop,
  setResultRoutes,
  setRouteStops,
} = appSlice.actions;

export const selectStops = (state: RootState) => state.stops;
export const selectStartStop = (state: RootState) => state.startStop;
export const selectDestinationStop = (state: RootState) =>
  state.destinationStop;
export const selectResultRoutes = (state: RootState) => state.resultRoutes;
export const selectRouteStops = (state: RootState) => state.routeStops;

export default appSlice.reducer;
