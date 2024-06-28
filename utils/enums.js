import { LocalStorage } from "@/utils/local-storage";

const EMPLOY = "EMPLOY";
const CLIENT_TYPE = "CLIENT_TYPE";

export const AppEnums = {
  SUCCESS: "Success",
  FAILED: "Failed",
  EMPLOY: EMPLOY,
  CLIENT: "CLIENT",
  CLIENT_TYPE: CLIENT_TYPE,
  ENTER: "Enter",
  NO_DATA_FOUND: "No Data Found.",
  ColumnsIndexesToShowAlways: [0, 1, 2, 3],
  Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  IsCurrentUserEmploy: () => LocalStorage.getItem(CLIENT_TYPE) === EMPLOY,
};

export const ApiHeaders = {
  CONTENT_Type: "Content-type",
  APPLICATION_JSON: "application/json",
};
