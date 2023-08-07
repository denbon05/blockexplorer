import { Utils } from 'alchemy-sdk';
import { alchemy } from './init';

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
