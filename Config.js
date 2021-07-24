const fs = require("fs");
const { Snowflake, Presence } = require("discord.js")

class BotUser {
    username = "";
    icon = "";
    /**
     *
     * @type {Presence[]}
     * @memberof BotUser
     */
    presences = [];
}

class DiscordConfig {
    token = "";
    backupToken = "";
    miniToken = "";
    mwToken = "";
    testToken = "";
    
    /**
     *
     * @type {String[]}
     * @memberof DiscordConfig
     */
    listenChannels = [];

    /**
     *
     * @type {String[]}
     * @memberof DiscordConfig
     */
    trustedUsers = [];

    /**
     *
     * @type {Snowflake}
     * @memberof DiscordConfig
     */
    logChannel = "";

    /**
     *
     * @type {Snowflake}
     * @memberof DiscordConfig
     */
    errChannel = "";

    /**
     *
     * @type {Presence[]}
     * @memberof DiscordConfig
     */
    presences = [];

    /**
     *
     * @type {Object.<string, BotUser>}
     * @memberof DiscordConfig
     */
    setup = {};
}

class Webhook {
    id = "";
    token = "";
    username = "";
    pfp = "";
}

class EventManager {
    /**
     *
     * @type {Webhook}
     * @memberof EventManager
     */
    webhook = {};
    winMod = 0;
    name = "";
}

class Config {
    key = "";
    altkeys = [];
    dbURL = "";
    dbPass = "";
    mode = "";
    alwaysForce = false;
    logRateLimit = true;
    watchdogTimeout = 30000;
    cluster = "";
    sortDirection = "";
    printAllWins = false;
    arcadeWinLimit = 0;
    cringeGameLowerBound = 0;
    cringeGameUpperBound = 0;
    showDaytime = false;
    commandCharacter = "";
    clusterTarget = "";
    clusters = {};

    /**
     *
     * @type {Object.<string, EventManager>}
     * @memberof Config
     */
    events = {};

    /**
     *
     * @type {Webhook}
     * @memberof Config
     */
    webhook = {};

    /**
     *
     * @type {DiscordConfig}
     * @memberof Config
     */
    discord = {};

    /**
     *
     * @type {Object.<string, Webhook>}
     * @memberof Config
     */
    otherHooks = {};

    mojang = class MojangSettings{
        sleep = 0;
    };

    std = class STDControl{
        disable = false;
        out = "";
        err = "";
    };

    constructor(json) {
        for (let thing in json) {
            this[thing] = json[thing];
        }
    }

    static fromJSON() {
        let cfg = new Config(JSON.parse(fs.readFileSync("config.json")));
        cfg.events = JSON.parse(fs.readFileSync("discord.events.json"));
        cfg.discord = JSON.parse(fs.readFileSync("discord.json"));
        cfg.otherHooks = JSON.parse(fs.readFileSync("discord.timed.json"));
    }

}

module.exports = Config;
