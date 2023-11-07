let domID = (id) => {
  return document.getElementById(id);
};
let showMessage = (id, messege) => {
  domID(id).style.display = "block";
  domID(id).innerHTML = messege;
};

let validator = {
  ktrTruongRong: (idSpan, value) => {
    if (value == "") {
      showMessage(idSpan, "(*)Thông tin không được để trống");
      return false;
    } else {
      showMessage(idSpan, "");
      return true;
    }
  },
  ktrNumber: (idSpan, value) => {
    let num = /^[0-9]+$/;
    if (num.test(value)) {
      showMessage(idSpan, "");
      return true;
    } else {
      showMessage(idSpan, "(*)Bạn cần điền số tiền phù hợp");
      return false;
    }
  },
  ktrSelect: (idSpan, value) => {
    if (value == "all") {
      showMessage(idSpan, "(*)Bạn nên lựa chọn");
      return false;
    } else {
      showMessage(idSpan, "");
      return true;
    }
  },
};
console.log(validator.ktrNumber("tbname", "121"));
let validatePhoneName = () => {
  let phoneName = domID("namePhone").value;
  let isValid = validator.ktrTruongRong("tbname", phoneName);
  return isValid;
};
let validatePrice = () => {
  let price = domID("pricePhone").value;
  let isValid =
    validator.ktrTruongRong("tbprice", price) &&
    validator.ktrNumber("tbprice", price);
  return isValid;
};
let validateScreen = () => {
  let screen = domID("screen").value;
  let isValid = validator.ktrTruongRong("tbscreen", screen);
  return isValid;
};
let validateBackCamera = () => {
  let backcam = domID("backCam").value;
  let isValid = validator.ktrTruongRong("tbbackCam", backcam);
  return isValid;
};
let validateFrontCamera = () => {
  let frontcam = domID("frontCam").value;
  let isValid = validator.ktrTruongRong("tbfrontCam", frontcam);
  return isValid;
};

let validateImg = () => {
  let img = domID("imgPhone").value;
  let isValid = validator.ktrTruongRong("tbimg", img);
  return isValid;
};

let validateDesc = () => {
  let desc = domID("desc").value;
  let isValid = validator.ktrTruongRong("tbdesc", desc);
  return isValid;
};
let validateSelect = () => {
  let select = domID("type").value;
  console.log("select:", select);
  let isValid = validator.ktrSelect("tbtype", select);
  return isValid;
};

let isValidator = () => {
  let isValid =
    validatePhoneName() &
    validatePrice() &
    validateScreen() &
    validateBackCamera() &
    validateFrontCamera() &
    validateImg() &
    validateDesc() &
    validateSelect();
  if (isValid) {
    return true;
  } else {
    return false;
  }
};

export default isValidator;
