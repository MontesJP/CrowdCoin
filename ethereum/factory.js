import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3D30981BD666149Dcd44A7Bc072A1A4910064bf2'
);

export default instance;
