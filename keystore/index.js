var keythereum = require("keythereum");

function getPrivateFromkeystore(address,password, datadir){
    return new Promise(function (resolve, reject) {
        keythereum.importFromFile(address, datadir, resolve)
    }).then(function(keyObject){
        return new Promise(function (resolve, reject) {
            keythereum.recover(password, keyObject, resolve)
        })
    })
}

module.exports.getPrivateFromkeystore = getPrivateFromkeystore;