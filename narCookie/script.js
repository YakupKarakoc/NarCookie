// Çerez JS kodları

const isCookieAccepted = localStorage.getItem("cookieAccepted");
const cookieBox = document.querySelector(".cerezPolitikasi");

const acceptButton = document.querySelector("#button1");
const rejectButton = document.querySelector("#button2");

const configureBox = document.querySelector(".cerezConfigure");
const configureButton = document.querySelector("#button3");
const saveConfigure = document.querySelector("#saveConfigure");

if (!isCookieAccepted) {
  cookieBox.classList.add("show");
}

acceptButton.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "true");
  cookieBox.style.display = "none";
});

rejectButton.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "false");
  cookieBox.style.display = "none";
});

configureButton.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "configure");
  configureBox.style.display = "block";
  policyContent.style.display = "none";
});

saveConfigure.addEventListener("click", () => {
  configureBox.style.display = "none";
  cookieBox.style.display = "none";
});

const settingsButton = document.getElementById("settings");
const policyButton = document.getElementById("policy");
const settingsContent = document.getElementById("settingsContent");
const policyContent = document.getElementById("policyContent");

const category1Button = document.getElementById("category1");
const category2Button = document.getElementById("category2");
const category3Button = document.getElementById("category3");

const settings1Button = document.getElementById("settings1Button");
const settings2Button = document.getElementById("settings2Button");
const settings3Button = document.getElementById("settings3Button");

const policy1Button = document.getElementById("policy1Button");
const policyText = document.getElementById("policyText");

const content1 = document.getElementById("category1Content");
const content2 = document.getElementById("category2Content");
const content3 = document.getElementById("category3Content");
const content4 = document.getElementById("policyContent2");

const toggleIcon = document.querySelector(".toggle-icon");

settingsButton.addEventListener("click", function () {
  settingsContent.style.display = "block";
  policyContent.style.display = "none";
});

policyButton.addEventListener("click", function () {
  settingsContent.style.display = "none";
  policyContent.style.display = "block";
});

settings1Button.addEventListener("click", function () {
  if (category1Text.style.display === "none") {
    category1Text.style.display = "block";
    content1.classList.add("opened");
    toggleIcon.classList.add("opened");
  } else {
    category1Text.style.display = "none";
    content1.classList.remove("opened");
    toggleIcon.classList.remove("opened");
  }
});

settings2Button.addEventListener("click", function () {
  if (category2Text.style.display === "none") {
    category2Text.style.display = "block";
    content2.classList.add("opened");
    toggleIcon.classList.add("opened");
  } else {
    category2Text.style.display = "none";
    content2.classList.remove("opened");
    toggleIcon.classList.remove("opened");
  }
});

settings3Button.addEventListener("click", function () {
  if (category3Text.style.display === "none") {
    category3Text.style.display = "block";
    content3.classList.add("opened");
    toggleIcon.classList.add("opened");
  } else {
    category3Text.style.display = "none";
    content3.classList.remove("opened");
    toggleIcon.classList.remove("opened");
  }
});

policy1Button.addEventListener("click", function () {
  if (policyText.style.display === "none") {
    policyText.style.display = "block";
    content4.classList.add("opened");
    toggleIcon.classList.add("opened");
  } else {
    policyText.style.display = "none";
    content4.classList.remove("opened");
    toggleIcon.classList.remove("opened");
  }
});

window.addEventListener("load", function () {
  if (
    isCookieAccepted === "true" ||
    isCookieAccepted === "false" ||
    isCookieAccepted === "configure"
  ) {
    cookieBox.style.display = "none";
  }
});

var categories = document.querySelectorAll(".category");

categories.forEach(function (category) {
  category.addEventListener("click", function () {
    categories.forEach(function (c) {
      c.classList.remove("selected");
    });
    category.classList.add("selected");
  });
});