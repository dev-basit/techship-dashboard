export const LastMileEndpoints = {
  AllOrders: "/v1/api/LM/order/get/for/admin?",
  OrderTypes: "/v1/api/LM/order/get/order/type?type=orderType",
  OrderCreationTypes: "/v1/api/LM/order/get/order/type?type=orderCreationType",
  Statuses: "/v1/api/LM/order/get/status",
  SubStatuses: "/v1/api/LM/order/get/sub/status",
  Awb: "/v1/api/LM/order/get/awb/for/admin?",
};

export const LastMileClientsEndpoints = {
  AllOrders: "/v1/api/LM/order/get/for/client?",
  Awb: "/v1/api/LM/order/get/awb/for/client?",
};
