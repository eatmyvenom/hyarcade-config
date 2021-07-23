const ffs = require("fs");
const logger = require("hyarcade-logger");

module.exports = class Runtime {
    async save() {
        logger.debug("Saving runtime info json");
        await ffs.promises.writeFile("data/runtimeinfo.json", JSON.stringify(this, null, 2));
    }

    static fromJSON() {
        let newRun = new Runtime();
        let json = JSON.parse(ffs.readFileSync("data/runtimeinfo.json"));
        for (let p in json) {
            newRun[p] = json[p];
        }
        return newRun;
    }
};
