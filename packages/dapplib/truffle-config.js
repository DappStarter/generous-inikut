require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember column harvest forum fringe gasp'; 
let testAccounts = [
"0x92bff19cbe1d8388f8bc3d7a77ddab9e4cd1e3ca22dd1264ebc830dec8a5213e",
"0x7c88866e1021cc6c608157fb64cd948db38faa66aac121582d5cacc07fddb3c5",
"0x706c8da000a3b4e1c7471d78b66ca9fb58fadb165a3f25f35d804282cb69c388",
"0x0d321f2e8e92a16f268381ec5fbc19387fe58d8286352c6cc2e2c5c785e91bba",
"0xc10f59cd20745116b86f8ede145c40d8a9a239b32d0322505d729cc2b831d212",
"0xf5765c93e1fe1110cbc1d87576f6a41a7403e6ae287a4e8524c7c82218730969",
"0x1b9191222784df02b915c1e1e8f4453b2ea483c83bd0d452b4ced5d24452e3b5",
"0x35def9ccb2cb5af7b30980525297c9f0512095add5d67df78b048ae8bbbd65f6",
"0x56c4dbd590448d8211ded243a30847fcf9b75004ccf5bb42901d3c6e3110d32b",
"0x4b5e4c89ed616040b03de26c855aea347c98f442bbc25444525c017a98f3af46"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
