class EbAnimator {
  constructor(opts) {
    this.element = opts.target;
    this.id =
      String(Math.floor(Math.random() * (99999 - 0 + 1) + 0)) +
      String(Math.floor(Math.random() * (99999 - 0 + 1) + 0));
    this.keyframes = opts.keyframes || {};
    this.duration = opts.duration || 1;
    this.ease = opts.ease || "linear";
    this.iterations = opts.iterations || 1;
    this.direction = opts.direction || "normal";
    this.delay = opts.delay || null;
    this.animate();
  }

  animate() {
    this.removeAnimation();
    this.animation = /*css*/ `
      .EbAnimator-class-${this.id} {
        animation-name: EbAnimator-animation-${this.id};
        animation-timing-function: ${this.ease};
        animation-duration: ${this.duration}s;
        animation-iteration-count: ${this.iterations};
        animation-direction: ${this.direction};

      }
      @keyframes EbAnimator-animation-${this.id}
      { ${this.convertKeyframes(this.keyframes)} }
    `;
    this.append(this.animation);
    this.element.classList.add(`EbAnimator-class-${this.id}`);
  }

  removeAnimation() {
    let prevAnimations = [...this.element.classList].map((value) => {
      return value;
    });
    prevAnimations.forEach((animation) => {
      if (String(animation).includes("EbAnimator-class")) {
        this.element.classList.remove(animation);
      }
    });
  }

  convertKeyframes = (keyframes) => {
    let retKeyframes = "";
    for (let key in keyframes) {
      retKeyframes += `${key}% {`;
      let styles = keyframes[key];
      let _keys = Object.keys(styles);
      let _values = Object.values(styles);
      _keys.forEach((_key, index) => {
        let _style = _key
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase();
        retKeyframes += `${_style}: ${_values[index]}; `;
      });
      retKeyframes += "} ";
    }
    console.log("retkeyframes: ", retKeyframes);
    return retKeyframes;
  };

  append(styles) {
    let styleElement = document.createElement("style");
    styleElement.classList.add(`EbAnimator-style-${this.id}`);
    styleElement.innerHTML = styles;
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    console.log("styleElement: ", styleElement);
  }
}

module.exports = EbAnimator;
