const getContainerSize = (container) => {
  if (container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
      if (!container) return null;
    }
  } else {
    container = document.querySelector("#banner");
  }
  let containerPos = getPosition(container);
  return { width: containerPos.width, height: containerPos.height };
};

const getPosition = (elem) => {
  if (!elem) return null;
  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }
  if (!elem) return null;
  return {
    width: parseFloat(getStyle(elem, "width")),
    height: parseFloat(getStyle(elem, "height")),
    x: parseFloat(getStyle(elem, "left")),
    y: parseFloat(getStyle(elem, "top")),
  };
};

const getStyle = (elem, property) => {
  if (!elem || !property) return null;
  if (typeof elem === "string") {
    elem = document.querySelector(elem);
  }
  if (!elem) return null;
  return window.getComputedStyle(elem, null).getPropertyValue(property);
};


module.exports = {
  getContainerSize,
  getStyle,
  getPosition,
};
