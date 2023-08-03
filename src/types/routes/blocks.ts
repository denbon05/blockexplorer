import { Params } from '@solidjs/router';
import { fetchBlock, fetchTxReceipts } from '@src/api';
import { ApiReturn } from '../utils';

export type BlocksSearchParams = Params & {
  page?: string;
};

export type ETHBlock = ApiReturn<typeof fetchBlock>;

export type TxReceipts = ApiReturn<typeof fetchTxReceipts>;
