export const Api = (host) => {
  const version = "v1/";
  const hosts = {
    local: "http://127.0.0.1:8000",
    // serv: `https://corestg.familytime.io/api/`,
    serv: `https://corestg.familytime.io/api/${version}`,
    MeshServ: `http://mesh.stg.familytime.io/dashboard/`,
    MeshServV3: `http://mesh.stg.familytime.io/v3/dashboard/`,
  };
  return `${hosts[host]}`;
};
