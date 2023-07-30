import { Params } from '@solidjs/router';
import { fetchBlock } from '@src/api';

export type BlocksSearchParams = Params & {
  page?: string;
};

export type ETHBlock = Awaited<ReturnType<typeof fetchBlock>>;
