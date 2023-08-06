import { useRouteData } from '@solidjs/router';
import Loading from '@src/components/common/Loading';
import Transaction from '@src/components/transactions/Transaction';
import type { ITxData } from '@src/types/routes/transactions';
import { Component, For, Resource, Show } from 'solid-js';

const Transactions: Component = () => {
  // TODO change after https://github.com/solidjs/solid-router/issues/281
  const transactions = useRouteData() as unknown as Resource<ITxData>;

  return (
    <Show when={!transactions.loading} fallback={<Loading />}>
      <div class="container py-2">
        <div class="row justify-content-center">
          <div class="col-10 col-lg-8 list-group">
            <For each={transactions()?.transactions}>
              {(txHash) => (
                <Transaction
                  txHash={txHash}
                  time={{
                    timestamp: transactions()!.timestamp,
                    fromNowTime: transactions()!.fromNowTime,
                  }}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Transactions;
