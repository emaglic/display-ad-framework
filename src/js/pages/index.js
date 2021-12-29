import "scss/index/index.scss";
const resize = require("src/js/helpers/resize");
const NewAd = require("../index");
let ad = null;
const onLoad = () => {
  ad = new NewAd({
    container: document.querySelector("#banner"),
  });
  resize();
};

window.onload = onLoad;
window.onresize = resize;
