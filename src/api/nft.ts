import { alchemy } from './init';

export const fetchNftsForOwner = async (address: string) =>
  alchemy.nft.getNftsForOwner(address);
