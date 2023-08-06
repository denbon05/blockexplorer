import { Alchemy, Network, Utils, type AlchemySettings } from 'alchemy-sdk';
import { APP_ALCHEMY_API_KEY } from '../constants';
import { ETHBlock } from '@src/types/routes/blocks';
import { createSignal, Resource, createResource } from 'solid-js';

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

export const fetchTxRecipe = async (txHash: string) =>
  alchemy.core.getTransactionReceipt(txHash);

export const fetchTransaction = async (txHash: string) => {
  const tx = await alchemy.core.getTransaction(txHash);
  const recipe = await fetchTxRecipe(txHash);

  const valueInETH = tx?.value
    ? Utils.formatUnits(tx.value.toBigInt(), 'ether')
    : null;
  const gasInETH = tx?.gasPrice
    ? Utils.formatUnits(tx?.gasPrice?.toBigInt(), 'ether')
    : null;

  return {
    ...recipe,
    ...tx,
    // TODO use statuses https://eips.ethereum.org/EIPS/eip-1066
    statusText: Number(recipe?.status) ? 'Success' : 'Failure',
    valueInETH,
    gasInETH,
  };
};

export const fetchGasPrice = async () => alchemy.core.getGasPrice();
