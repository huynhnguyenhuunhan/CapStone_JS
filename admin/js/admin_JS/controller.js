const APPLE = false;
const loaiApple = "loai1";
const loaiSamSung = "loai2";

export let renderPhoneList = (phoneArr) => {
  let contentHTML = "";
  phoneArr.forEach((item) => {
    let { id, name, price, img, desc } = item;
    let contentTr = `
        <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${price}</td>
          <td><img src="${img}"alt=""></td>
          <td>${desc}</td>
          <td>
            <button onclick ="xoaPhone(${id})" class ="btn btn-danger">Delete</button>
            <button onclick ="suaPhone(${id})" class ="btn btn-warning mt-3">Update</button>
          </td>
        </tr>
        `;
    contentHTML += contentTr;
  });
  document.getElementById("tablePhone").innerHTML = contentHTML;
};

export let showSucess = (title = "Thành công") => {
  Swal.fire({
    positon: "center-center",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 3000,
  });
};
//ctirl+ shift
export let getDataForm = () => {
  let name = document.getElementById("namePhone").value;
  let price = document.getElementById("pricePhone").value;
  let screen = document.getElementById("screen").value;
  let camTruoc = document.getElementById("backCam").value;
  let camSau = document.getElementById("frontCam").value;
  let img = document.getElementById("imgPhone").value;
  let moTa = document.getElementById("desc").value;
  let loai = document.getElementById("type").value == loaiApple;
  console.log({ name, price, screen, camTruoc, camSau, img, moTa, loai });
  return {
    name,
    price,
    screen,
    camTruoc,
    camSau,
    img,
    moTa,
    loai,
  };
};
//alt + shift : đa con trỏ chuột
export let showDataForm = (data) => {
  document.getElementById("namePhone").value = data.name;
  document.getElementById("pricePhone").value = data.price;
  document.getElementById("screen").value = data.screen;
  document.getElementById("backCam").value = data.backCam;
  document.getElementById("frontCam").value = data.frontCam;
  document.getElementById("imgPhone").value = data.img;
  document.getElementById("desc").value = data.desc;
  document.getElementById("type").value =
    data.type == APPLE ? loaiApple : loaiSamSung;
};
