import axioss from "axios";
import { BASE_URL_API } from "./constants";

export const axios = axioss.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
});

// axios.interceptors.request.use(function(config) {
// config.headers.Cookie =
// "SID=s%3Aa1TKAU-_EVh-AOM3tcQRtBvOkROhDc0k.03Mmq%2BCjYCf1vwr43BRq4cn1%2Bc3AGyjVS9mlRJqGMZ0";
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export default axios;
