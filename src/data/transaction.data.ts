import { RouteDataFunc, RouteDataFuncArgs } from '@solidjs/router';
import { fetchBlock } from '@src/api';
import { createResource } from 'solid-js';

export const TransactionData: RouteDataFunc = ({
  location,
}: RouteDataFuncArgs) => {
  const [, , blockStr] = location.pathname.split('/');
  const [transactions] = createResource(Number(blockStr), (blockNum) =>
    fetchBlock(blockNum).then(({ transactions }) => transactions),
  );

  return transactions;
};
