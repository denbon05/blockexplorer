import { alchemy } from './init';

export const fetchLastBlockNumber = async () => alchemy.core.getBlockNumber();

export const fetchBlock = async (blockNumber: number) =>
  alchemy.core.getBlock(blockNumber);
