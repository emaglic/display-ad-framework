const resize = () => {
  let win = {
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth / window.innerHeight,
  };
  let banner = document.querySelector("#banner");
  let scale = 1;

  scale = Math.min(
    win.width / banner.offsetWidth,
    win.height / banner.offsetHeight
  );

  banner.style.transform = `scale(${scale})`;
  let top = (win.height - banner.offsetHeight * scale) / 2;
  let left = (win.width - banner.offsetWidth * scale) / 2;
  banner.style.top = top + "px";
  banner.style.left = left + "px";
};

module.exports = resize;
