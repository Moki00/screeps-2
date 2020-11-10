let doBuild = function(creep, target, pathColor, reusePath) {
    let result = creep.build(target)
    if (result == ERR_NOT_IN_RANGE) {
        creep.say("🚧")
        creep.memory.target = target
        creep.moveTo(target, {
            visualizePathStyle: {stroke: pathColor},
            reusePath: reusePath,
        })
    }
}

let doHarvest = function(creep, target, pathColor, reusePath) {
    let result = creep.harvest(target)
    if (result == ERR_NOT_IN_RANGE) {
        creep.say("⛏")
        creep.memory.target = target
        creep.moveTo(target, {
            visualizePathStyle: {stroke: pathColor},
            reusePath: reusePath,
        })
    }
}

let doTransfer = function(creep, target, pathColor, reusePath) {
    let result = creep.transfer(target, RESOURCE_ENERGY)
    if (result == ERR_NOT_IN_RANGE) {
        creep.say("📦")
        creep.memory.target = target
        creep.moveTo(target, {
            visualizePathStyle: {stroke: pathColor},
            reusePath: reusePath,
        })
    }
}

let doUpgrade = function(creep, pathColor, reusePath) {
    let result = creep.upgradeController(creep.room.controller)
    if (result == ERR_NOT_IN_RANGE) {
        creep.say("⬆")
        creep.memory.target = creep.room.controller
        creep.moveTo(creep.room.controller, {
            visualizePathStyle: {stroke: pathColor},
            reusePath: reusePath,
        })
    }
}

let doRest = function(creep, pos, reusePath) {
    if (creep.pos != pos) {
        creep.say("🏠")
        creep.memory.target = pos
        creep.moveTo(pos, {
            visualizePathStyle: {stroke: "#ffffff"},
            reusePath: reusePath,
        })
    }
}

module.exports = {
    doBuild: doBuild,
    doHarvest: doHarvest,
    doRest: doRest,
    doTransfer: doTransfer,
    doUpgrade: doUpgrade,
}
