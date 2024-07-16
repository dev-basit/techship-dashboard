import { LocalStorage } from "@/utils/local-storage";

const EMPLOY = "EMPLOY";
const CLIENT_TYPE = "CLIENT_TYPE";

export const AppEnums = {
  CLIENT_TYPE: CLIENT_TYPE,
  CLIENT: "CLIENT",
  EMPLOY: EMPLOY,
  FILTERS_MIN_DATE: "2022-01-01",
  FILTERS_MAX_DATE: "2040-01-01",
  TIMEZONE: Intl.DateTimeFormat().resolvedOptions().timeZone,
  COLUMNS_INDEX_TO_SHOW_ALWAYS: [0, 1, 2, 3],

  SUCCESS: "success",
  FAILED: "failed",
  NOT_AVAILABLE: "N/A",
  NO_DATA_FOUND: "No Data Found.",
  ENTER: "Enter",

  IsCurrentUserEmploy: () => LocalStorage.getItem(CLIENT_TYPE) === EMPLOY,
};

export const ApiHeaders = {
  CONTENT_Type: "Content-type",
  APPLICATION_JSON: "application/json",
};
