import axios from "axios";
import Router from "next/router";

import { ApiHeaders } from "@/utils/enums";
import { CommonEndpoints } from "@/utils/endpoints/common-endpoints";
import { Toast } from "@/utils/toast";
import { LocalStorage } from "@/utils/local-storage";

const axiosInstance = axios.create({ baseURL: "" });
axiosInstance.interceptors.request.use(
  (config) => {
    switch (config.url) {
      case CommonEndpoints.OAuth:
        break;

      default:
        config.headers[ApiHeaders.CONTENT_Type] = ApiHeaders.APPLICATION_JSON;
    }

    return config;
  },

  (error) => getError(error)
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => getError(error)
);

const responseHandler = (response) => {
  if (response?.data?.status !== 500) return response;
};

const getError = async (error) => {
  if (error.request.status === 401) {
    try {
      await axios({ url: CommonEndpoints.Logout, method: "POST" });

      if (LocalStorage.getItem(LocalStorage.Enums.USER_NAME))
        Toast.showErrorToast("You are not authorized to access this resource.");

      LocalStorage.clearAll();
      Router.replace("/account/login");
    } catch (e) {
      console.log("e", e);
    }
  }

  return error?.response;
};

export const HTTP = {
  GET: axiosInstance.get,
  POST: axiosInstance.post,
  PUT: axiosInstance.put,
  DELETE: axiosInstance.delete,
};
