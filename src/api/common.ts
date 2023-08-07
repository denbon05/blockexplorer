import { Utils } from 'alchemy-sdk';
import { alchemy } from './init';

export const fetchGasPrice = async () => alchemy.core.getGasPrice();

export const fetchBalance = async (address: string) =>
  alchemy.core
    .getBalance(address)
    .then((value) => Utils.formatUnits(value, 'ether'));
