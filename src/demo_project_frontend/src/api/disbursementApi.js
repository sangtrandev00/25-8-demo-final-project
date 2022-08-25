import axiosClient from './axiosClient';

const disbursementApi = {
  getAll(params) {
    const url = '/disbursement/read.php';
    return axiosClient.get(url, {
      params: params,
    });
  },

  get(id) {
    const url = `/disbursement/read_id.php?id=${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/disbursement/read.php${data.id}`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/disbursement/read.php/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/disbursement/read.php/${id}`;
    return axiosClient.delete(url);
  },
};

export default disbursementApi;
