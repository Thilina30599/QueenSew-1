/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

This Plugins For Hackers 😈
*/

const config = require('../../config');
const { DataTypes } = require('sequelize');

const CrashDB = config.DATABASE.define('Crash', {
    chat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function sewMessage(jid = null, tip = 'addingcrash') {
    var Msg = await CrashDB.findAll({
        where: {
            chat: jid,
            type: tip
        }
    });

    if (Msg.length < 1) {
        return false;
    } else {
        return Msg[0].dataValues;
    }
}

async function setCrashMessage(jid = null, tip = 'addingcrash', text = null) {
    var Msg = await CrashDB.findAll({
        where: {
            chat: jid,
            type: tip
        }
    });

    if (Msg.length < 1) {
        return await CrashDB.create({ chat: jid, type: tip, message:text });
    } else {
        return await Msg[0].update({ chat: jid, type: tip, message:text });
    }
}

async function deleteCrashMessage(jid = null, tip = 'addingcrash') {
    var Msg = await CrashDB.findAll({
        where: {
            chat: jid,
            type: tip
        }
    });

    return await Msg[0].destroy();
}

module.exports = {
    CrashDB: CrashDB,
    sewMessage: sewMessage,
    setCrashMessage: setCrashMessage,
    deleteCrashMessage: deleteCrashMessage
};