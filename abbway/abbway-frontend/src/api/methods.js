import api from "./api";

export const get = async ({ path, secured }) => {
  const instance = api({ secured: secured });

  return await instance.get(path);
};

export const post = async ({ path, secured, data }) => {
  const instance = api({ secured: secured });

  return await instance.post(path, data);
};

export const patch = async ({ path, secured, data }) => {
  const instance = api({ secured: secured });

  return await instance.patch(path, data);
};

export const del = async ({ path, secured, data }) => {
  const instance = api({ secured: secured });

  return await instance.delete(path, data);
};
