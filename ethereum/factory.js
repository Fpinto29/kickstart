import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x7b94c7A7F024ef02412D308C88F0a51e90D7aeF7"
);

export default instance;