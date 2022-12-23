import axios from "axios";
import { Api } from "./Api";

// const gEnv = 'qa'
const reqApi = Api("serv");
const reqMeshApi = Api("MeshServ");
const reqMeshApiV3 = Api("MeshServV3");
export const ReqGet = (endpoint, serverType, token = null, props = {}) => {
  return httpReq("GET", endpoint, serverType, token, props);
};
export const ReqPost = (endpoint, payload, serverType, token = null) => {
  return httpReq("POST", endpoint, serverType, token, { data: payload });
};

export const ReqPut = (endpoint, payload, serverType, token = null) => {
  return httpReq("PUT", endpoint, serverType, token, { data: payload });
};
export const ReqDelete = (endpoint, payload, serverType, token = null) => {
  return httpReq("DELETE", endpoint, serverType, token, { data: payload });
};
export const httpReq = (
  method,
  endpoint,
  serverType,
  token = null,
  props = {}
) => {
  if (!token) {
    token = localStorage.getItem("accessToken");
  }
  let apiUrl = reqApi;
  if (serverType === "MeshServ") {
    apiUrl = reqMeshApi;
  } else if (serverType === "MeshServV3") {
    apiUrl = reqMeshApiV3;
  }
  const language = localStorage.getItem("i18nextLng");
  // console.log(apiUrl, endpoint);
  const params = {
    method: method,
    baseURL: apiUrl,
    url: endpoint,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      lang: language,
      // env: gEnv
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  //Interceptor
  axios.interceptors.response.use((response) => {
    if (
      response.data.error === "Unauthenticated" ||
      response.data.error === "Unauthenticated."
    ) {
      response.auth = false;
    } else {
      response.auth = true;
    }
    return response;
  });
  return axios(params).catch((err) => err.response);
};
