import { RouteDataFunc, RouteDataFuncArgs } from '@solidjs/router';
import { fetchBlock } from '@src/api';
import { ETHBlock } from '@src/types/routes/blocks';
import { Resource, createResource } from 'solid-js';

export const BlockData: RouteDataFunc = ({
  location,
}: RouteDataFuncArgs): Resource<ETHBlock> => {
  // the last part of the path is the block number
  const [blockNumStr] = location.pathname.split('/').reverse();
  const blockNum = Number(blockNumStr);
  if (!blockNum) {
    throw Error(`Can't extract block number from path: "${location.pathname}"`);
  }

  const [block] = createResource(blockNum, fetchBlock);

  return block;
};
