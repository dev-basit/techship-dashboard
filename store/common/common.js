import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  clients: [],
  countries: [],
  drivers: [],
  orderCreationTypes: [],
  orderStatuses: [],
  orderTypes: [],
  partners: [],
  pickers: [],
  subStatuses: [],
  tiers: [],
  users: [],
  warehouses: [],
  isLoading: false,
  isError: true,
};

export const slice = createSlice({
  name: "Common",
  initialState,
  reducers: {
    citiesAdded: (common, action) => {
      common.cities = action.payload;
    },

    clientsAdded: (common, action) => {
      common.clients = action.payload;
    },

    countriesAdded: (common, action) => {
      common.countries = action.payload;
    },

    driversAdded: (common, action) => {
      common.drivers = action.payload;
    },

    orderCreationTypesAdded: (common, action) => {
      common.orderCreationTypes = action.payload;
    },

    partnersAdded: (common, action) => {
      common.partners = action.payload;
    },

    pickersAdded: (common, action) => {
      common.pickers = action.payload;
    },

    subStatusesAdded: (common, action) => {
      common.subStatuses = action.payload;
    },

    orderStatusesAdded: (common, action) => {
      common.orderStatuses = action.payload;
      common.lastFetched = Date.now();
    },

    orderTypesAdded: (common, action) => {
      common.orderTypes = action.payload;
    },

    tiersAdded: (common, action) => {
      common.tiers = action.payload;
    },

    usersAdded: (common, action) => {
      common.users = action.payload;
    },

    warehousesAdded: (common, action) => {
      common.warehouses = action.payload;
    },

    isLoadingUpdated: (common, action) => {
      common.isLoading = action.payload;
    },
  },
});

export const CommonActions = slice.actions;
export default slice.reducer;
