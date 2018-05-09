var Web3 = require("web3");

var contract = require("truffle-contract");

var data = require("./ERC20Token.json");
var ERC20 = contract(data);


var datadir = "/Users/yves/ethereum/truffle/MetaCoin/db/";
var keystore = require("truffle-wallet-provider/keystore");

var priateKey = keystore.getPrivateFromkeystore("your public key address", "passwd", datadir);


var WalletProvider = require('truffle-wallet-provider')
var provider = new WalletProvider(priateKey, "https://ropsten.infura.io/")

ERC20.setProvider(provider);

var contract_address = "contract address";

var from = "from address"; // an address
var to  = "to address"; // another address


async function transfer(toAddress, tokenAmount, senderAddress) {

    ERC20TokenInstance = await ERC20.at(contract_address);

    await ERC20TokenInstance.transfer(toAddress, ERC20.web3.toWei(tokenAmount), {from: senderAddress});
}

async function transferTest() {
    let tokenAmount=100;
    await  transfer(to,ERC20.web3.fromWei(tokenAmount),from)
}

transferTest();
