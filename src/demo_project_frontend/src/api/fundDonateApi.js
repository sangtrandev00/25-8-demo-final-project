// import { Update } from '../../../../node_modules/@material-ui/icons/index';
import axiosClient from './axiosClient';

const fundDonateApi = {
  getAll(params) {
    const url = '/donate/read.php';
    return axiosClient.get(url, {
      params: params,
    });
  },

  get(id) {
    // https://fpolytuthien.com/api/donate/read_id.php/?id=6
    const url = `/donate/read_id.php/?id=${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/donate/read.php';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = '/donate/read.php';
    return axiosClient.patch(url);
  },

  remove(id) {
    const url = `/donate/read.php${id}`;
    return axiosClient.delete(url);
  },
};

export default fundDonateApi;
