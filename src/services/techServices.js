import { httpClient } from "./httpClient"

export const techService = async function () {  // ✅ Named export
  return await httpClient.get(`/user/service`);
};

export const techServiceDescription = async function (id) {  // ✅ Named export
  return await httpClient.get(`/user/service/${id}`);
};


export const banner = async function () {  // ✅ Named export
  return await httpClient.get(`/user/banner`);
};
