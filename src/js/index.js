const { animate, timeline } = require("motion");
const Ad = require("./helpers/Ad");
const testLoaded = require("./helpers/testLoaded");
class NewAd extends Ad {
  constructor(opts) {
    super(opts);
    this.testLoaded = testLoaded.bind(this);
    this.testLoaded();
  }

  createUI() {
    const el = {};
    for (let key in this.stageObjects) {
      el[key] = this.stageObjects[key].element;
    }

    timeline([
      [el.logo, { x: 500, opacity: 1 }, { duration: 0, delay: 0 }],
      [el.copyright, { x: -500, opacity: 1 }, { duration: 0, delay: 0 }],
      [el.tagline, { y: -294, opacity: 1 }, { duration: 0, delay: 0 }],
      [el.planYourTrip, { scale: 0, opacity: 1 }, { duration: 0, delay: 0 }],
      [el.logo, { opacity: 0, opacity: 0 }, { duration: 0, delay: 0 }],

      [el.logo, { x: 0 }, { duration: 0.5, delay: 0 }],
      [el.copyright, { x: 0 }, { duration: 0.5, delay: 0 }],
      [el.tagline, { y: 0 }, { duration: 0.5, delay: 0 }],
      [el.planYourTrip, { scale: 1 }, { duration: 0.5, delay: 0 }],
      [el.logo, { opacity: 1 }, { duration: 1, delay: 0 }],
    ]);

    el.planYourTrip.onmouseenter = () => {
      animate(el.planYourTrip, { scale: 1.25 }, { duration: 0.25 });
    };
    el.planYourTrip.onmouseleave = () => {
      animate(el.planYourTrip, { scale: 1 }, { duration: 0.25 });
    };
  }
}

module.exports = NewAd;
