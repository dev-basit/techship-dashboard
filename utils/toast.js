import { toast } from "react-toastify";

const Enums = {
  CONTAINER_ID: "toast-id",
};

const showSuccessToast = (message) => {
  toast.success(message, { containerId: Enums.CONTAINER_ID });
};

const showErrorToast = (message) => {
  toast.error(message, { containerId: Enums.CONTAINER_ID });
};

export const Toast = { Enums, showSuccessToast, showErrorToast };
