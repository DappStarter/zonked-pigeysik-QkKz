require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift return pitch uncover just opera food gesture'; 
let testAccounts = [
"0x4312db7679534256a4b7b78d3119b06277797c181e0ab36fbc27d0b30cac8678",
"0x6768236f725b54428053d534bc13c7483956a7703d4f151172d086cdd6bb2651",
"0x4fda63531e7ad73024823330e54722546a4bb8699030cca775c8863bf012d4be",
"0x7bbeea873c8f911808cf6157437e12d6e09df43cdd214be2b99136a789f18b27",
"0x7e2ff8d0bddfa81ea481ce7f07aefb0948aa77768e18e243c3dbbfc393eb3f39",
"0xb61e5c6d13d8115c55a679abc8a8d7a1ea4ac5137eda9fe15d249e72562dfa18",
"0xca37ba1af1b12338d3df99d487b649f73b47e895fa6820117f97417f8e44fc8f",
"0x2710db53f6bb7caa0b20c774ef7191f55743bddf43aa8feee4619d912332dc91",
"0x1ba5de21e047f5c50728b4e0a7ba47031aad8e3894decf1f174e688e6b6b948e",
"0x7990aa524a2ae9e6200124ac1fa08e82dafc15f21fc39078e0c6b2e2cffeacb4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

