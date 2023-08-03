import { useRouteData } from '@solidjs/router';
import Loading from '@src/components/common/Loading';
import { ETHBlock } from '@src/types/routes/blocks';
import { Component, For, Resource, Show } from 'solid-js';

const Transactions: Component = () => {
  // TODO change after https://github.com/solidjs/solid-router/issues/281
  const transactions = useRouteData() as unknown as Resource<
    ETHBlock['transactions']
  >;

  return (
    <Show when={!transactions.loading} fallback={<Loading />}>
      <div class="container py-2">
        <div class="row justify-content-center">
          <div class="col-10 col-lg-8 list-group">
            <For each={transactions()}>
              {(transaction) => (
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span class="">{transaction}</span>
                  <button
                    type="button"
                    aria-current="true"
                    class="badge btn btn-link rounded-pill flex-shrink-1 text-center"
                  >
                    <i class="bi-arrow-down-circle h6" />
                  </button>
                </li>
              )}
            </For>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Transactions;
