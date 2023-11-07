import productService from "./productService.js";
import {
  getDataForm,
  renderPhoneList,
  showDataForm,
  showSucess,
} from "./controller.js";
import isValidator from "./validate.js";

let idUpdate;
let productList = [];

let fecthProductList = () => {
  productService
    .getList()
    .then((res) => {
      console.log(res);
      renderPhoneList(res.data.reverse());
      productList = [...res.data];
    })
    .catch((err) => {
      console.log(err);
    });
};
fecthProductList();

let createNewProduct = () => {
  if (isValidator()) {
    productService
      .createProduct(getDataForm())
      .then((res) => {
        console.log(res);
        fecthProductList();
        $("#myModal").modal("hide");
        resetSP();
        showSucess("success", "Thêm thành công!");
      })
      .catch((err) => {
        console.log(err);
        showSucess("error", "Thêm thất bại!");
      });
  }
};
window.createNewProduct = createNewProduct;

let closeButton = () => {
  $("#myModal").modal("hide");
  resetSP();
};
window.closeButton = closeButton;

let xoaPhone = (id) => {
  productService
    .deleteProduct(id)
    .then((res) => {
      console.log(res);
      fecthProductList();
      sweetAlert("success", "Xóa thành công");
    })
    .catch((err) => {
      console.log(err);
    });
};
window.xoaPhone = xoaPhone;

let suaPhone = (id) => {
  idUpdate = id;
  productService
    .getProduct(id)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
      $("#myModal").modal("show");
    })
    .catch((err) => {
      console.log(err);
    });
};
window.suaPhone = suaPhone;

let updateSP = () => {
  if (isValidator()) {
    productService
      .updateProduct(getDataForm(), idUpdate)
      .then((res) => {
        console.log(res);
        fecthProductList();
        $("#myModal").modal("hide");
        resetSP();
        sweetAlert("success", "Update thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
window.updateSP = updateSP;

let resetSP = () => {
  document.querySelector("#myForm").reset();
};
window.resetSP = resetSP;

let searchPhoneName = () => {
  console.log(productList);
  let nameSP = document.getElementById("searchSP").value;
  let newProductList = [];
  productList.forEach((product) => {
    let { name, price, screen, backCamera, frontCamera, img, desc, type, id } =
      product;
    if (name == nameSP) {
      newProductList.push(product);
    }
  });
  renderPhoneList(newProductList);
};
window.searchPhoneName = searchPhoneName;

let sortPrice = () => {
  let newProductList = [...productList];
  console.log(newProductList[0]);
  console.log(newProductList[1]);

  for (let i = 0; i < newProductList.length - 1; i++) {
    for (let j = i + 1; j < newProductList.length; j++) {
      let price_1 = newProductList[i].price;
      let price_2 = newProductList[j].price;
      if (price_1 < price_2) {
        let temp = newProductList[i];
        newProductList[i] = newProductList[j];
        newProductList[j] = temp;
      }
    }
  }
  renderPhoneList(newProductList);
};
window.sortPrice = sortPrice;
