function testLoaded() {
  let objs = Object.values(this.stageObjects);
  this.loadedTimer = setInterval(() => {
    let ready = true;
    for (let i = 0; i < objs.length; i++) {
      if (objs[i].opts.type !== "img") continue;
      if (!objs[i].element || !objs[i].element.complete) {
        ready = false;
      }
    }
    if (ready) {
      clearInterval(this.loadedTimer);
      this.createUI();
    }
  }, 250);
}

module.exports = testLoaded;
