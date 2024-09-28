// make the popup menu dynamic
const enrollBtn = document.querySelector(".enroll-btn");
const popupMenu = document.querySelector(".popup-menu");

enrollBtn.addEventListener("mouseenter", () => {
  popupMenu.style.display = "block";
  popupMenu.style.top = "11%";
});

enrollBtn.addEventListener("mouseleave", () => {
  popupMenu.style.display = "none";
});

popupMenu.addEventListener("mouseleave", () => {
  popupMenu.style.display = "none";
});

// form section
const onlineIdContainer = document.getElementById("id-container");
const inputId = document.getElementById("online-id");
const title = document.getElementById("id-title");
const passInput = document.getElementById("pass-input");
const passTitle = document.getElementById("pass-title");
const passContainer = document.getElementById("pass-container");
const submitBtn = document.getElementById("submit");
const checkBox = document.getElementById("check-input");
const loaderSpin = document.getElementById("loader");
const btnTitle = document.getElementById("btn-title");
const imgContainer = document.getElementById("img-container"); //img container
const logInContainer = document.getElementById("log-in-container"); //login container
const enrollBtnContainer = document.getElementById("enl-btn-cntnr"); //enroll btn container
const logoTitle = document.getElementById("logo-title"); //logo title container
const logoImgContainer = document.getElementById("logo-img-container"); //logo img container
const logImg = document.getElementById("logo-img");
const loginMainContainer = document.getElementById("login-main");
const form = document.getElementById("form");
const loaderContainer = document.getElementById("loader-container");

inputId.addEventListener("focus", () => {
  title.style.cssText =
    "display:block; color: green; font-size:15px; font-weight: 600";
  onlineIdContainer.classList.add("active-id-container");
  inputId.placeholder = "";
});

inputId.addEventListener("blur", () => {
  onlineIdContainer.style.cssText = `border:1px solid gray;`;
  title.style.cssText = `color: gray;`;
});

passInput.addEventListener("focus", () => {
  passTitle.style.cssText = `display: block; color: green; font-size: 15px; font-weight: 600;`;
  passContainer.classList.add("active-id-container");
  passInput.placeholder = "";
});

passInput.addEventListener("blur", () => {
  passContainer.style.cssText = `border:1px solid gray;`;
  passTitle.style.cssText = `color: gray;`;
});

const checkInputs = () => {
  const id = inputId.value;
  const pass = passInput.value;
  const check = checkBox.checked;

  if (id.length > 0 && pass.length > 0 && check) {
    submitBtn.classList.add("active-submit-btn");
    return true;
  }

  return false;
};

inputId.addEventListener("input", checkInputs);
passInput.addEventListener("input", checkInputs);
checkBox.addEventListener("change", checkInputs);

// when submit form
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    btnTitle.classList.add("btn-title-hide");

    setTimeout(() => {
      btnTitle.style.display = "none";
      loaderContainer.style.display = "block";
      loaderContainer.classList.add("loader-container-animation");
    }, 100);

    // loading
    setTimeout(() => {
      loaderContainer.style.display = "none";
      btnTitle.classList.remove("btn-title-hide");
      btnTitle.style.display = "block";
      formAnimate();
    }, 1200);
  }
});

// form hide before img animate
function formAnimate() {
  logInContainer.classList.add("form-animate");
  logoTitle.classList.add("logo-title-container-animation");
  logoImgContainer.style.cssText = ` z-index: 1;`;
  enrollBtnContainer.classList.add("enrol-btn-animation");
  setTimeout(() => {
    enrollBtnContainer.style.display = "none";
    shrikImg();
  }, 170);
}

// img animation shrik
function shrikImg() {
  imgContainer.classList.add("img-ctn-animate");
  logInContainer.style.display = "none";
  setTimeout(() => {
    imgContainer.style.display = "none";
    imgShrinkAnimate();
  }, 600);
}

// logo img shrink and section img shrink
function imgShrinkAnimate() {
  loginMainContainer.style.cssText = `width: 100vw; height: 100vh;`;
  logoImgContainer.classList.add("logo-img-animate");
  setTimeout(() => {
    logImg.classList.add("logo-img-animate-after");
    animateMainImg();
  }, 1000);
}

// animate maing img
function animateMainImg() {
  setTimeout(() => {
    loginMainContainer.style.display = "none";
    logoImgContainer.style.display = "none";
    imgContainer.classList.remove("img-ctn-animate");
    imgContainer.style.display = "block";
    imgContainer.classList.add("img-shring-after-animate");

    loginMainContainer.style.display = "block";
    logoImgContainer.classList.remove("logo-img-animate");
    animateLogoAgain();
  }, 300);
}

function animateLogoAgain() {
  setTimeout(() => {
    logoImgContainer.style.display = "block";
    logImg.classList.remove("logo-img-animate-after");
    logImg.classList.add("logo");
    logoImgContainer.classList.add("logo-container-animate");

    removeClass();
  }, 800);
}

function removeClass() {
  setTimeout(() => {
    imgContainer.classList.remove("img-shring-after-animate");
    loginMainContainer.style.cssText = `width: 50vw; height: 100vh;`;
    imgContainer.classList.add("final-img-container-animate");
    logoImgContainer.classList.add("animate-logo");

    setTimeout(() => {
      logoImgContainer.classList.remove("logo-container-animate");
      logInContainer.style.display = "block";
      logInContainer.classList.remove("form-animate");

      //   reset all classes
      resetStyles();
      enrollBtnContainer.style.display = "flex";
      form.reset();
    }, 700);
  }, 1000);
}

function resetStyles() {
  logInContainer.classList.remove("form-animate");
  logoImgContainer.classList.remove("logo-img-animate");
  logoTitle.classList.remove("logo-title-container-animation");
  logoImgContainer.classList.remove("animate-logo");
  logImg.classList.remove("logo");
  imgContainer.classList.remove("final-img-container-animate");
  logoImgContainer.classList.remove("animate-logo");

  onlineIdContainer.classList.remove("active-id-container");
  onlineIdContainer.style.cssText = ``;
  passContainer.classList.remove("active-id-container");
  passContainer.classList.cssText = ``;
  title.style.cssText = ``;
  passTitle.style.cssText = ``;
  submitBtn.classList.remove("active-submit-btn");
  loaderContainer.classList.remove("loader-container-animation");
}
