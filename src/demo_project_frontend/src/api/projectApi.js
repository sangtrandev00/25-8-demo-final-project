// import { Update } from '../../../../node_modules/@material-ui/icons/index';
import axiosClient from './axiosClient';

const projectApi = {
  //
  getAll(params) {
    const url = '/project/read_all.php';
    return axiosClient.get(url, {
      params: params,
    });
  },

  get(id) {
    const url = `/project/read_id.php/?id=${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/project/read_all.php';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = '/project/read_all.php';
    return axiosClient.patch(url);
  },

  remove(id) {
    const url = `/project/read_all.php${id}`;
    return axiosClient.delete(url);
  },
};

export default projectApi;
