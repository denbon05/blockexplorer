import { fetchBlock } from '@src/api';
import { Resource, createResource } from 'solid-js';
import { RouteDataFuncArgs, RouteDataFunc } from '@solidjs/router';
import { ETHBlock } from '@src/types/routes/blocks';

export const BlockData: RouteDataFunc = ({
  params,
}: RouteDataFuncArgs): Resource<ETHBlock> => {
  const [block] = createResource(Number(params.id), fetchBlock);
  return block;
};
