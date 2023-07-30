import { Alchemy, Network, type AlchemySettings } from 'alchemy-sdk';
import { APP_ALCHEMY_API_KEY } from '../constants';

const settings: AlchemySettings = {
  apiKey: APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

export const fetchLastBlockNumber = async () => alchemy.core.getBlockNumber();

export const fetchBlock = async (blockNumber: number) =>
  alchemy.core.getBlock(blockNumber);
