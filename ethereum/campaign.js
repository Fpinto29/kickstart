import web from "./web3";
import Campaign from "./build/campaign.json";
import web3 from "./web3";


export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    );
};