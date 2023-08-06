import { RouteDataFunc, RouteDataFuncArgs } from '@solidjs/router';
import { fetchBlock } from '@src/api';
import { ITxData } from '@src/types/routes/transactions';
import moment from 'moment';
import { Resource, createResource } from 'solid-js';

export const TransactionData: RouteDataFunc = ({
  location,
}: RouteDataFuncArgs): Resource<ITxData> => {
  const [, , blockStr] = location.pathname.split('/');
  const [data] = createResource(Number(blockStr), (blockNum) =>
    fetchBlock(blockNum).then(({ transactions, timestamp }) => ({
      transactions,
      fromNowTime: moment().subtract(timestamp).fromNow(),
      timestamp: moment(timestamp).toISOString(),
    })),
  );

  return data;
};
