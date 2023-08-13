import { useRouteData } from '@solidjs/router';
import type { TransactionData } from '@src/data/transaction.data';
import Loading from '@src/components/common/Loading';
import TransactionList from '@src/components/transactions/TransactionList';
import type { ITxData } from '@src/types/routes/transactions';
import { Component, Resource, Show } from 'solid-js';

const Transactions: Component = () => {
  // TODO change after https://github.com/solidjs/solid-router/issues/281
  const txData = useRouteData<typeof TransactionData>() as Resource<ITxData>;

  return (
    <Show when={!txData.loading} fallback={<Loading />}>
      <div class="container py-2">
        <div class="row justify-content-center">
          <div class="col-10 col-lg-8 list-group">
            <TransactionList tx={txData()!} />
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Transactions;
