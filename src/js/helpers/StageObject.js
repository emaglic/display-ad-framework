class StageObject {
  constructor(opts) {
    this.opts = opts;
    this.element = typeof opts.element === "string" ? document.querySelector(opts.element) : opts.element;
    this.name = opts.id || typeof opts.element === "string" ? opts.element.substring(1) : null;
    this.parent = opts.parent || document.querySelector("#banner");
    if (!this.element && opts.type && typeof opts.element === "string") {
      this.createElement(opts.type, opts.element, opts.attributes || null);
    }
    if (opts.x) this.x = opts.x;
    if (opts.y) this.y = opts.y;
    if (opts.width) this.width = opts.width;
    if (opts.height) this.height = opts.height;
    if (opts.zIndex) this.zIndex = opts.zIndex;

    if (opts.cssText) this.element.style.cssText += opts.cssText;

    this.defaultPos = {
      x: this.x,
      y: this.y,
    };

    this.ready = false;
  }

  get el() {
    return this.element;
  }

  get x() {
    return parseFloat(this.getStyle("left"));
  }

  set x(value) {
    this.element.style.left = value + "px";
  }

  get y() {
    return parseFloat(this.getStyle("top"));
  }

  set y(value) {
    this.element.style.top = value + "px";
  }

  get width() {
    return parseFloat(this.getStyle("width"));
  }

  set width(value) {
    this.element.style.width = value + "px";
  }

  get height() {
    return parseFloat(this.getStyle("height"));
  }

  set height(value) {
    this.element.style.height = value + "px";
  }

  get zIndex() {
    return parseInt(this.getStyle("z-index"));
  }

  set zIndex(value) {
    this.element.style.zIndex = value;
  }

  loaded(element) {
    this.ready = true;
  }

  createElement(type, selector, attributes) {
    this.element = document.createElement(type);
    if (type === "img") {
      this.element.onload = () => {
        this.loaded(this.element);
      };
    }
    if (attributes) this.setAttributes(attributes);
    this.element.style.position = "absolute";
    this.element.style.display = "block";
    if (selector.charAt(0) === ".") this.element.classList.add(selector.substring(1));
    if (selector.charAt(0) === "#") this.element.id = selector.substring(1);
    this.parent.appendChild(this.element);
  }

  setAttributes(attrs) {
    for (let key in attrs) {
      this.element.setAttribute(key, attrs[key]);
    }
  }

  setStyle(property, value, priority) {
    this.element.style.setProperty(property, value, priority);
  }

  getStyle(property) {
    return window.getComputedStyle(this.element, null).getPropertyValue(property);
  }
}

module.exports = StageObject;
