const getItem = (key) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

const setItem = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value) || "");
  }
};

const removeItem = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const clearAll = () => {
  localStorage.clear();
};

const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const Enums = {
  USER_NAME: "username",
  WAREHOUSES: "warehouses",
  PERMISSION: "permission",
  CLIENT_TYPE: "CLIENT_TYPE",
  NAVBAR_COLOR: "navbarColor",
  BASE_LOGO_URL: "baseLogoUrl",
  FAV_ICON_URL: "faviconUrl",
  COLUMN_SETTINGS: "columnSettings",
  SIDEBAR_PAGE_NAME: "sidebarPageName",
};

export const LocalStorage = {
  setItem,
  getItem,
  removeItem,
  clearAll,
  isValidJSON,
  Enums,
};
