import { Params } from '@solidjs/router';
import { fetchBlock, fetchTransaction } from '@src/api';
import { ApiReturn } from '../utils';

export type BlocksSearchParams = Params & {
  page?: string;
};

export type ETHBlock = ApiReturn<typeof fetchBlock>;

export type TxReceipts = ApiReturn<typeof fetchTransaction>;
