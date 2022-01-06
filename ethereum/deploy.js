const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
    'blouse grass pencil couch monitor upgrade vote doll gap hamster divert length',
    // remember to change this to your own phrase!
    'https://rinkeby.infura.io/v3/f74ab6ad18af44bdbadcd9bd6b982cf2'
    // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();

// 0xCf37E6F5D90dDD4041E0dD8e7C5b3c1204D2f6D0
