const BASE_URL = "https://64a3bebac3b509573b5677cc.mockapi.io/phone";

let productService = {
  getList: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  createProduct: (product) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: product,
    });
  },
  deleteProduct: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  getProduct: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  updateProduct: (product, id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PuT",
      data: product,
    });
  },
};

export default productService;
