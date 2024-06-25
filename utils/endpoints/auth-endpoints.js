// This will be used by server, hence exported it as module.exports
module.exports = {
  BaseUrl: process.env.APP_BASE_URL,
  OAuth: "/v1/api/oauth/token",
  OAuthApi: "/oauth/token",
  Logout: "/v1/api/logout",
  Authenicate: "/v1/api/authenticate",
  httpGetMethod: "GET",
  httpPostMethod: "POST",
};
