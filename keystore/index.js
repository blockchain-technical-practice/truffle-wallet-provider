var keythereum = require("keythereum");

/*
//async method
function getPrivateFromkeystore(address,password, datadir){
    return new Promise(function (resolve, reject) {
        keythereum.importFromFile(address, datadir, resolve)
    }).then(function(keyObject){
        return new Promise(function (resolve, reject) {
            keythereum.recover(password, keyObject, resolve)
        })
    })
}
*/


function getPrivateFromkeystore(address,password, datadir){
    var keyObject=keythereum.importFromFile(address, datadir);
    var privatekey=keythereum.recover(password, keyObject);
    // return '0x' + privatekey.toString('hex');
    return privatekey
}

module.exports.getPrivateFromkeystore = getPrivateFromkeystore;