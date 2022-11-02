const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

// Getting the output of our compiled Solidity Contract

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "danger demand trial coast kid hungry book eye future lab crunch alcohol",
  "606ecc3eeab13b51437cc68d6477cd694f349c3d"
);
// `$YOUR_METAMASK_RECOVERY_CODE`,
// `$RINKEBY_INFURA_API`

const web3 = new Web3(provider);

const deploy = async () => {
  // getting accounts from our Metamask wallet
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts);

  // deploying our contract
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  //   console.log("#### Interface: ", interface);
  console.log("#### Contract deployed to", result.options.address);
};
deploy();
