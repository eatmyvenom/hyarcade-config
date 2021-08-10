const ffs = require("fs");
const logger = require("hyarcade-logger");

module.exports = class Runtime {
  async save () {
    logger.debug("Saving runtime info json");
    await ffs.promises.writeFile("data/runtimeinfo.json", JSON.stringify(this, null, 2));
  }

  static fromJSON () {
    const newRun = new Runtime();
    const json = JSON.parse(ffs.readFileSync("data/runtimeinfo.json"));
    for(const p in json) {
      newRun[p] = json[p];
    }
    return newRun;
  }
};
