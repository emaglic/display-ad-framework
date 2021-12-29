const StageObject = require("./StageObject");
const manifest = require("../manifest");

class Ad {
  constructor(opts) {
    this.stageObjects = {};
    this.clickTag = manifest.config.clickTag || "https://www.funimation.com";
    window.clickTag = this.clickTag;
    if (opts && opts.container) this.container = opts.container;
    if (!this.container) this.container = document.querySelector("#banner");
    this.container.classList.add(`size-${manifest.config.width}x${manifest.config.height}`);
    if (!this.container) return;
    this.createStageObjects();
  }

  createStageObjects() {
    manifest.stageObjects.forEach((object) => {
      const validObject = this.checkObjectProps(object);
      if (!validObject) return;
      this.stageObjects[object.element.substring(1)] = new StageObject({
        x: object.x,
        y: object.y,
        zIndex: object.zIndex || 0,
        width: object.width,
        height: object.height,
        type: object.type,
        element: object.element,
        attributes: object.attributes,
      });
    });
  }

  checkObjectProps(object) {
    let isValid = true;
    let props = [object.x, object.y, object.width, object.height, object.type, object.element];
    props.forEach((prop) => {
      if (prop === undefined || prop === null) {
        isValid = false;
      }
    });
    return isValid;
  }
}

module.exports = Ad;
